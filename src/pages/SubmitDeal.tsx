
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CATEGORIES } from '../data/mockData';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const SubmitDeal = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [includeExpiry, setIncludeExpiry] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState<{ id: string; name: string }[]>([]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const category = CATEGORIES.find(cat => cat.id === value);
    if (category && category.subcategories) {
      setSubcategories(category.subcategories);
    } else {
      setSubcategories([]);
    }
    setSelectedSubcategory("");
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Deal Title</Label>
                <Input id="title" placeholder="Enter a descriptive title for the deal" required />
                <p className="text-xs text-muted-foreground">
                  Be specific and include the product name, retailer, and discount
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Current Price</Label>
                  <Input id="price" placeholder="$0.00" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price (optional)</Label>
                  <Input id="originalPrice" placeholder="$0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retailer">Retailer</Label>
                  <Input id="retailer" placeholder="Where can this deal be found?" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={handleCategoryChange} value={selectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategory</Label>
                  <Select 
                    onValueChange={setSelectedSubcategory} 
                    value={selectedSubcategory}
                    disabled={subcategories.length === 0}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategories.map(subcat => (
                        <SelectItem key={subcat.id} value={subcat.id}>
                          {subcat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
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
                <Label htmlFor="couponCode">Coupon/Promo Code (optional)</Label>
                <Input id="couponCode" placeholder="Enter code if required" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="expiry" 
                  checked={includeExpiry} 
                  onCheckedChange={setIncludeExpiry}
                />
                <Label htmlFor="expiry">This deal has an expiration date</Label>
              </div>
              
              {includeExpiry && (
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiration Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location (optional)</Label>
                  <Input id="location" placeholder="e.g., Sydney, National, etc." />
                  <p className="text-xs text-muted-foreground">
                    Leave blank for online/nationwide deals
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingInfo">Shipping Info (optional)</Label>
                  <Input id="shippingInfo" placeholder="e.g., Free shipping over $50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL (optional)</Label>
                <Input id="image" placeholder="https://example.com/image.jpg" />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm this is a legitimate deal and I've read the community guidelines
                </label>
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
