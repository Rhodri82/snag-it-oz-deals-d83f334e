
import React from 'react';
import { AUSTRALIAN_DEAL_CATEGORIES } from "@/components/sidebar/sidebar-data";

interface DealCategoriesProps {
  categories: string[];
}

export const DealCategories = ({ categories }: DealCategoriesProps) => {
  if (categories.length === 0) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {categories.map((category) => {
        const categoryData = AUSTRALIAN_DEAL_CATEGORIES.find(
          (cat) => cat.slug === category.toLowerCase()
        );

        return (
          <span
            key={category}
            className="pill bg-muted text-xs font-medium text-foreground px-2.5 py-0.5 rounded-full border border-border"
            title={categoryData?.description || ''}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};
