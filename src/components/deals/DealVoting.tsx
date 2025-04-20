
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface DealVotingProps {
  votes: { yeah: number; nah: number };
  userVote: 'yeah' | 'nah' | null;
  onVote: (type: 'yeah' | 'nah') => void;
  commentCount: number;
}

export const DealVoting = ({ votes, userVote, onVote, commentCount }: DealVotingProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn("h-8 px-2", userVote === 'yeah' && "text-primary")}
              onClick={() => onVote('yeah')}
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-xs">{votes.yeah + (userVote === 'yeah' ? 1 : 0)}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Yeah! Good deal mate!</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn("h-8 px-2", userVote === 'nah' && "text-destructive")}
              onClick={() => onVote('nah')}
            >
              <TrendingDown className="w-4 h-4 mr-1" />
              <span className="text-xs">{votes.nah + (userVote === 'nah' ? 1 : 0)}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Nah, not a good deal</TooltipContent>
        </Tooltip>
      </div>

      <Button 
        variant="ghost" 
        size="sm" 
        className="h-8 px-2"
        title="View comments"
      >
        <MessageSquare className="w-4 h-4 mr-1" />
        <span className="text-xs">{commentCount}</span>
      </Button>
    </div>
  );
};
