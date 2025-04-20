
import React from 'react';
import { Link } from "react-router-dom";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, Flame, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const NavigationMenu = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/" className="flex items-center">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/ripper-deals">
            <Flame className="w-4 h-4" />
            <span>Ripper Deals</span>
            <Badge variant="outline" className="ml-auto text-xs px-1.5 py-0">24</Badge>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/fresh">
            <Clock className="w-4 h-4" />
            <span>Fresh Finds</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
