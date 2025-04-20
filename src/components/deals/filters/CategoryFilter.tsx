
import React from 'react';
import { CategoryPills } from './CategoryPills';

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const categoryOptions = [
  "Electronics",
  "Gaming",
  "Home & Garden",
  "Fashion",
  "Groceries",
  "Travel",
  "Services"
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div className="w-full py-2">
      <h4 className="font-medium text-sm mb-2">Categories</h4>
      <CategoryPills
        categories={categoryOptions}
        selectedCategories={selectedCategories}
        onCategoryToggle={onCategoryToggle}
      />
    </div>
  );
};
