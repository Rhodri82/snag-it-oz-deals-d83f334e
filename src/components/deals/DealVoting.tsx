
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
  orientation?: 'horizontal' | 'vertical';
}

export const DealVoting = ({
  votes,
  userVote,
  onVote,
  commentCount,
  orientation = 'horizontal'
}: DealVotingProps) => {
  const snagScore = votes.yeah - votes.nah;
  const totalVotes = votes.yeah + votes.nah;

  const getScoreColor = () => {
    if (snagScore >= 20) return "text-green-600 dark:text-green-400";
    if (snagScore >= 10) return "text-green-500 dark:text-green-300";
    if (snagScore >= 5) return "text-green-400";
    if (snagScore <= -10) return "text-red-500";
    if (snagScore < 0) return "text-red-400";
    return "text-muted-foreground";
  };

  return (
    <div className={cn(
      "flex gap-2",
      orientation === 'vertical'
        ? "flex-col items-center"
        : "items-center justify-between w-full"
    )}>
      <div className={cn(
        "flex gap-2",
        orientation === 'vertical' ? "flex-col items-center" : "items-center"
      )}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "h-8 px-2 rounded-full",
                userVote === 'yeah' && "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
                "hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400"
              )}
              onClick={() => onVote('yeah')}
            >
              <ThumbsUp className="w-4 h-4" />
              {orientation === 'horizontal' && <span className="ml-1 text-xs">{votes.yeah}</span>}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Yeah! Ripper deal mate!</TooltipContent>
        </Tooltip>

        {/* Center score in vertical mode */}
        {orientation === 'vertical' && (
          <div className={cn("text-sm font-bold", getScoreColor())}>
            {snagScore}
          </div>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "h-8 px-2 rounded-full",
                userVote === 'nah' && "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
                "hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
              )}
              onClick={() => onVote('nah')}
            >
              <ThumbsDown className="w-4 h-4" />
              {orientation === 'horizontal' && <span className="ml-1 text-xs">{votes.nah}</span>}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Nah, bit ordinary</TooltipContent>
        </Tooltip>
      </div>

      {/* Horizontal mode: summary score */}
      {orientation === 'horizontal' && (
        <div className={cn("text-sm font-semibold", getScoreColor())}>
          {snagScore} Snag Score
          <span className="text-xs text-muted-foreground ml-1">({totalVotes} votes)</span>
        </div>
      )}

      {/* Comments icon always visible */}
      <Button
        variant="ghost"
        size="sm"
        className="h-8 px-2 flex items-center gap-1 text-xs"
        title="View comments"
      >
        <MessageSquare className="w-4 h-4" />
        <span>{commentCount}</span>
      </Button>
    </div>
  );
};
