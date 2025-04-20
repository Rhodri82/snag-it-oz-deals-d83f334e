
import React from 'react';
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Tag, Home, Filter, Fire, Clock, MessageSquare, Star, Check, Heart, Plus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const mainCategories = [
  { id: 'electronics', name: "Electronics", icon: Filter, count: 156 },
  { id: 'fashion', name: "Fashion", icon: Filter, count: 89 },
  { id: 'home', name: "Home & Garden", icon: Filter, count: 203 },
  { id: 'gaming', name: "Gaming", icon: Filter, count: 78 },
  { id: 'groceries', name: "Groceries", icon: Filter, count: 145 }
];

const popularCategories = [
  { id: 'laptops', name: "Laptops", parentId: 'electronics', count: 42 },
  { id: 'smartphones', name: "Smartphones", parentId: 'electronics', count: 68 },
  { id: 'tvs', name: "TVs", parentId: 'electronics', count: 31 },
  { id: 'shoes', name: "Shoes", parentId: 'fashion', count: 35 },
  { id: 'clothing', name: "Clothing", parentId: 'fashion', count: 54 },
];

const popularRetailers = [
  { id: 'amazon', name: "Amazon", count: 237 },
  { id: 'argos', name: "Argos", count: 124 },
  { id: 'currys', name: "Currys", count: 98 },
  { id: 'ebay', name: "eBay", count: 165 },
  { id: 'tesco', name: "Tesco", count: 87 },
];

const Sidebar = () => {
  const { activeCategoryId, setActiveCategoryId } = useSidebar();
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    categories: true,
    popular: true,
    retailers: true
  });

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId === activeCategoryId ? undefined : categoryId);
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <ShadcnSidebar className="hidden lg:block border-r">
      <SidebarContent>
        {/* Navigation Section */}
        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Navigation</div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/" className={cn(
                    "flex items-center", 
                    activeCategoryId === undefined ? "font-medium text-primary" : ""
                  )}>
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/hot">
                    <Fire className="w-4 h-4" />
                    <span>Hot Deals</span>
                    <Badge variant="outline" className="ml-auto text-xs px-1.5 py-0">24</Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/new">
                    <Clock className="w-4 h-4" />
                    <span>New Deals</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/discussed">
                    <MessageSquare className="w-4 h-4" />
                    <span>Most Discussed</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/submit-deal" className="text-primary">
                    <Plus className="w-4 h-4" />
                    <span>Submit Deal</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main Categories Section */}
        <SidebarGroup>
          <Collapsible open={openSections.categories} onOpenChange={() => toggleSection('categories')}>
            <CollapsibleTrigger asChild>
              <div className="px-2 py-1.5 flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded">
                <span className="text-xs font-medium text-sidebar-foreground/70">Categories</span>
                <ChevronRight className={cn("h-4 w-4 transition-transform", 
                  openSections.categories && "rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainCategories.map((category) => (
                    <SidebarMenuItem key={category.id}>
                      <SidebarMenuButton
                        onClick={() => handleCategoryClick(category.id)}
                        className={cn(
                          activeCategoryId === category.id && "bg-accent text-accent-foreground font-medium"
                        )}
                      >
                        <category.icon className="w-4 h-4" />
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
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* Popular Categories Section */}
        <SidebarGroup>
          <Collapsible open={openSections.popular} onOpenChange={() => toggleSection('popular')}>
            <CollapsibleTrigger asChild>
              <div className="px-2 py-1.5 flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded">
                <span className="text-xs font-medium text-sidebar-foreground/70">Popular Categories</span>
                <ChevronRight className={cn("h-4 w-4 transition-transform", 
                  openSections.popular && "rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {popularCategories.map((category) => (
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
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* Retailers Section */}
        <SidebarGroup>
          <Collapsible open={openSections.retailers} onOpenChange={() => toggleSection('retailers')}>
            <CollapsibleTrigger asChild>
              <div className="px-2 py-1.5 flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded">
                <span className="text-xs font-medium text-sidebar-foreground/70">Popular Retailers</span>
                <ChevronRight className={cn("h-4 w-4 transition-transform", 
                  openSections.retailers && "rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {popularRetailers.map((retailer) => (
                    <SidebarMenuItem key={retailer.id}>
                      <SidebarMenuButton asChild>
                        <a href={`/retailer/${retailer.id}`}>
                          <Tag className="w-4 h-4" />
                          <span>{retailer.name}</span>
                          <span className="ml-auto text-xs text-muted-foreground">
                            {retailer.count}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* User Sections */}
        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Your Deals</div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/saved">
                    <Heart className="w-4 h-4" />
                    <span>Saved Deals</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/voted">
                    <Check className="w-4 h-4" />
                    <span>Voted Deals</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/your-deals">
                    <Star className="w-4 h-4" />
                    <span>Your Submissions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
