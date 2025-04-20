
import React from 'react';
import { User, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserMenu: React.FC = () => {
  // This would come from a user context or auth system in a real app
  const userLevel = {
    level: 2,
    title: "Deal Spotter",
    streak: 3,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex flex-col p-2">
          <p className="font-medium">Guest User</p>
          <div className="level-badge mt-1">
            <Award className="h-3 w-3" />
            Level {userLevel.level} - {userLevel.title}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {userLevel.streak} day streak
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            My Deals
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Saved Deals
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
