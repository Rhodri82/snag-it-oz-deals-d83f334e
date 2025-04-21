
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

// Responsive hook for mobile detection
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const isMobile = useIsMobile();

  // New: tight header height for mobile/desktop
  const HEADER_HEIGHT = isMobile ? 52 : 56;

  const toggleSearch = () => setIsSearchOpen((v) => !v);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background shadow-sm"
      style={{ minHeight: HEADER_HEIGHT, height: HEADER_HEIGHT, lineHeight: 1 }}
    >
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between"
        style={{
          height: HEADER_HEIGHT,
          paddingLeft: isMobile ? 8 : 24,
          paddingRight: isMobile ? 8 : 24,
          gap: '0.25rem',
        }}
      >
        {/* Left: Hamburger menu + Logo close together */}
        <div className="flex items-center gap-1 min-w-0">
          {/* Hamburger: always visible on mobile, hidden desktop */}
          <div className="md:hidden relative z-20">
            <MobileMenu />
          </div>
          <Link
            to="/"
            className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight leading-none space-x-1 pl-0"
            style={{ marginLeft: isMobile ? 0 : 2 }}
          >
            <span className="text-green-900">Deals</span>
            <span className="text-yellow-700">Oz</span>
          </Link>
        </div>

        {/* Center: Search (always centered/flexible) */}
        <div className="flex-1 flex justify-center px-1">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* On mobile: search expands/collapses; on desktop, always visible */}
            {!isMobile ? (
              <SearchBar onSearch={onSearch} />
            ) : (
              isSearchOpen ? (
                <SearchBar onSearch={onSearch} />
              ) : (
                <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSearch}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Open search</span>
                </Button>
              )
            )}
          </div>
        </div>

        {/* Right: Actions — icons tight together, but not crowded */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          {/* Theme & Notifications always visible; profile hidden on mobile */}
          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Mobile: Expanding search bar overlay, tidy/compact positioning */}
      {isMobile && isSearchOpen && (
        <div className="fixed inset-x-0 top-[52px] z-40 md:hidden bg-background border-b p-2 shadow">
          <SearchBar onSearch={onSearch} />
        </div>
      )}

      {/* Desktop nav bar: compact, tight height */}
      <nav className="hidden md:block border-t bg-background" style={{ minHeight: 40 }}>
        <DesktopNav />
      </nav>
    </header>
  );
};

export default Header;
