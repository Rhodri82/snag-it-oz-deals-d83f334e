
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Tag, Home, Info, PlusCircle, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
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
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/categories">
                <Tag className="w-4 h-4 mr-2" />
                Categories
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about">
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 rounded-full" size="sm" asChild>
              <Link to="/submit-deal">
                <PlusCircle className="w-4 h-4 mr-1" />
                <span className="text-xs">Submit</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
