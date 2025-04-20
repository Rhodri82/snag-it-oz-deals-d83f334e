
import React from 'react';
import { Button } from "@/components/ui/button";
import { LayoutList, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ViewModeToggleProps {
  viewMode: "list" | "grid";
  onViewModeChange: (mode: "list" | "grid") => void;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="hidden md:flex border rounded-md">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 rounded-none",
          viewMode === "list" && "bg-muted"
        )}
        onClick={() => onViewModeChange("list")}
      >
        <LayoutList className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 rounded-none",
          viewMode === "grid" && "bg-muted"
        )}
        onClick={() => onViewModeChange("grid")}
      >
        <Grid3X3 className="w-4 h-4" />
      </Button>
    </div>
  );
};
