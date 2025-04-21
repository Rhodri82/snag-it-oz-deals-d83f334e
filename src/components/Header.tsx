
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { DesktopNav } from './header/DesktopNav';
import { SearchBar } from './header/SearchBar';
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { MobileMenu } from './header/MobileMenu';
import { ThemeToggle } from './theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const HEADER_HEIGHT = 54;

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [isDesktopSearchActive, setIsDesktopSearchActive] = React.useState(false);

  const HEADER_HEIGHT = isMobile ? 44 : 54;

  const toggleSearch = () => setIsSearchOpen((v) => !v);

  const toggleDesktopSearch = () => {
    setIsDesktopSearchActive((prev) => !prev);
    if (isDesktopSearchActive) setIsSearchOpen(false);
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
          {!isMobile && isDesktopSearchActive && (
            <SearchBar onSearch={onSearch} className="w-full max-w-md" />
          )}
        </div>

        {/* Right: Submit + Search + User Actions */}
        <div className="flex items-center gap-2">
          <Link to="/submit-deal">
            <Button variant="secondary" size={isDesktopSearchActive ? "icon" : "default"}>
              {isDesktopSearchActive ? (
                <>
                  <span className="text-green-900">D</span>
                  <span className="text-yellow-700">O</span>
                </>
              ) : (
                "Submit a Deal"
              )}
            </Button>
          </Link>

          {!isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleDesktopSearch}>
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
          <SearchBar onSearch={onSearch} />
        </div>
      )}
    </header>
  );
};

export default Header;
