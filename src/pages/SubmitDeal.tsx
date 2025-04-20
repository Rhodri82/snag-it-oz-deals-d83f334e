
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";
import ImageUpload from '@/components/deals/ImageUpload';
import PriceInput from '@/components/deals/PriceInput';

interface DealForm {
  title: string;
  salePrice: string;
  originalPrice: string;
  retailer: string;
  dealLink: string;
  category: string;
  description: string;
  voucherCode: string;
  voucherExpiry: string;
  image?: File;
}

const SubmitDeal = () => {
  const [formData, setFormData] = useState<DealForm>({
    title: '',
    salePrice: '',
    originalPrice: '',
    retailer: '',
    dealLink: '',
    category: '',
    description: '',
    voucherCode: '',
    voucherExpiry: '',
  });
  const [previewImage, setPreviewImage] = useState<string>();
  const [showVoucherSection, setShowVoucherSection] = useState(false);

  const handleImageSelect = (file: File) => {
    setFormData(prev => ({ ...prev, image: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle form submission
    toast.success("Your deal has been submitted for review!", {
      description: "We'll notify you once it's approved.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Share a Ripper Deal</CardTitle>
            <CardDescription>
              Found something good? Share it with the DealsOz community!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">What'd you find?</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter a descriptive title for the deal"
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ImageUpload
                  onImageSelect={handleImageSelect}
                  selectedImage={previewImage}
                />
                <div className="space-y-4">
                  <PriceInput
                    id="salePrice"
                    label="Sale Price"
                    value={formData.salePrice}
                    onChange={(value) => setFormData(prev => ({ ...prev, salePrice: value }))}
                    required
                  />
                  <PriceInput
                    id="originalPrice"
                    label="Original Price (Optional)"
                    value={formData.originalPrice}
                    onChange={(value) => setFormData(prev => ({ ...prev, originalPrice: value }))}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="retailer">Where'd you find it?</Label>
                  <Input
                    id="retailer"
                    value={formData.retailer}
                    onChange={(e) => setFormData(prev => ({ ...prev, retailer: e.target.value }))}
                    placeholder="Store name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="food">Food & Dining</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="auto">Automotive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealLink">Deal Link</Label>
                <Input
                  id="dealLink"
                  type="url"
                  value={formData.dealLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, dealLink: e.target.value }))}
                  placeholder="https://example.com/deal"
                  required
                />
              </div>

              <Collapsible open={showVoucherSection} onOpenChange={setShowVoucherSection}>
                <CollapsibleTrigger asChild>
                  <Button type="button" variant="outline" className="w-full">
                    {showVoucherSection ? "Hide Voucher Details" : "Add Voucher Code"}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 pt-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="voucherCode">Voucher Code</Label>
                      <Input
                        id="voucherCode"
                        value={formData.voucherCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, voucherCode: e.target.value }))}
                        placeholder="Enter code"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="voucherExpiry">Expiry Date</Label>
                      <Input
                        id="voucherExpiry"
                        type="date"
                        value={formData.voucherExpiry}
                        onChange={(e) => setFormData(prev => ({ ...prev, voucherExpiry: e.target.value }))}
                      />
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <div className="space-y-2">
                <Label htmlFor="description">Why's it a ripper?</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Tell us what makes this deal special..."
                  rows={5}
                  required
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline">Preview</Button>
                <Button type="submit">Submit Deal</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SubmitDeal;
