import React from 'react';
import { Link } from "react-router-dom";
import { Home, Tag, Ticket, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categoryGroups = [
  {
    name: "Tech & Gadgets",
    items: ["Electronics", "Gaming", "Smart Home", "Computers"]
  },
  {
    name: "Groceries",
    items: ["Supermarket", "Fresh Food", "Pantry", "Drinks"]
  },
  {
    name: "Travel",
    items: ["Flights", "Hotels", "Packages", "Car Rental"]
  },
  {
    name: "Fashion",
    items: ["Clothing", "Shoes", "Accessories", "Sports"]
  },
  {
    name: "Bunnings",
    items: ["Tools", "Garden", "Paint", "Storage"]
  },
  {
    name: "Tradies Corner",
    items: ["Power Tools", "Work Wear", "Equipment", "Materials"]
  }
];

export const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
      <Button variant="ghost" asChild>
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Link>
      </Button>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-[600px]">
                {categoryGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <h4 className="font-medium text-sm">{group.name}</h4>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/categories/${item.toLowerCase()}`}
                            className="block text-sm py-1 px-2 rounded-md hover:bg-accent"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
