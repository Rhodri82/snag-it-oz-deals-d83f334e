
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DealBasicInfo from '@/components/submit-deal/DealBasicInfo';
import DealPriceSection from '@/components/submit-deal/DealPriceSection';
import CategorySelect from '@/components/submit-deal/CategorySelect';
import VoucherSection from '@/components/submit-deal/VoucherSection';
import DealDescription from '@/components/submit-deal/DealDescription';

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

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageSelect = (file: File) => {
    setFormData(prev => ({ ...prev, image: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <DealBasicInfo
                title={formData.title}
                retailer={formData.retailer}
                dealLink={formData.dealLink}
                onFieldChange={handleFieldChange}
              />

              <DealPriceSection
                salePrice={formData.salePrice}
                originalPrice={formData.originalPrice}
                onPriceChange={handleFieldChange}
                onImageSelect={handleImageSelect}
                selectedImage={previewImage}
              />

              <CategorySelect
                category={formData.category}
                onCategoryChange={(value) => handleFieldChange('category', value)}
              />

              <VoucherSection
                voucherCode={formData.voucherCode}
                voucherExpiry={formData.voucherExpiry}
                showVoucherSection={showVoucherSection}
                onVoucherChange={handleFieldChange}
                onToggleVoucher={setShowVoucherSection}
              />

              <DealDescription
                description={formData.description}
                onChange={(value) => handleFieldChange('description', value)}
              />

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
