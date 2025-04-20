
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DealImage } from './DealImage';
import { DealVoting } from './DealVoting';
import { DealCategories } from './DealCategories';
import { PriceDisplay } from './PriceDisplay';
import { useDealInteractions } from '@/hooks/useDealInteractions';
import { getTemperatureRating, getTemperatureColor } from '@/utils/dealTemperature';
import { Clock, User, MapPin, ExternalLink, Tag } from 'lucide-react';
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
      <div className="p-4">
        {/* Mobile and up: Retailer badge and timestamp */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs px-2 py-0.5 bg-background">
            {retailer}
          </Badge>
          <div className="hidden md:flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Thumbnail Image (all screens) */}
          <div className="md:w-1/3">
            <DealImage imageUrl={imageUrl} title={title} discount={discount} />
          </div>

          <div className="flex-1 flex flex-col">
            {/* Title (all screens) */}
            <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
              <h2 className="font-semibold text-base md:text-lg leading-snug mb-2">{title}</h2>
            </Link>

            {/* Description (desktop only) */}
            <p className="hidden lg:block text-sm text-muted-foreground mb-3">{description}</p>

            {/* Price Display (all screens) */}
            <PriceDisplay 
              price={price}
              previousPrice={previousPrice}
              shipping={shipping}
            />

            {/* Posted by info (tablet and up) */}
            <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground mt-2 mb-3">
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

            {/* Categories (desktop only) */}
            <div className="hidden lg:block mb-3">
              <DealCategories categories={categories} />
            </div>

            {/* Deal Score and CTA */}
            <div className="flex items-center justify-between mt-auto">
              <div className={cn(
                "text-xs px-2 py-1 rounded text-white",
                getTemperatureColor(temperature)
              )}>
                {temperature}° <span className="hidden sm:inline">{getTemperatureRating(temperature)}</span>
              </div>
              
              <Button 
                variant="default" 
                size="sm" 
                className="rounded-full text-xs px-4"
                asChild
              >
                <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Snag This Deal <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>

            {/* Voting and Actions */}
            <div className="mt-3 pt-3 border-t">
              <div className="flex items-center justify-between">
                <DealVoting
                  votes={votes}
                  userVote={userVote}
                  onVote={handleVote}
                  commentCount={commentCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
