
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

/**
 * Header Component
 * 
 * Main navigation header for the application. Features:
 * - Mobile hamburger menu
 * - Logo and branding
 * - Search functionality
 * - Theme toggle
 * - Notifications dropdown
 * - User account dropdown
 * - Desktop navigation links
 * 
 * Adapts responsively between mobile and desktop layouts
 */
interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const isMobile = useIsMobile();

  // More compact height for header on mobile & desktop
  const HEADER_HEIGHT = isMobile ? 44 : 54;

  const toggleSearch = () => setIsSearchOpen((v) => !v);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm"
    style={{
      minHeight: HEADER_HEIGHT,
      height: HEADER_HEIGHT,
      lineHeight: '1',
    }}>
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between"
        style={{
          height: HEADER_HEIGHT,
          paddingLeft: isMobile ? 0 : 20,
          paddingRight: isMobile ? 0 : 20,
        }}
      >
        {/* Left: Hamburger & Logo, all on one row, tightly aligned */}
        {isMobile ? (
          // Mobile: Hamburger next to logo, center-aligned
          <div className="flex items-center flex-1 min-w-0 relative" style={{height: HEADER_HEIGHT}}>
            <div className="flex-shrink-0">
              <MobileMenu />
            </div>
            <Link
              to="/"
              className="flex items-center text-lg font-extrabold tracking-tight leading-none mx-2"
              style={{ marginLeft: 2 }}
            >
              <span className="text-green-900">Deals</span>
              <span className="text-yellow-700">Oz</span>
            </Link>
          </div>
        ) : (
          // Desktop: Existing layout
          <div className="flex items-center gap-1 min-w-0">
            <div className="md:hidden relative z-20">
              <MobileMenu />
            </div>
            <Link
              to="/"
              className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight leading-none space-x-1 pl-0"
              style={{ marginLeft: 2 }}
            >
              <span className="text-green-900">Deals</span>
              <span className="text-yellow-700">Oz</span>
            </Link>
          </div>
        )}

        {/* Center: Search */}
        <div className={`flex-1 flex justify-center items-center px-1 ${isMobile ? "" : ""}`}>
          <div className={`w-full max-w-xs ${isMobile ? "flex justify-end" : ""}`}>
            {/* On mobile: search toggles open */}
            {isMobile ? (
              isSearchOpen ? (
                <SearchBar onSearch={onSearch} />
              ) : (
                <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleSearch} style={{marginRight: 2}}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Open search</span>
                </Button>
              )
            ) : (
              <SearchBar onSearch={onSearch} />
            )}
          </div>
        </div>

        {/* Right: Icons - notifications, theme, user */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
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

      {/* Mobile Navigation Menu */}
      <MobileMenu />


      </div>

      {/* Mobile: Expanding search bar overlay, tidy/compact positioning */}
      {isMobile && isSearchOpen && (
        <div className="fixed inset-x-0 top-[44px] z-40 md:hidden bg-background border-b p-2 shadow">
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
