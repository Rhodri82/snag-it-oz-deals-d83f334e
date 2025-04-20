
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Trophy, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const UserScore = () => {
  // Demo data - in a real app this would come from the backend
  const points = 1250;
  const level = Math.floor(points / 1000) + 1;
  const streak = 5;

  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-full">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="font-medium">{points}</span>
            <span className="text-xs text-muted-foreground">pts</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fair Dinkum Points</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="gap-1">
            <Star className="w-3.5 h-3.5" />
            Level {level}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>True Blue Level</p>
        </TooltipContent>
      </Tooltip>

      {streak > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              <span>🔥</span>
              <span>{streak} day streak</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>You're on fire, mate! Keep sharing ripper deals!</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};
