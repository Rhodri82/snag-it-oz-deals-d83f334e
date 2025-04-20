
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

import { DesktopNav } from './header/DesktopNav';
import { SearchBar } from './header/SearchBar';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';
import { ThemeToggle } from './theme/ThemeToggle';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="border-b bg-background fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto h-16">

        <div className="flex items-center h-full gap-2 md:gap-4">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
          </Button>
          
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
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            {/* Desktop Search Bar */}


            <div className="hidden md:block mr-4">
              <SearchBar onSearch={onSearch} />
            </div>
            {/* Theme, Notifications, Profile */}
            <ThemeToggle variant="ghost" />
            <NotificationsMenu />
            <UserMenu />
          </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 z-50 bg-background p-4 border-b">
                  <SearchBar onSearch={onSearch}/>
              </div>
            )}
        </div>



      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
