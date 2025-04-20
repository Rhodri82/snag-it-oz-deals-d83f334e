
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

const SubmitDeal = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your deal has been submitted for review!", {
      description: "We'll notify you once it's approved.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Submit a Deal</CardTitle>
            <CardDescription>
              Share a great deal with the DealsOz community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Deal Title</Label>
                <Input id="title" placeholder="Enter a descriptive title for the deal" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" placeholder="$0.00" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retailer">Retailer</Label>
                  <Input id="retailer" placeholder="Where can this deal be found?" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="auto">Automotive</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide details about the deal including any special conditions or terms"
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealLink">Deal Link</Label>
                <Input id="dealLink" type="url" placeholder="https://example.com/deal" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL (optional)</Label>
                <Input id="image" placeholder="https://example.com/image.jpg" />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">Submit Deal</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SubmitDeal;
