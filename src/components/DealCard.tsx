
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
import { Clock, User, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

interface DealCardProps {
  id: number;
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
  dealUrl?: string;
  postedBy?: string;
  location?: string;
  expiresAt?: string;
}

const DealCard = ({
  id,
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
  dealUrl = "#",
  postedBy = "Anonymous",
  location = "Australia",
  expiresAt,
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
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {(imageUrl || title) && (
            <div className="md:w-1/3">
              <DealImage imageUrl={imageUrl} title={title} discount={discount} />
            </div>
          )}
          
          <div className="flex-1">
            <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
              <h2 className="font-semibold text-base leading-snug mb-2 line-clamp-2">{title}</h2>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>

            <PriceDisplay 
              price={price}
              previousPrice={previousPrice}
              shipping={shipping}
            />

            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2 mb-3">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span>{postedBy}</span>
              </div>
              {location && (
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{location}</span>
                </div>
              )}
              {expiresAt && (
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Expires: {expiresAt}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className={`text-xs px-2 py-1 rounded text-white ${getTemperatureColor(temperature)}`}>
                {temperature}° <span className="hidden sm:inline">{getTemperatureRating(temperature)}</span>
              </div>
              
              <Button 
                variant="default" 
                size="sm" 
                className="rounded-full text-xs px-4"
                asChild
              >
                <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Get Deal <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3 border-t">
          <div className="flex items-center justify-between mb-2">
            <DealVoting
              votes={votes}
              userVote={userVote}
              onVote={handleVote}
              commentCount={commentCount}
            />
            
            <DealActions saved={saved} onSave={handleSave} />
          </div>
          
          <DealCategories categories={categories} />
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
