
import React from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Filter, Tag, ChevronRight, Star } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useCategories } from "@/contexts/CategoryContext";

interface CategoriesSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CategoriesSection = ({ isOpen, onToggle }: CategoriesSectionProps) => {
  const { 
    categoriesWithCount, 
    activeCategory, 
    setActiveCategory,
    toggleFavorite,
    isFavorite 
  } = useCategories();

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? undefined : categoryId);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <div className="px-2 py-1.5 flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded">
          <span className="text-xs font-medium text-sidebar-foreground/70">Categories</span>
          <ChevronRight className={cn("h-4 w-4 transition-transform", 
            isOpen && "rotate-90")} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenu>
          {categoriesWithCount.map((category) => (
            <SidebarMenuItem key={category.id}>
              <div className="flex items-center w-full">
                <SidebarMenuButton
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "flex-1",
                    activeCategory === category.id && "bg-accent text-accent-foreground font-medium"
                  )}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {category.count}
                  </span>
                </SidebarMenuButton>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(category.slug);
                  }}
                  className={cn(
                    "p-2 hover:text-yellow-500 transition-colors",
                    isFavorite(category.slug) && "text-yellow-500"
                  )}
                >
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/categories" className="text-muted-foreground hover:text-foreground">
                <Tag className="w-4 h-4" />
                <span>All Categories</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </CollapsibleContent>
    </Collapsible>
  );
};
