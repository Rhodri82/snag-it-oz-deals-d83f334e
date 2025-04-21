
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

// More compact height for header on mobile & desktop
export const HEADER_HEIGHT = 54; 




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
      }}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between"
        style={{
          height: HEADER_HEIGHT,
          paddingLeft: isMobile ? 0 : 20,
          paddingRight: isMobile ? 0 : 20,
        }}
      >
        {/* Left: Mobile Menu Button / Logo, Desktop: Logo & Nav */}
        <div className="flex items-center gap-4">
          {isMobile ? (
            <div className="flex items-center gap-4">
              <MobileMenu />
              <Link
                to="/"
                className="flex items-center text-lg font-extrabold tracking-tight leading-none ml-2"
              >
                <span className="text-green-900">Deals</span>
                <span className="text-yellow-700">Oz</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight leading-none space-x-1"
              >
                <span className="text-green-900">Deals</span>
                <span className="text-yellow-700">Oz</span>
              </Link>
              {/* Desktop: Navigation Links */}
              <DesktopNav />
            </div>
          )}
        </div>

        {/* Center: Search */}
        <div className={`flex-1 flex justify-center items-center px-1 ${isMobile ? "" : ""}`}>          
          {isMobile ? (
            <div className={`w-full max-w-xs ${isMobile ? "flex justify-end" : ""}`}>
              {isSearchOpen ? (
                <SearchBar onSearch={onSearch} />
              ) : (
                <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleSearch} style={{marginRight: 2}}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Open search</span>
                </Button>
              )}
            </div>
          ) : (
            <SearchBar onSearch={onSearch} className="w-full max-w-md" />
          )}
        </div>

        {/* Actions, to the far right on desktop (Submit Deal, Theme, User, Notifications) */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <Link to="/submit-deal" className="hidden md:block">
            <Button variant="secondary">Submit a Deal</Button>
          </Link>
          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>

        {/* Mobile: Menu Button */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
        
      </div>

      {isMobile && isSearchOpen && (
        <div className="fixed inset-x-0 top-[44px] z-40 md:hidden bg-background border-b p-2 shadow">
          <SearchBar onSearch={onSearch} />
        </div>
      )}

    </header>
    
  );
};

export default Header;
