
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Tag, MessageSquare, Ticket, PlusCircle } from "lucide-react";
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { ThemeToggle } from './theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const HEADER_HEIGHT = 54;

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
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
        {/* Left: Logo + Hamburger Menu */}
        <div className="flex items-center gap-3">
          <Sheet open={isSideMenuOpen} onOpenChange={setIsSideMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
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

        {/* Center: Navigation Links - with icons and closer to logo */}
        <div className="hidden md:flex items-center ml-6">
          <Link to="/categories" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
            <Tag className="h-4 w-4" />
            Categories
          </Link>
          <Link to="/discussions" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
            <MessageSquare className="h-4 w-4" />
            Discussions
          </Link>
          <Link to="/vouchers" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
            <Ticket className="h-4 w-4" />
            Vouchers
          </Link>
        </div>

        {/* Right: Submit + Search + User Actions */}
        <div className="flex items-center gap-2">
          {/* Submit button using Button component properly */}
          <Link to="/submit-deal">
            <Button variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">
              <PlusCircle className="h-4 w-4 mr-1" />
              Submit a Deal
            </Button>
          </Link>

          {/* Search button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>
      </div>

      {/* Search overlay when active */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-[54px] z-40 bg-background border-b p-2 shadow">
          <form onSubmit={handleSearch} className="flex items-center max-w-md mx-auto">
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
