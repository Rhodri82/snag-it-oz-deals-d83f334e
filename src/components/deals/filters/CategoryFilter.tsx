
import React from 'react';
import { BaseFilter } from './BaseFilter';

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const categoryOptions = [
  { label: "Electronics", value: "Electronics" },
  { label: "Gaming", value: "Gaming" },
  { label: "Home & Garden", value: "Home & Garden" },
  { label: "Fashion", value: "Fashion" },
  { label: "Groceries", value: "Groceries" },
  { label: "Travel", value: "Travel" },
  { label: "Services", value: "Services" }
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <BaseFilter
      title="Categories"
      items={categoryOptions}
      selectedItems={selectedCategories}
      onItemToggle={onCategoryToggle}
      className="space-y-2"
    />
  );
};
