
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

interface CategoryPillsProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const pillContent = (
    <div className={`flex gap-2 ${isDesktop ? 'flex-wrap' : 'flex-nowrap'}`}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategories.includes(category) ? "default" : "outline"}
          size="sm"
          className={`
            whitespace-nowrap
            ${selectedCategories.includes(category) 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'hover:bg-accent'}
          `}
          onClick={() => onCategoryToggle(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );

  // On mobile, wrap in ScrollArea for horizontal scrolling
  if (!isDesktop) {
    return (
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="pb-4">{pillContent}</div>
      </ScrollArea>
    );
  }

  return pillContent;
};
