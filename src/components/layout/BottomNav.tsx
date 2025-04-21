
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Tag, MessageSquare, User, PlusCircle, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
    },
    {
      icon: Tag,
      label: 'Categories',
      href: '/categories',
    },
    {
      icon: PlusCircle,
      label: 'Submit',
      href: '/submit-deal',
      highlight: true,
    },
    {
      icon: MessageSquare,
      label: 'Discussions',
      href: '/discussions',
    },
    {
      icon: User,
      label: 'Profile',
      href: '/profile',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t">
      <div className="flex justify-between items-center max-w-screen-sm mx-auto">
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.href}
            className={cn(
              "flex flex-col items-center justify-center text-center py-2 flex-1",
              location.pathname === item.href 
                ? "text-primary" 
                : "text-muted-foreground",
              item.highlight && "relative"
            )}
          >
            {item.highlight ? (
              <div className="bg-orange-500 text-white rounded-full p-3 -mt-6 shadow-lg">
                <item.icon className="w-5 h-5" />
              </div>
            ) : (
              <item.icon className="w-5 h-5 mb-1" />
            )}
            <span className="text-xs block">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
