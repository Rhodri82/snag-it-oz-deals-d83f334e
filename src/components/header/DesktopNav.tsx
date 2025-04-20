
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, Ticket, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CategoryMenu } from './CategoryMenu';

export const DesktopNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
      <Button 
        variant={location.pathname === "/" ? "default" : "ghost"} 
        asChild
      >
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Link>
      </Button>
      
      <CategoryMenu />

      <Button 
        variant={location.pathname === "/discussions" ? "default" : "ghost"} 
        asChild
      >
        <Link to="/discussions">
          <MessageSquare className="w-4 h-4 mr-2" />
          Discussions
        </Link>
      </Button>

      <Button 
        variant={location.pathname === "/vouchers" ? "default" : "ghost"} 
        asChild
      >
        <Link to="/vouchers">
          <Ticket className="w-4 h-4 mr-2" />
          Vouchers
        </Link>
      </Button>

      <Button 
        className={`${location.pathname === "/submit-deal" ? "bg-primary/90" : "bg-primary"} hover:bg-primary/90 rounded-full`}
        size="sm" 
        asChild
      >
        <Link to="/submit-deal">
          <PlusCircle className="w-4 h-4 mr-2" />
          Submit a Deal
        </Link>
      </Button>
    </nav>
  );
};
