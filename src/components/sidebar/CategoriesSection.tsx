
import React from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Filter, Tag, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { mainCategories } from './sidebar-data';
import { useSidebar } from "@/components/ui/sidebar";

interface CategoriesSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CategoriesSection = ({ isOpen, onToggle }: CategoriesSectionProps) => {
  const { activeCategoryId, setActiveCategoryId } = useSidebar();

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId === activeCategoryId ? undefined : categoryId);
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
          {mainCategories.map((category) => (
            <SidebarMenuItem key={category.id}>
              <SidebarMenuButton
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  activeCategoryId === category.id && "bg-accent text-accent-foreground font-medium"
                )}
              >
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {category.count}
                </span>
              </SidebarMenuButton>
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
