
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface CategorySelectProps {
  category: string;
  onCategoryChange: (value: string) => void;
}

const CategorySelect = ({ category, onCategoryChange }: CategorySelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="category">Category</Label>
      <Select value={category} onValueChange={onCategoryChange}>
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
  );
};

export default CategorySelect;
