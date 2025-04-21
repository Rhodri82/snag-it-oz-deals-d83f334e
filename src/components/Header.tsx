
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
    <header className="sticky top-0 z-50 w-full border-b bg-background pr-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        {/* Left Section - Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-extrabold tracking-tight leading-none space-x-1"
        >
          <span className="text-green-900">Deals</span>
          <span className="text-yellow-700">Oz</span>
        </Link>

        {/* Center Section - Desktop Search Bar */}
        <div className="hidden md:block flex-1">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Right Section - Mobile Search Toggle, Nav, Actions */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Button */}
          <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute top-16 left-0 right-0 z-50 md:hidden bg-background p-4 border-b">
              <SearchBar onSearch={onSearch} />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />      
          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>

        {/* Mobile: Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" asChild>
          <Link to="#">
            <Menu className="h-5 w-5" />
          </Link>
          </div>



      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu />
    </header>
    
  );
};

export default Header;
