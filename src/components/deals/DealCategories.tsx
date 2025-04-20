
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { AUSTRALIAN_DEAL_CATEGORIES } from "@/components/sidebar/sidebar-data";

interface DealCategoriesProps {
  categories: string[];
}

export const DealCategories = ({ categories }: DealCategoriesProps) => {
  if (categories.length === 0) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-1">
      {categories.map((category) => {
        const categoryData = AUSTRALIAN_DEAL_CATEGORIES.find(
          (cat) => cat.slug === category.toLowerCase()
        );
        
        return (
          <Badge 
            key={category} 
            variant="secondary" 
            className="text-xs flex items-center gap-1"
            title={categoryData?.description}
          >
            {category}
            {categoryData && (
              <span className="text-muted-foreground text-[0.6rem] ml-1">
                {categoryData.description}
              </span>
            )}
          </Badge>
        );
      })}
    </div>
  );
};
