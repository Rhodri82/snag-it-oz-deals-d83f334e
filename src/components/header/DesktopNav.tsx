
import React from 'react';
import { Link } from "react-router-dom";
import { Home, Tag, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const DesktopNav: React.FC = () => {
  return (
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
  );
};
