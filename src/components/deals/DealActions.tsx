
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Share2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface DealActionsProps {
  saved: boolean;
  onSave: () => void;
}

export const DealActions = ({ saved, onSave }: DealActionsProps) => {
  return (
    <div className="flex items-center gap-1">
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-8 px-2"
        title="View deal"
      >
        <ExternalLink className="w-4 h-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn("h-8 px-2", saved && "text-red-500")}
        onClick={onSave}
        title={saved ? "Remove from saved" : "Save deal"}
      >
        <Heart className={cn("w-4 h-4", saved && "fill-current")} />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-8 px-2"
        title="Share deal"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
