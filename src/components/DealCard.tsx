

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
import { Clock, User, MapPin, ExternalLink, Award, FlameKindling } from 'lucide-react';
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
  achievements?: string[];
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
  achievements = [],
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
          <div className="text-xs text-muted-foreground flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Left column for voting on desktop */}
          <div className="hidden md:flex md:flex-col md:items-center md:gap-2 md:w-16">
            <DealVoting
              votes={votes}
              userVote={userVote}
              onVote={handleVote}
              commentCount={commentCount}
              orientation="vertical"
            />
          </div>

          {/* Main content with image and details */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image column */}
              <div className="w-full md:w-1/3">
                <DealImage imageUrl={imageUrl} title={title} discount={discount} />
                
                {/* Achievement tags */}
                {achievements.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {achievements.includes("top-deal") && (
                      <div className="achievement-tag flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>Top Deal This Week</span>
                      </div>
                    )}
                    {achievements.includes("hot") && (
                      <div className="achievement-tag flex items-center gap-1">
                        <FlameKindling className="w-3 h-3" />
                        <span>Hot Deal</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content column */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
                  <h2 className="font-semibold text-base md:text-lg leading-snug mb-2">{title}</h2>
                </Link>

                {/* Description - hidden on mobile */}
                <p className="hidden md:block text-sm text-muted-foreground mb-3">{description}</p>

                {/* Price Display */}
                <PriceDisplay 
                  price={price}
                  previousPrice={previousPrice}
                  shipping={shipping}
                  className="mb-3"
                />

                {/* Posted by info */}
                <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground mb-3">
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

                {/* Categories - hidden on mobile */}
                <div className="hidden md:block mb-3">
                  <DealCategories categories={categories} />
                </div>

                {/* Mobile voting row */}
                <div className="flex md:hidden items-center border-t border-b py-2 mb-3">
                  <DealVoting
                    votes={votes}
                    userVote={userVote}
                    onVote={handleVote}
                    commentCount={commentCount}
                    orientation="horizontal"
                  />
                </div>

                {/* CTA Button */}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full md:w-auto md:ml-auto rounded-full text-sm px-6"
                  asChild
                >
                  <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Snag This Deal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
