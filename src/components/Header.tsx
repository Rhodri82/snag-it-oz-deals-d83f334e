
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, PlusCircle, MapPin } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { SearchBar } from './header/SearchBar';
import { DesktopNav } from './header/DesktopNav';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const { toggleSidebar } = useSidebar();
  
  return (
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2 p-1">
              <img 
                src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
                alt="DealsOz Logo" 
                className="h-8 w-auto rounded-sm transition-transform hover:scale-105"
              />
            </Link>
          </div>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(e.currentTarget.querySelector('input')?.value || '');
            }} 
            className="hidden md:flex max-w-md flex-1 mx-4"
          >
            <div className="relative w-full">
              <SearchBar onSearch={onSearch} />
            </div>
          </form>
          
          <div className="md:hidden flex-1 flex justify-end">
            <SearchBar onSearch={onSearch} />
          </div>
          
          <DesktopNav />
          
          <div className="flex items-center gap-2">
            <NotificationsMenu />
            <UserMenu />
            <Button className="bg-primary hover:bg-primary/90 rounded-full" size="sm" asChild>
              <Link to="/submit-deal">
                <PlusCircle className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline text-xs">Submit</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Deals across Australia</span>
        </div>
      </div>
      
      <MobileMenu />
    </header>
  );
};

export default Header;
