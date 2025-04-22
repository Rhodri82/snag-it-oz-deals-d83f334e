
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tag, MessageSquare, Ticket, User, PlusCircle, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const BottomNav = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  
  const navItems = [
    {
      icon: Tag,
      label: 'Categories',
      action: () => setIsCategoriesOpen(true),
      isActive: location.pathname === '/categories',
    },
    {
      icon: MessageSquare,
      label: 'Discussions',
      href: '/discussions',
    },
    {
      icon: PlusCircle,
      label: 'Submit',
      href: '/submit-deal',
      highlight: true,
    },
    {
      icon: Ticket,
      label: 'Vouchers',
      href: '/vouchers',
    },
    {
      icon: Search,
      label: 'Search',
      action: () => setIsSearchOpen(true),
      isActive: isSearchOpen,
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t">
        <div className="flex justify-between items-center max-w-screen-sm mx-auto">
          {navItems.map((item) => (
            item.href ? (
              <Link 
                key={item.label} 
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center text-center py-2 flex-1",
                  location.pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground",
                  item.highlight && "relative"
                )}
              >
                {item.highlight ? (
                  <div className="bg-orange-500 text-white rounded-full p-3 -mt-6 shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                ) : (
                  <item.icon className="w-5 h-5 mb-1" />
                )}
                <span className="text-xs block">{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.action}
                className={cn(
                  "flex flex-col items-center justify-center text-center py-2 flex-1",
                  item.isActive
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-xs block">{item.label}</span>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:hidden">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md p-4">
            <form className="space-y-4">
              <div>
                <Input 
                  type="search" 
                  placeholder="Search deals..." 
                  className="w-full"
                  autoFocus
                />
              </div>
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setIsSearchOpen(false)}>
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

      {/* Categories Popup */}
      <Sheet open={isCategoriesOpen} onOpenChange={setIsCategoriesOpen}>
        <SheetContent side="bottom" className="px-4 py-6 rounded-t-xl">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Electronics", "Gaming", "Home & Garden", "Fashion", "Groceries", "Travel", "Services"].map((category) => (
                <Link
                  key={category}
                  to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 p-3 rounded-md border hover:bg-muted"
                  onClick={() => setIsCategoriesOpen(false)}
                >
                  <Tag className="h-4 w-4" />
                  <span>{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
