
import React from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Heart, MessageSquare, Star } from "lucide-react";

export const UserSection = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/my-alerts">
            <Heart className="w-4 h-4" />
            <span>My Watchlist</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/discussions">
            <MessageSquare className="w-4 h-4" />
            <span>My Yarns</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/your-deals">
            <Star className="w-4 h-4" />
            <span>My Rippa Finds</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
