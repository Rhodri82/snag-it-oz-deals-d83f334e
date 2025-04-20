
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Home, Tag, MessageSquare, Menu, Ticket, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileMenu: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t py-2 px-4 md:hidden z-50">
        <div className="flex items-center justify-around">
          <Link to="/" className="flex flex-col items-center">
            <Home className={`w-5 h-5 ${location.pathname === "/" ? "text-primary" : "text-foreground"}`} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link to="/categories" className="flex flex-col items-center">
            <Tag className={`w-5 h-5 ${location.pathname.includes("/categories") ? "text-primary" : "text-foreground"}`} />
            <span className="text-xs mt-1">Browse</span>
          </Link>
          
          <Link to="/submit-deal" className="flex flex-col items-center">
            <div className="rounded-full bg-primary text-white p-3 -mt-6 shadow-lg">
              <PlusCircle className="w-6 h-6" />
            </div>
            <span className="text-xs mt-3">Post</span>
          </Link>
          
          <Link to="/vouchers" className="flex flex-col items-center">
            <Ticket className={`w-5 h-5 ${location.pathname === "/vouchers" ? "text-primary" : "text-foreground"}`} />
            <span className="text-xs mt-1">Vouchers</span>
          </Link>
          
          <Link to="/discussions" className="flex flex-col items-center">
            <MessageSquare className={`w-5 h-5 ${location.pathname === "/discussions" ? "text-primary" : "text-foreground"}`} />
            <span className="text-xs mt-1">Chat</span>
          </Link>
        </div>
      </div>

      {/* Full Drawer Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden fixed bottom-4 left-4 h-12 w-12 rounded-full bg-muted shadow-md z-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <nav className="flex flex-col gap-2 pt-4">
            <Link 
              to="/" 
              className={`flex items-center gap-2 p-3 rounded-md ${
                location.pathname === "/" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/categories" 
              className={`flex items-center gap-2 p-3 rounded-md ${
                location.pathname === "/categories" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Tag className="w-5 h-5" />
              <span>Categories</span>
            </Link>
            <Link 
              to="/vouchers" 
              className={`flex items-center gap-2 p-3 rounded-md ${
                location.pathname === "/vouchers" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Ticket className="w-5 h-5" />
              <span>Vouchers</span>
            </Link>
            <Link 
              to="/discussions" 
              className={`flex items-center gap-2 p-3 rounded-md ${
                location.pathname === "/discussions" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discussions</span>
            </Link>
            <Link 
              to="/submit-deal" 
              className="flex items-center gap-2 p-3 bg-primary text-white rounded-md mt-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Submit a Deal</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
