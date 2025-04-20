
import React from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, MessageSquare, Clock, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const NavigationMenu = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/" className="flex items-center">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/trending">
            <Clock className="w-4 h-4" />
            <span>Trending Bargains</span>
            <Badge variant="outline" className="ml-auto text-xs px-1.5 py-0">24</Badge>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/latest">
            <Clock className="w-4 h-4" />
            <span>Latest Bargains</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/discussed">
            <MessageSquare className="w-4 h-4" />
            <span>Most Discussed</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/submit-deal" className="text-primary">
            <Plus className="w-4 h-4" />
            <span>Share a Bargain</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
