
import React from 'react';
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { NavigationMenu } from './sidebar/NavigationMenu';
import { CategoriesSection } from './sidebar/CategoriesSection';
import { UserSection } from './sidebar/UserSection';

const Sidebar = () => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    categories: true,
    popular: true,
    retailers: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto">
      <SidebarContent className="py-4">
        {/* Navigation Section */}
        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Navigation</div>
          <SidebarGroupContent>
            <NavigationMenu />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Categories Section */}
        <SidebarGroup>
          <CategoriesSection 
            isOpen={openSections.categories}
            onToggle={() => toggleSection('categories')}
          />
        </SidebarGroup>

        {/* User Section */}
        <SidebarGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70">Your Deals</div>
          <SidebarGroupContent>
            <UserSection />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
