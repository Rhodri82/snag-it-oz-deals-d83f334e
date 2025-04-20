
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tag, Home, Info, PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-100 shadow-md">
              <img 
                src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
                alt="DealsOz Logo" 
                className="h-14 w-auto rounded-lg transition-transform hover:scale-105"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-4">
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
            </nav>
          </div>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/submit-deal">
              <PlusCircle className="w-4 h-4 mr-2" />
              Submit Deal
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
