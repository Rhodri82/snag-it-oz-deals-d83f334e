
import React from 'react';
import { Link } from "react-router-dom";
import { Home, Tag, Info, User, Menu, Ticket, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileMenu: React.FC = () => {
  return (
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
            to="/ripper-deals" 
            className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
          >
            <Tag className="w-5 h-5" />
            <span>Ripper Deals</span>
          </Link>
          <Link 
            to="/categories" 
            className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
          >
            <Tag className="w-5 h-5" />
            <span>Categories</span>
          </Link>
          <Link 
            to="/vouchers" 
            className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
          >
            <Ticket className="w-5 h-5" />
            <span>Vouchers</span>
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
  );
};
