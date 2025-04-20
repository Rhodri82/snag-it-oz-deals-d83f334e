
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
            <Link to="#">
              <Menu className="h-5 w-5" />
            </Link>
          </Button>

          {/* Pure Text Logo */}
          <Link to="/" className="flex items-center text-2xl font-extrabold tracking-tight leading-none space-x-1">
            <span className="text-green-900">Deals</span>
            <span className="text-yellow-700">Oz</span>
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
