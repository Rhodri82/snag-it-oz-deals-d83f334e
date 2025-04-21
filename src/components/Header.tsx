
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle, X } from "lucide-react";
import { DesktopNav } from './header/DesktopNav';
import { SearchBar } from './header/SearchBar';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';
import { ThemeToggle } from './theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const HEADER_HEIGHT = 54;

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState("");

  const HEADER_HEIGHT = isMobile ? 44 : 54;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    
    if (window.innerWidth < 768) {
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background shadow-sm"
      style={{
        minHeight: HEADER_HEIGHT,
        height: HEADER_HEIGHT,
        lineHeight: '1',
      }}
    >
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between"
        style={{
          height: HEADER_HEIGHT,
          paddingLeft: isMobile ? 0 : 20,
          paddingRight: isMobile ? 0 : 20,
        }}
      >
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
          {isMobile ? (
            <>
              <MobileMenu />
              <Link
                to="/"
                className="flex items-center text-lg font-extrabold ml-2 leading-none"
              >
                <span className="text-green-900">Deals</span>
                <span className="text-yellow-700">Oz</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="flex items-center text-xl sm:text-2xl font-extrabold leading-none space-x-1"
              >
                <span className="text-green-900">Deals</span>
                <span className="text-yellow-700">Oz</span>
              </Link>
              <DesktopNav />
            </>
          )}
        </div>

        {/* Center: Desktop Search */}
        <div className="flex-1 flex justify-center px-2">
          {!isMobile && isSearchOpen && (
            <div className="w-full max-w-md">
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search deals..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(false)}
                  type="button"
                  className="ml-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Right: Submit + Search + User Actions */}
        <div className="flex items-center gap-2">
          {/* Only show Submit button on desktop and hide when search is open */}
          {!isMobile && (
            <>
              {!isSearchOpen && (
                <Link to="/submit-deal">
                  <Button variant="secondary" size="default">
                    Submit a Deal
                  </Button>
                </Link>
              )}

              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Always show search button on mobile */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>
      </div>

      {/* Mobile Slide-in Search */}
      {isMobile && isSearchOpen && (
        <div className="fixed inset-x-0 top-[44px] z-40 md:hidden bg-background border-b p-2 shadow">
          <form onSubmit={handleSearch} className="flex items-center">
            <Input
              type="search"
              placeholder="Search deals..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(false)}
              type="button"
              className="ml-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
