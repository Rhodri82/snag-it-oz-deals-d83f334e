
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
          <a href="/hot">
            <Clock className="w-4 h-4" />
            <span>Hot Deals</span>
            <Badge variant="outline" className="ml-auto text-xs px-1.5 py-0">24</Badge>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/new">
            <Clock className="w-4 h-4" />
            <span>New Deals</span>
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
            <span>Submit Deal</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
