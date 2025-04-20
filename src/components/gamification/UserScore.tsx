
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Medal } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const UserScore = () => {
  // Demo data - in a real app this would come from the backend
  const points = 1250;
  const level = Math.floor(points / 1000) + 1;
  const streak = 5;
  const achievements = 8;

  const getLevelTitle = (level: number) => {
    if (level >= 5) return "True Blue Legend";
    if (level >= 4) return "Fair Dinkum Pro";
    if (level >= 3) return "Seasoned Bargain Hunter";
    if (level >= 2) return "Deal Spotter";
    return "Fresh Mate";
  };

  const getNextLevelPoints = (level: number) => (level * 1000) - points;

  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-full hover:bg-secondary/20 transition-colors cursor-help">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="font-medium">{points}</span>
            <span className="text-xs text-muted-foreground">pts</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">Fair Dinkum Points</p>
          <p className="text-xs text-muted-foreground">
            {getNextLevelPoints(level)} points until next level
          </p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="gap-1 hover:bg-secondary/90 transition-colors cursor-help">
            <Star className="w-3.5 h-3.5" />
            Level {level} - {getLevelTitle(level)}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Your True Blue Level</p>
        </TooltipContent>
      </Tooltip>

      {achievements > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors cursor-help">
              <Medal className="w-3.5 h-3.5" />
              <span>{achievements}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Achievements Unlocked</p>
          </TooltipContent>
        </Tooltip>
      )}

      {streak > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors cursor-help">
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

