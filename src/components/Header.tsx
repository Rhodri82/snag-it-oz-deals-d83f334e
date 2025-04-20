
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
    <header className="border-b bg-background fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Mobile: Left - Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            asChild
          >
            <Link to="#" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Link>
          </Button>

          {/* Logo - Centered on mobile, Left on desktop */}
          <Link to="/" className="flex items-center md:mr-8">
            <img 
              src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
              alt="DealsOz Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Section - Search, Notifications, Profile */}
          <div className="flex items-center gap-2">
            <SearchBar onSearch={onSearch} />
            <NotificationsMenu />
            <UserMenu />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
