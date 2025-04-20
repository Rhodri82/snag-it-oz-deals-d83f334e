
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/fc099099-dc15-4611-b504-03e427847e9a.png" 
                alt="DealsOz Logo" 
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <Button variant="ghost">Newest</Button>
              <Button variant="ghost">Hottest</Button>
            </nav>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Snag a Deal</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
