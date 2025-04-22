
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Tag, MessageSquare, Ticket, Search } from "lucide-react";
import { UserMenu } from './header/UserMenu';
import { NotificationsMenu } from './header/NotificationsMenu';
import { ThemeToggle } from './theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const HEADER_HEIGHT = 54;

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background shadow-sm"
      style={{
        minHeight: isMobile ? 44 : 54,
        height: isMobile ? 44 : 54,
      }}
    >
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between px-2 md:px-6"
        style={{
          height: '100%',
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
          <div className="flex items-center ml-6">
            <Link to="/categories" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <Tag className="h-4 w-4" />
              <span>Categories</span>
            </Link>
            <Link to="/discussions" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <MessageSquare className="h-4 w-4" />
              <span>Discussions</span>
            </Link>
            <Link to="/vouchers" className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-amber-900">
              <Ticket className="h-4 w-4" />
              <span>Vouchers</span>
            </Link>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
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

      {/* Mobile search overlay when active */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md p-4">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <input
                  type="search"
                  placeholder="Search deals..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
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
