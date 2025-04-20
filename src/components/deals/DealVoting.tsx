
import React from 'react';
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface DealVotingProps {
  votes: { yeah: number; nah: number };
  userVote: 'yeah' | 'nah' | null;
  onVote: (type: 'yeah' | 'nah') => void;
  commentCount: number;
}

export const DealVoting = ({ votes, userVote, onVote, commentCount }: DealVotingProps) => {
  const snagScore = votes.yeah - votes.nah;
  const totalVotes = votes.yeah + votes.nah;
  const isPopular = snagScore >= 10;
  
  const getScoreColor = () => {
    if (snagScore >= 20) return "text-green-600";
    if (snagScore >= 10) return "text-green-500";
    if (snagScore >= 5) return "text-green-400";
    if (snagScore <= -10) return "text-red-500";
    if (snagScore < 0) return "text-red-400";
    return "text-muted-foreground";
  };

  return (
    <div className={cn(
      "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
      "p-2 rounded-lg transition-all duration-200",
      isPopular && "bg-green-50/50"
    )}>
      <div className="flex items-center justify-between sm:justify-start gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "h-8 px-2 transition-all duration-200",
                userVote === 'yeah' && "text-green-600 bg-green-50",
                "hover:bg-green-50 hover:text-green-600"
              )}
              onClick={() => onVote('yeah')}
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span className="text-xs">{votes.yeah}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Yeah! Ripper deal mate!</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "h-8 px-2 transition-all duration-200",
                userVote === 'nah' && "text-red-600 bg-red-50",
                "hover:bg-red-50 hover:text-red-600"
              )}
              onClick={() => onVote('nah')}
            >
              <ThumbsDown className="w-4 h-4 mr-1" />
              <span className="text-xs">{votes.nah}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Nah, bit ordinary</TooltipContent>
        </Tooltip>

        <div className={cn(
          "text-sm font-medium px-2",
          getScoreColor()
        )}>
          {snagScore} Snag Score
          <span className="text-xs text-muted-foreground ml-1">
            ({totalVotes} votes)
          </span>
        </div>
      </div>

      <Button 
        variant="ghost" 
        size="sm" 
        className="h-8 px-2 ml-auto"
        title="View comments"
      >
        <MessageSquare className="w-4 h-4 mr-1" />
        <span className="text-xs">{commentCount}</span>
      </Button>
    </div>
  );
};
