
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const categoryOptions = ["Electronics", "Gaming", "Home & Garden", "Fashion", "Groceries", "Travel", "Services"];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">Categories</h4>
      <div className="grid grid-cols-2 gap-2">
        {categoryOptions.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox 
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => onCategoryToggle(category)}
            />
            <label 
              htmlFor={`category-${category}`}
              className="text-sm cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
