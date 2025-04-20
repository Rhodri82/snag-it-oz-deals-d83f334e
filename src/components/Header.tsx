
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SearchBar } from './header/SearchBar';
import { DesktopNav } from './header/DesktopNav';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';
import { ThemeToggle } from './theme/ThemeToggle';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  return (
    <header className="border-b bg-background fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto h-16">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Mobile: Menu Button */}
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

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/94b05e26-27d9-4f0a-b50e-c3ca3ce313ca.png" 
              alt="DealsOz – Community Deals Across Australia" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Section - Search, Theme, Notifications, Profile */}
          <div className="flex items-center gap-2 ml-auto">
            <SearchBar onSearch={onSearch} />
            <ThemeToggle variant="ghost" />
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
