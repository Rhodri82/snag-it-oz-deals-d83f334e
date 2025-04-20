
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ExternalLink, MessageSquare, Share2, Heart, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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
  expireDate,
  shipping = "Free",
  discount,
  previousPrice,
  featured = false,
  expired = false,
}: DealCardProps) => {
  const [saved, setSaved] = React.useState(false);
  const [userVote, setUserVote] = React.useState<'yeah' | 'nah' | null>(null);

  const handleVote = (type: 'yeah' | 'nah') => {
    if (userVote === type) {
      setUserVote(null);
    } else {
      setUserVote(type);
    }
  };

  const handleSave = () => {
    setSaved(prev => !prev);
  };

  return (
    <Card className={cn(
      "overflow-hidden hover:shadow-lg transition-shadow mb-4 border-t-4",
      featured ? "border-t-secondary" : "border-t-primary",
      expired && "opacity-75"
    )}>
      <CardContent className="p-0">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Badge variant="outline" className="text-xs px-1 py-0 h-5 bg-background cursor-pointer">
                    {retailer}
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="w-60 p-2">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{retailer}</h4>
                    <div className="text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Total deals:</span>
                        <span>243</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hot deals:</span>
                        <span>68</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock className="inline-block w-3 h-3 mr-1" /> {timestamp}
              </span>
              {expireDate && (
                <span className="text-xs text-muted-foreground">
                  · Expires {expireDate}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              {featured && (
                <Badge className="bg-secondary text-secondary-foreground text-xs">
                  Featured
                </Badge>
              )}
              {expired && (
                <Badge variant="outline" className="text-xs border-destructive text-destructive">
                  Expired
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            {imageUrl && (
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-sm lg:text-base font-medium line-clamp-2 mb-1">{title}</h2>
              <div className="flex items-center gap-2 mb-1">
                <div className="text-lg lg:text-xl font-bold text-secondary">{price}</div>
                {previousPrice && (
                  <div className="text-sm line-through text-muted-foreground">{previousPrice}</div>
                )}
                {discount && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0 border-green-500 text-green-500">
                    {discount}
                  </Badge>
                )}
              </div>
              {shipping && (
                <div className="text-xs text-muted-foreground">
                  Shipping: {shipping}
                </div>
              )}
              <p className="hidden lg:block text-sm text-muted-foreground mt-2 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 flex flex-col">
        <div className="flex items-center w-full border-t border-b border-muted">
          <div className="flex-1 flex items-center py-2 px-3">
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "h-7 px-1",
                      userVote === 'yeah' && "text-primary"
                    )}
                    onClick={() => handleVote('yeah')}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs">{votes.yeah + (userVote === 'yeah' ? 1 : 0)}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Good deal!</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "h-7 px-1",
                      userVote === 'nah' && "text-destructive"
                    )}
                    onClick={() => handleVote('nah')}
                  >
                    <TrendingDown className="w-4 h-4 mr-1" />
                    <span className="text-xs">{votes.nah + (userVote === 'nah' ? 1 : 0)}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Not a good deal</p>
                </TooltipContent>
              </Tooltip>
              
              <div className="mx-2 text-xs px-1.5 py-0.5 rounded bg-muted">
                {temperature}°
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 py-2 px-3">
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span className="text-xs">{commentCount}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "h-7 px-2",
                saved && "text-red-500"
              )}
              onClick={handleSave}
            >
              <Heart className={cn("w-4 h-4", saved && "fill-current")} />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-7" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              <span className="text-xs">Get deal</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
