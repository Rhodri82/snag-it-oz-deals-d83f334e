
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu, 
  Tag, 
  Home, 
  Info, 
  PlusCircle, 
  Bell, 
  Search, 
  X,
  User,
  Heart,
  MapPin,
  Shield
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch = () => {} }) => {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    
    if (window.innerWidth < 768) {
      setShowSearch(false);
    }
  };
  
  return (
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2 p-1">
              <img 
                src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
                alt="DealsOz Logo" 
                className="h-8 w-auto rounded-sm transition-transform hover:scale-105"
              />
            </Link>
          </div>
          
          <form 
            onSubmit={handleSearch} 
            className="hidden md:flex max-w-md flex-1 mx-4"
          >
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search deals, retailers, brands..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
          
          <div className="md:hidden flex-1 flex justify-end">
            {!showSearch ? (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            ) : (
              <form 
                onSubmit={handleSearch} 
                className="flex-1 flex items-center"
              >
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
                  onClick={() => setShowSearch(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
          
          <div className={`flex items-center gap-4 ${showSearch ? 'hidden' : 'flex'} md:flex`}>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/categories">
                <Tag className="w-4 h-4 mr-2" />
                Categories
              </Link>
            </Button>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/about">
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
            </Button>
          </div>
          
          <div className={`flex items-center gap-2 ${showSearch ? 'hidden' : 'flex'} md:flex`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="h-60 overflow-auto py-2">
                  <div className="px-2 py-3 hover:bg-muted rounded-md cursor-pointer">
                    <div className="text-sm font-medium">New deal: Nintendo Switch OLED</div>
                    <p className="text-xs text-muted-foreground">Posted 2 hours ago</p>
                  </div>
                  <div className="px-2 py-3 hover:bg-muted rounded-md cursor-pointer">
                    <div className="text-sm font-medium">Your deal got 10 upvotes</div>
                    <p className="text-xs text-muted-foreground">On: iPhone 15 Pro deal</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    My Deals
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Saved Deals
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-primary hover:bg-primary/90 rounded-full" size="sm" asChild>
              <Link to="/submit-deal">
                <PlusCircle className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline text-xs">Submit</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Deals across Australia</span>
        </div>
      </div>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden fixed bottom-4 right-4 h-12 w-12 rounded-full bg-primary text-white shadow-lg z-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[70%] rounded-t-xl">
          <nav className="flex flex-col gap-2 pt-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/categories" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
            >
              <Tag className="w-5 h-5" />
              <span>Categories</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
            >
              <User className="w-5 h-5" />
              <span>My Account</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
