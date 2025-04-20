
import React from 'react';
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Tag, Home, Filter } from "lucide-react";

const categories = [
  { name: "Electronics", count: 156 },
  { name: "Fashion", count: 89 },
  { name: "Home & Garden", count: 203 },
  { name: "Gaming", count: 78 },
  { name: "Groceries", count: 145 }
];

const Sidebar = () => {
  return (
    <ShadcnSidebar className="hidden lg:block">
      <SidebarContent>
        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Navigation</div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/categories">
                    <Tag className="w-4 h-4" />
                    <span>Categories</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Popular Categories</div>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton asChild>
                    <a href={`/category/${category.name.toLowerCase()}`}>
                      <Filter className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {category.count}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
