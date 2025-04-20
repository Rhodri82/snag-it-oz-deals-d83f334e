
import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NotificationsMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="h-60 overflow-auto py-2">
          <div className="px-2 py-3 hover:bg-muted rounded-md cursor-pointer">
            <div className="text-sm font-medium">New deal: Nintendo Switch OLED</div>
            <p className="text-xs text-muted-foreground">Posted 2 hours ago</p>
          </div>
          <div className="px-2 py-3 hover:bg-muted rounded-md cursor-pointer">
            <div className="text-sm font-medium">Your deal got 10 upvotes</div>
            <p className="text-xs text-muted-foreground">On: iPhone 15 Pro deal</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center cursor-pointer">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
