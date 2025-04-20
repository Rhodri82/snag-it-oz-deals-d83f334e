
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface DealSortProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

export const DealSort: React.FC<DealSortProps> = ({ sortOption, onSortChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 h-9 px-3 text-xs"
        >
          Sort by
          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem 
          onClick={() => onSortChange("popular")}
          className={cn("cursor-pointer", sortOption === "popular" && "font-medium")}
        >
          Popular
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onSortChange("newest")}
          className={cn("cursor-pointer", sortOption === "newest" && "font-medium")}
        >
          Newest first
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onSortChange("hottest")}
          className={cn("cursor-pointer", sortOption === "hottest" && "font-medium")}
        >
          Hottest first
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onSortChange("discussed")}
          className={cn("cursor-pointer", sortOption === "discussed" && "font-medium")}
        >
          Most discussed
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
