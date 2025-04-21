
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Tag, 
  MessageSquare, 
  Ticket, 
  Info, 
  HelpCircle, 
  FileText, 
  Contact, 
  Mail,
  Menu 
} from "lucide-react";
import { ThemeToggle } from '../theme/ThemeToggle';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Categories', path: '/categories', icon: Tag },
    { name: 'Discussions', path: '/discussions', icon: MessageSquare },
    { name: 'Vouchers', path: '/vouchers', icon: Ticket },
    { name: 'About', path: '/about', icon: Info },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'How It Works', path: '/how-it-works', icon: FileText },
    { name: 'Community Guidelines', path: '/community-guidelines', icon: FileText },
    { name: 'Legal', path: '/legal', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden block">
        <Button variant="ghost" size="icon" className="absolute top-4 left-3">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 pt-12">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={handleLinkClick}>
            <img 
              src="/public/dealsoz_logo_clean.svg" 
              alt="DealsOz – Community Deals Across Australia" 
              className="h-8 w-auto"
            />
          </Link>
          <ThemeToggle />
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 py-2 px-2 hover:bg-muted rounded-md text-foreground"
              onClick={handleLinkClick}
            >
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <Separator className="my-6" />
        
        <Button asChild variant="secondary" className="w-full rounded-full">
          <Link to="/submit-deal" onClick={handleLinkClick}>
            Submit a Deal
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};
