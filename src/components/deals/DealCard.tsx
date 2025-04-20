
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DealImage } from './DealImage';
import { DealVoting } from './DealVoting';
import { DealCategories } from './DealCategories';
import { PriceDisplay } from './PriceDisplay';
import { useDealInteractions } from '@/hooks/useDealInteractions';
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
  const { userVote, handleVote } = useDealInteractions(temperature, featured, expired);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-sm px-4 py-3 md:px-6 md:py-4",
        featured ? "border-l-4 border-l-secondary" : "border-l-4 border-l-primary",
        expired && "opacity-70"
      )}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-2">
        <Badge variant="outline" className="text-xs px-2 py-0.5">{retailer}</Badge>
        <div className="text-xs text-muted-foreground flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          <span>{timestamp}</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Voting (Desktop) */}
        <div className="hidden md:flex flex-col items-center w-12 pt-1">
          <DealVoting
            votes={votes}
            userVote={userVote}
            onVote={handleVote}
            commentCount={commentCount}
            orientation="vertical"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-40 shrink-0">
          <DealImage imageUrl={imageUrl} title={title} discount={discount} />
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1">
          <Link to={`/deal/${id}`} className="hover:text-primary">
            <h2 className="text-base md:text-lg font-semibold leading-snug mb-1">{title}</h2>
          </Link>

          <p className="hidden md:block text-sm text-muted-foreground mb-2 line-clamp-2">
            {description}
          </p>

          <PriceDisplay
            price={price}
            previousPrice={previousPrice}
            shipping={shipping}
            className="mb-2"
          />

          <div className="text-xs text-muted-foreground flex items-center gap-4 mb-2 hidden md:flex">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              <span>Spotted by {postedBy}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{location}</span>
            </div>
          </div>

          <div className="hidden md:block mb-3">
            <DealCategories categories={categories} />
          </div>

          {/* Mobile Voting */}
          <div className="md:hidden mt-2 border-t pt-2">
            <DealVoting
              votes={votes}
              userVote={userVote}
              onVote={handleVote}
              commentCount={commentCount}
              orientation="horizontal"
            />
          </div>

          {/* CTA Button */}
          <div className="mt-3">
            <Button
              variant="default"
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
    </Card>
  );
};

export default DealCard;
