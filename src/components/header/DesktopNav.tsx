
import React from 'react';
import { Link } from "react-router-dom";
import { Home, Tag, Info, Ticket, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
      <Button variant="ghost" asChild>
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Link>
      </Button>
      
      <Button variant="ghost" asChild>
        <Link to="/ripper-deals">
          <Tag className="w-4 h-4 mr-2" />
          Ripper Deals
        </Link>
      </Button>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-2 p-4 w-[400px]">
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/categories/tech" 
                    className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                  >
                    <Tag className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Tech</div>
                      <p className="text-sm text-muted-foreground">Latest gadgets and electronics</p>
                    </div>
                  </Link>
                  <Link 
                    to="/categories/groceries" 
                    className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                  >
                    <Tag className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Groceries</div>
                      <p className="text-sm text-muted-foreground">Food and household items</p>
                    </div>
                  </Link>
                  <Link 
                    to="/categories/travel" 
                    className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                  >
                    <Tag className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Travel</div>
                      <p className="text-sm text-muted-foreground">Flights and accommodation</p>
                    </div>
                  </Link>
                  <Link 
                    to="/categories/fashion" 
                    className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                  >
                    <Tag className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Fashion</div>
                      <p className="text-sm text-muted-foreground">Clothing and accessories</p>
                    </div>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="ghost" asChild>
        <Link to="/vouchers">
          <Ticket className="w-4 h-4 mr-2" />
          Vouchers
        </Link>
      </Button>

      <Button 
        className="bg-primary hover:bg-primary/90 rounded-full" 
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
