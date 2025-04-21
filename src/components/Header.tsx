

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

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-[68px] px-2 sm:px-6 md:px-8">
        {/* Left: Hamburger and Logo */}
        <div className="flex items-center gap-2 min-w-[90px]">
          {/* Mobile hamburger menu button (absolute on mobile, static on desktop) */}
          <div className="md:hidden relative z-20">
            <MobileMenu />
          </div>
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-extrabold tracking-tight leading-none space-x-1 pl-1 md:pl-0">
            <span className="text-green-900">Deals</span>
            <span className="text-yellow-700">Oz</span>
          </Link>
        </div>

        {/* Middle: Search (desktop prominently; mobile hidden) */}
        <div className="flex-1 flex justify-center px-2">
          <div className="w-full max-w-xl">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {/* Mobile: Search toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSearch}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Open search</span>
          </Button>
          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>
      </div>

      {/* Mobile: Expanding search bar overlay */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-[68px] z-40 md:hidden bg-background border-b p-3">
          <SearchBar onSearch={onSearch} />
        </div>
      )}

      {/* Desktop nav bar */}
      <nav className="hidden md:block border-t bg-background">
        <DesktopNav />
      </nav>
    </header>
  );
};

export default Header;
