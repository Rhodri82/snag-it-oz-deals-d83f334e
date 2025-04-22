
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Tag, MessageSquare, Ticket } from "lucide-react";
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { ThemeToggle } from './theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { DealTabs } from './deals/DealTabs';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onSearch?: (query: string) => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const HEADER_HEIGHT = 54;

const Header: React.FC<HeaderProps> = ({ 
  onSearch = () => {}, 
  activeTab = "popular",
  onTabChange = () => {}
}) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const HEADER_HEIGHT = isMobile ? 44 : 54;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (isMobile) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    const newState = !isSearchOpen;
    setIsSearchOpen(newState);
    
    if (newState) {
      // Focus the search input after it's rendered
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 10);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 w-full border-b bg-background shadow-sm"
      style={{
        minHeight: HEADER_HEIGHT,
        height: isMobile ? 'auto' : HEADER_HEIGHT,
        lineHeight: '1',
      }}
    >
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between px-2 md:px-6"
        style={{
          height: HEADER_HEIGHT,
        }}
      >
        {/* Left: Logo + Hamburger Menu */}
        <div className="flex items-center gap-3">
          <Sheet open={isSideMenuOpen} onOpenChange={setIsSideMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isMobile ? "p-1" : ""}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 pt-12">
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={() => setIsSideMenuOpen(false)}>
                  <div className="flex items-center">
                    <span className="text-green-900 font-bold text-lg">Deals</span>
                    <span className="text-yellow-700 font-bold text-lg">Oz</span>
                  </div>
                </Link>
                <ThemeToggle />
              </div>
              
              <nav className="space-y-1">
                <Link 
                  to="/categories"
                  className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground"
                  onClick={() => setIsSideMenuOpen(false)}
                >
                  <Tag className="h-4 w-4" />
                  Categories
                </Link>
                <Link 
                  to="/discussions"
                  className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground"
                  onClick={() => setIsSideMenuOpen(false)}
                >
                  <MessageSquare className="h-4 w-4" />
                  Discussions
                </Link>
                <Link 
                  to="/vouchers"
                  className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground"
                  onClick={() => setIsSideMenuOpen(false)}
                >
                  <Ticket className="h-4 w-4" />
                  Vouchers
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            to="/"
            className="flex items-center text-xl sm:text-2xl font-extrabold leading-none"
          >
            <span className="text-green-900">Deals</span>
            <span className="text-yellow-700">Oz</span>
          </Link>
        </div>

        {/* Center Navigation - DESKTOP ONLY */}
        {!isMobile && (
          <div 
            className={cn(
              "flex items-center ml-6 transition-all duration-300",
              isSearchOpen && "ml-0"
            )}
          >
            <Link to="/categories" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <Tag className="h-4 w-4" />
              <span className={cn("transition-all duration-300", isSearchOpen && "hidden")}>Categories</span>
            </Link>
            <Link to="/discussions" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <MessageSquare className="h-4 w-4" />
              <span className={cn("transition-all duration-300", isSearchOpen && "hidden")}>Discussions</span>
            </Link>
            <Link to="/vouchers" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <Ticket className="h-4 w-4" />
              <span className={cn("transition-all duration-300", isSearchOpen && "hidden")}>Vouchers</span>
            </Link>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle - visible on both */}
          <ThemeToggle variant="ghost" className={isMobile ? "p-1" : ""} />
          
          {/* Profile Button - Only for Mobile */}
          {isMobile && (
            <Link to="/profile" className="p-1">
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          )}
          
          {/* Search - DESKTOP ONLY */}
          {!isMobile && (
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className={cn(
                  "absolute right-0 transition-all duration-300 ease-in-out",
                  isMobile ? "w-48" : "w-64"
                )}>
                  <div className="flex items-center">
                    <Input
                      ref={searchInputRef}
                      type="search"
                      placeholder="Search deals..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pr-8"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0"
                      onClick={toggleSearch}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleSearch}
                  aria-label="Search"
                  className={isMobile ? "p-1" : ""}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          )}

          {/* Notifications and profile - DESKTOP ONLY */}
          {!isMobile && (
            <>
              <NotificationsMenu />
              <UserMenu />
            </>
          )}
        </div>
      </div>
      
      {/* Mobile filter tabs section - only for mobile */}
      {isMobile && (
        <div className="border-b">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
            <DealTabs activeTab={activeTab} onTabChange={onTabChange} isMobileHeader={true} />
          </div>
        </div>
      )}

      {/* Desktop tabs section - only for desktop */}
      {!isMobile && (
        <div className="border-t border-b bg-background">
          <div className="max-w-screen-2xl mx-auto">
            <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
          </div>
        </div>
      )}

      {/* Mobile search overlay when active */}
      {isMobile && isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md p-4">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Input
                  type="search"
                  placeholder="Search deals..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="flex justify-between">
                <Button 
                  variant="ghost" 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Search</Button>
              </div>
            </form>
          </div>
          <div 
            className="fixed inset-0 bg-black/50 -z-10" 
            onClick={() => setIsSearchOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
