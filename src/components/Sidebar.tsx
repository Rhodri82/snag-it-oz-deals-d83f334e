
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
    <div className="hidden md:block h-[calc(100vh-64px)] w-48 min-w-48 border-r bg-background overflow-y-auto">
      <SidebarContent className="py-2">
        {/* Navigation Section */}
        <SidebarGroup>
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
          <SidebarGroupContent>
            <UserSection />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
