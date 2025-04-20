import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DealImage } from './deals/DealImage';
import { DealActions } from './deals/DealActions';
import { DealVoting } from './deals/DealVoting';
import { DealCategories } from './deals/DealCategories';
import { PriceDisplay } from './deals/PriceDisplay';
import { useDealInteractions } from '@/hooks/useDealInteractions';
import { getTemperatureRating, getTemperatureColor } from '@/utils/dealTemperature';

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
  const { saved, userVote, handleVote, handleSave } = useDealInteractions(temperature, featured, expired);

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

        {(imageUrl || title) && (
          <DealImage imageUrl={imageUrl} title={title} discount={discount} />
        )}

        <h2 className="font-semibold text-base leading-snug mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>

        <PriceDisplay 
          price={price}
          previousPrice={previousPrice}
          shipping={shipping}
        />

        <div className="mt-auto pt-3 border-t">
          <div className="flex items-center justify-between mb-2">
            <div className={`text-xs px-2 py-1 rounded text-white ${getTemperatureColor(temperature)}`}>
              {temperature}° <span className="hidden sm:inline">{getTemperatureRating(temperature)}</span>
            </div>
            
            <DealActions saved={saved} onSave={handleSave} />
          </div>
          
          <DealVoting
            votes={votes}
            userVote={userVote}
            onVote={handleVote}
            commentCount={commentCount}
          />
        </div>
        
        <DealCategories categories={categories} />
      </div>
    </Card>
  );
};

export default DealCard;
