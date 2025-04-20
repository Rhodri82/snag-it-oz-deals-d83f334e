
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, PlusCircle } from "lucide-react";
import { SearchBar } from './header/SearchBar';
import { DesktopNav } from './header/DesktopNav';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  return (
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
                alt="DealsOz Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchBar onSearch={onSearch} />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <SearchBar onSearch={onSearch} />
            </div>
            
            <DesktopNav />
            
            <NotificationsMenu />
            <UserMenu />
            <Button 
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 rounded-full" 
              size="sm" 
              asChild
            >
              <Link to="/submit-deal">
                <PlusCircle className="w-4 h-4" />
                <span>Submit a Deal</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
          <span>Deals across Australia</span>
        </div>
      </div>
      
      <MobileMenu />
    </header>
  );
};

export default Header;
