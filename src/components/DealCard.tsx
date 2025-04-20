
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, MessageSquare, Share2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface DealCardProps {
  title: string;
  price: string;
  retailer: string;
  description: string;
  imageUrl?: string;
  timestamp: string;
  temperature: number;
  votes: { yeah: number; nah: number };
  commentCount?: number;
  expireDate?: string;
  shipping?: string;
  discount?: string;
  previousPrice?: string;
  featured?: boolean;
  expired?: boolean;
  categories?: string[];
}

const DealCard = ({
  title,
  price,
  retailer,
  description,
  imageUrl,
  timestamp,
  temperature,
  votes,
  commentCount = 0,
  shipping,
  featured = false,
  expired = false,
  categories = [],
}: DealCardProps) => {
  const [saved, setSaved] = React.useState(false);
  const [userVote, setUserVote] = React.useState<'yeah' | 'nah' | null>(null);

  const handleVote = (type: 'yeah' | 'nah') => {
    setUserVote(userVote === type ? null : type);
  };

  const defaultImageUrl = `https://via.placeholder.com/300x200?text=${encodeURIComponent(title)}`;

  return (
    <Card className={cn(
      "overflow-hidden transition-shadow hover:shadow-md",
      featured ? "border-t-4 border-t-secondary" : "border-t-4 border-t-primary",
      expired && "opacity-75"
    )}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs px-2 py-0.5 bg-background">
            {retailer}
          </Badge>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>

        {(imageUrl || defaultImageUrl) && (
          <img
            src={imageUrl || defaultImageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded mb-3"
            loading="lazy"
          />
        )}

        <h2 className="font-semibold text-base leading-snug mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="text-lg font-bold">{price}</div>
          {shipping && (
            <span className="text-sm text-muted-foreground">{shipping}</span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={cn("h-8 px-2", userVote === 'yeah' && "text-primary")}
                  onClick={() => handleVote('yeah')}
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-xs">{votes.yeah + (userVote === 'yeah' ? 1 : 0)}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Good deal!</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={cn("h-8 px-2", userVote === 'nah' && "text-destructive")}
                  onClick={() => handleVote('nah')}
                >
                  <TrendingDown className="w-4 h-4 mr-1" />
                  <span className="text-xs">{votes.nah + (userVote === 'nah' ? 1 : 0)}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Not a good deal</TooltipContent>
            </Tooltip>

            <div className="text-xs px-2 py-1 rounded bg-muted">
              {temperature}°
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <MessageSquare className="w-4 h-4" />
              <span className="ml-1 text-xs">{commentCount}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn("h-8 px-2", saved && "text-red-500")}
              onClick={() => setSaved(!saved)}
            >
              <Heart className={cn("w-4 h-4", saved && "fill-current")} />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
