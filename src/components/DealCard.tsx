import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DealImage } from './deals/DealImage';
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
      "overflow-hidden transition-all hover:shadow-md mb-6",
      featured ? "border-l-4 border-l-secondary" : "border-l-4 border-l-primary",
      expired && "opacity-75"
    )}>
      <div className="p-4 md:p-6">
        {/* Header: Store badge and timestamp */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-xs px-2 py-0.5 bg-background">
            {retailer}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/deal/${id}`} className="block hover:text-primary transition-colors mb-4">
          <h2 className="font-semibold text-lg md:text-xl leading-snug">{title}</h2>
        </Link>

        {/* Price Display */}
        <PriceDisplay 
          price={price}
          previousPrice={previousPrice}
          shipping={shipping}
          className="mb-4"
        />

        {/* Description - Hidden on mobile */}
        <p className="hidden md:block text-sm text-muted-foreground mb-4">{description}</p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            <span>Spotted by {postedBy}</span>
          </div>
          {location && (
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mb-4">
          <DealCategories categories={categories} />
        </div>

        {/* Deal Score and Actions */}
        <div className="flex flex-col md:flex-row gap-4 items-center border-t pt-4">
          <DealVoting
            votes={votes}
            userVote={userVote}
            onVote={handleVote}
            commentCount={commentCount}
          />
          
          <Button 
            variant="default"
            className="w-full md:w-auto rounded-full text-sm px-6 ml-auto"
            asChild
          >
            <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Snag This Deal <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
