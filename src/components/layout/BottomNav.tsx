
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Tag, Bell, User, PlusCircle } from 'lucide-react';
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
      icon: Bell,
      label: 'Alerts',
      href: '/alerts',
    },
    {
      icon: User,
      label: 'Profile',
      href: '/profile',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background border-t px-2 py-1">
        <div className="flex items-center justify-between">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-4 gap-1",
                location.pathname === item.href 
                  ? "text-primary" 
                  : "text-muted-foreground",
                item.highlight && "relative"
              )}
            >
              {item.highlight ? (
                <div className="bg-secondary rounded-full p-3 -mt-6 shadow-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
              ) : (
                <item.icon className="w-5 h-5" />
              )}
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
