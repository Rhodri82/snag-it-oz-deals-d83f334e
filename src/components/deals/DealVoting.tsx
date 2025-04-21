
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface DealVotingProps {
  votes: { yeah: number; nah: number };
  userVote: 'yeah' | 'nah' | null;
  onVote: (type: 'yeah' | 'nah') => void;
  commentCount: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const DealVoting = ({
  votes,
  userVote,
  onVote,
  commentCount,
  orientation = 'horizontal',
  className
}: DealVotingProps) => {
  const snagScore = votes.yeah - votes.nah;
  const totalVotes = votes.yeah + votes.nah;  

  const getScoreColor = () => {
    if (snagScore >= 20) return "text-emerald-600 dark:text-emerald-400";
    if (snagScore >= 10) return "text-emerald-500 dark:text-emerald-300";
    if (snagScore >= 5) return "text-emerald-400";
    if (snagScore <= -10) return "text-rose-500";
    if (snagScore < 0) return "text-rose-400";
    return "text-muted-foreground";
  };

  return (
    <div className={cn(
      "flex gap-2 w-full",
      orientation === 'vertical'
        ? "flex-col items-center justify-center"
        : "items-center justify-between md:flex-row flex-col",
      className
    )}>
      <div className={cn(
        "flex gap-2 items-center",
        orientation === 'vertical'
          ? "flex-col justify-center"
          : "justify-center md:flex-row flex-col w-full",
      )}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "h-10 px-3 rounded-md border border-border transition-colors",
                userVote === 'yeah' && "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700",
                "hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400",
              )}
              onClick={() => onVote('yeah')}
              aria-label="Vote Yeah"
              aria-pressed={userVote === 'yeah'}
              disabled={userVote === 'yeah'}
            >
              <div className='flex gap-1 items-center'>
                <span aria-hidden={true}>🇦🇺</span>
                <span className="font-bold">Yeah</span>
                {orientation === 'horizontal' && (
                  <span className="text-xs font-normal text-muted-foreground ml-1">{votes.yeah}</span>
                )}
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Ripper deal mate!</TooltipContent>
        </Tooltip>

        {/* Snag Score in vertical mode */}
        {orientation === 'vertical' && (
          <div className={cn(
            "text-sm font-bold",
            getScoreColor(),
            "py-1 px-2 rounded-md border border-border w-full text-center"
            )}>
              <span aria-label='Snag score' className="text-xl">
                {snagScore > 0 ? `+${snagScore}` : snagScore}
              </span>
            <span className="text-xs font-normal text-muted-foreground ml-1 block">
                {snagScore > 0
                ? `Good one! (Total votes: ${totalVotes})`
                : `Meh... (Total votes: ${totalVotes})`}
            </span>
          </div>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "h-10 px-3 rounded-md border border-border transition-colors",
                userVote === 'nah' && "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-700",
                "hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400"
              )}
              onClick={() => onVote('nah')}
              aria-label="Vote Nah"
              aria-pressed={userVote === 'nah'}
              disabled={userVote === 'nah'}
            >
              <div className='flex gap-1 items-center'>
                <span className="font-bold">Nah</span>
                {orientation === 'horizontal' && (
                  <span className="text-xs font-normal text-muted-foreground ml-1">{votes.nah}</span>
                )}
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Nah, bit ordinary</TooltipContent>
        </Tooltip>
      </div>

      {/* Snag score in horizontal mode */}
      {orientation === 'horizontal' && (
        <div className={cn(
            "text-sm font-semibold",
            getScoreColor(),
            "py-1 px-2 rounded-md border border-border w-full text-center"
            )}>
              <span aria-label='Snag score' className="text-xl">{snagScore > 0 ? `+${snagScore}` : snagScore}</span>
            <span className="text-xs text-muted-foreground ml-1">Snag Score ({totalVotes} votes)</span>
        </div>
      )}

      {/* Comments icon always visible */}
      <Button
        variant="ghost"
        size="sm"
        className="h-10 px-3 rounded-md flex items-center gap-1 text-xs"
        title="View comments"
      >
        <MessageSquare className="w-4 h-4" />
        <span>{commentCount}</span>
      </Button>
    </div>
  );
};
