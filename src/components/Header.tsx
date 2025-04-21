
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
import { cn } from "@/lib/utils";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const HEADER_HEIGHT = isMobile ? 44 : 60;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleSearch = () => {
    const newState = !isSearchOpen;
    setIsSearchOpen(newState);
    
    if (newState) {
      setTimeout(() => searchInputRef.current?.focus(), 10);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background shadow-sm"
      style={{ height: HEADER_HEIGHT }}
    >
      <div
        className="max-w-screen-2xl mx-auto flex items-center justify-between px-3 md:px-6"
        style={{ height: HEADER_HEIGHT }}
      >
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isSideMenuOpen} onOpenChange={setIsSideMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 pt-12">
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={() => setIsSideMenuOpen(false)}>
                  <span className="text-green-900 font-bold text-lg">Deals</span>
                  <span className="text-yellow-700 font-bold text-lg">Oz</span>
                </Link>
                <ThemeToggle />
              </div>
              <nav className="space-y-1">
                <Link to="/categories" className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground" onClick={() => setIsSideMenuOpen(false)}>
                  <Tag className="h-4 w-4" /> Categories
                </Link>
                <Link to="/discussions" className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground" onClick={() => setIsSideMenuOpen(false)}>
                  <MessageSquare className="h-4 w-4" /> Discussions
                </Link>
                <Link to="/vouchers" className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground" onClick={() => setIsSideMenuOpen(false)}>
                  <Ticket className="h-4 w-4" /> Vouchers
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="text-xl sm:text-2xl font-extrabold leading-none">
            <span className="text-green-900">Deals</span>
            <span className="text-yellow-700">Oz</span>
          </Link>

          {/* Desktop icons close to logo */}
          <div className={cn("hidden md:flex items-center gap-4", isSearchOpen && "hidden")}>
            <Link to="/categories" className="flex items-center gap-1 text-muted-foreground hover:text-amber-900">
              <Tag className="h-4 w-4" />
              <span>Categories</span>
            </Link>
            <Link to="/discussions" className="flex items-center gap-1 text-muted-foreground hover:text-amber-900">
              <MessageSquare className="h-4 w-4" />
              <span>Discussions</span>
            </Link>
            <Link to="/vouchers" className="flex items-center gap-1 text-muted-foreground hover:text-amber-900">
              <Ticket className="h-4 w-4" />
              <span>Vouchers</span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Search toggle */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="absolute right-0 w-64">
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search deals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-8"
                />
                <Button type="button" variant="ghost" size="icon" className="absolute right-0" onClick={toggleSearch}>
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Submit Deal button */}
          <div className={cn("transition-all duration-300", isSearchOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100")}>
            <Link to="/submit-deal">
              <Button variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">
                <PlusCircle className="h-4 w-4 mr-1" />
                Submit a Deal
              </Button>
            </Link>
          </div>

          <ThemeToggle variant="ghost" />
          <NotificationsMenu />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
