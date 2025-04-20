
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
  achievements = [],
}: DealCardProps) => {
  const { saved, userVote, handleVote, handleSave } = useDealInteractions(temperature, featured, expired);

  return (
    <Card className={cn(
      "overflow-hidden rounded-lg border-l-[4px] transition-shadow hover:shadow-md",
      featured ? "border-l-secondary" : "border-l-primary",
      expired && "opacity-75"
    )}>
      <div className="p-4 md:p-6">
        {/* Retailer and time */}
        <div className="flex justify-between items-center mb-3">
          <Badge variant="outline" className="text-xs px-2 py-0.5">
            {retailer}
          </Badge>
          <div className="text-xs text-muted-foreground flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Voting Panel (left) */}
          <div className="hidden md:flex md:flex-col items-center w-16 shrink-0">
            <DealVoting
              votes={votes}
              userVote={userVote}
              onVote={handleVote}
              commentCount={commentCount}
              orientation="vertical"
            />
          </div>

          {/* Deal Body (right) */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Deal Image */}
              <div className="w-full sm:w-1/3">
                <DealImage imageUrl={imageUrl} title={title} discount={discount} />
              </div>

              {/* Deal Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
                    <h2 className="font-semibold text-base md:text-lg leading-snug mb-1">{title}</h2>
                  </Link>

                  <p className="hidden md:block text-sm text-muted-foreground mb-3">
                    {description}
                  </p>

                  <PriceDisplay 
                    price={price}
                    previousPrice={previousPrice}
                    shipping={shipping}
                  />

                  <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Spotted by {postedBy}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {location}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex justify-between items-center mt-3">
                  <DealCategories categories={categories} />
                  <Button variant="secondary" size="sm" className="rounded-full text-sm px-6" asChild>
                    <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Snag This Deal
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile layout CTA and votes */}
            <div className="md:hidden flex flex-col gap-3 mt-4">
              <DealVoting
                votes={votes}
                userVote={userVote}
                onVote={handleVote}
                commentCount={commentCount}
                orientation="horizontal"
              />
              <Button variant="secondary" size="sm" className="w-full rounded-full text-sm px-6" asChild>
                <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Snag This Deal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
