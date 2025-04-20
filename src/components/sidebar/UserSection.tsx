
import React from 'react';
import { Link } from "react-router-dom";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Heart, MessageSquare, Star } from "lucide-react";

export const UserSection = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/my-alerts">
            <Heart className="w-4 h-4" />
            <span>My Watchlist</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/discussions">
            <MessageSquare className="w-4 h-4" />
            <span>My Yarns</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/your-deals">
            <Star className="w-4 h-4" />
            <span>My Rippa Finds</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
