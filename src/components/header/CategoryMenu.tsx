
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tag } from 'lucide-react';

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
    name: "Home & Garden",
    items: ["Tools", "Garden", "Paint", "Storage"]
  },
  {
    name: "Services",
    items: ["Insurance", "Banking", "Internet", "Mobile"]
  }
];

export const CategoryMenu: React.FC = () => {
  const location = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={location.pathname === "/categories" ? "bg-primary text-primary-foreground" : ""}
          >
            <Tag className="w-4 h-4 mr-2" />
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-[600px]">
              {categoryGroups.map((group) => (
                <div key={group.name} className="space-y-2">
                  <h4 className="font-medium text-sm">{group.name}</h4>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/categories/${item.toLowerCase().replace(/\s+/g, '-')}`}
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
  );
};
