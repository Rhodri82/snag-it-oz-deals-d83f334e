import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, MessageSquare, Share2, Heart, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { AUSTRALIAN_DEAL_CATEGORIES } from "@/components/sidebar/sidebar-data";
import { showAchievement } from '@/components/gamification/AchievementPopup';

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
  discount,
  previousPrice,
  featured = false,
  expired = false,
  categories = [],
}: DealCardProps) => {
  const [saved, setSaved] = React.useState(false);
  const [userVote, setUserVote] = React.useState<'yeah' | 'nah' | null>(null);

  const handleVote = (type: 'yeah' | 'nah') => {
    const newVote = userVote === type ? null : type;
    setUserVote(newVote);
    
    if (newVote === 'yeah') {
      if (temperature >= 90) {
        showAchievement({
          title: "Ripper Deal Hunter",
          description: "You've spotted a deadset bargain!",
          points: 50,
          type: 'deal'
        });
      } else if (featured) {
        showAchievement({
          title: "Featured Deal Expert",
          description: "You've got an eye for quality deals!",
          points: 30,
          type: 'special'
        });
      }
    }
  };

  const handleSave = () => {
    const newSaved = !saved;
    setSaved(newSaved);
    
    if (newSaved && !expired) {
      showAchievement({
        title: "Deal Collector",
        description: "Good on ya for saving this beauty!",
        points: 10,
        type: 'deal'
      });
    }
  };

  const defaultImageUrl = `https://via.placeholder.com/300x200?text=${encodeURIComponent(title)}`;

  const getTemperatureRating = () => {
    if (temperature >= 90) return "Deadset Ripper!";
    if (temperature >= 80) return "Bloody Good Deal!";
    if (temperature >= 70) return "Not Bad, Mate";
    if (temperature >= 50) return "Fair Dinkum Bargain";
    return "Bit Ordinary, Skip";
  };

  const getTemperatureColor = () => {
    if (temperature >= 80) return "bg-gradient-to-r from-green-400 to-blue-500";
    if (temperature >= 60) return "bg-gradient-to-r from-yellow-400 to-red-500";
    return "bg-gradient-to-r from-blue-300 to-gray-400";
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-md",
      featured ? "border-l-4 border-l-secondary" : "border-l-4 border-l-primary",
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
          <div className="relative">
            <img
              src={imageUrl || defaultImageUrl}
              alt={title}
              className="w-full h-40 object-cover rounded mb-3"
              loading="lazy"
            />
            {discount && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
                {discount}
              </div>
            )}
          </div>
        )}

        <h2 className="font-semibold text-base leading-snug mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold">{price}</div>
            {previousPrice && (
              <span className="text-sm line-through text-muted-foreground">{previousPrice}</span>
            )}
          </div>
          {shipping && (
            <span className="text-sm text-muted-foreground">{shipping}</span>
          )}
        </div>

        <div className="mt-auto pt-3 border-t">
          <div className="flex items-center justify-between mb-2">
            <div className={`text-xs px-2 py-1 rounded text-white ${getTemperatureColor()}`}>
              {temperature}° <span className="hidden sm:inline">{getTemperatureRating()}</span>
            </div>
            
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
                onClick={handleSave}
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
          </div>
          
          <div className="flex items-center justify-between">
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
                <TooltipContent>Yeah! Good deal mate!</TooltipContent>
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
        </div>
        
        {categories.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {categories.map((category) => {
              const categoryData = AUSTRALIAN_DEAL_CATEGORIES.find(
                (cat) => cat.slug === category.toLowerCase()
              );
              
              return (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="text-xs flex items-center gap-1"
                  title={categoryData?.description}
                >
                  {category}
                  {categoryData && (
                    <span className="text-muted-foreground text-[0.6rem] ml-1">
                      {categoryData.description}
                    </span>
                  )}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default DealCard;
