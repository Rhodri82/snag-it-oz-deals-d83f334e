
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DealImage } from '@/components/deals/DealImage';
import { DealVoting } from '@/components/deals/DealVoting';
import { DealCategories } from '@/components/deals/DealCategories';
import { PriceDisplay } from '@/components/deals/PriceDisplay';
import { useDealInteractions } from '@/hooks/useDealInteractions';
import { Clock, User, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
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
}: DealCardProps) => {
  const { userVote, handleVote } = useDealInteractions(temperature, featured, expired);

  return (
    <Card
      className={cn(
        "flex flex-col md:flex-row items-start transition-all hover:shadow-sm px-4 py-3 md:px-5 md:py-4 rounded-md",
        featured ? "border-l-4 border-l-secondary" : "border-l-4 border-l-primary",
        expired && "opacity-70"
      )}
    >
      {/* Voting Column */}
      <div className="hidden md:flex flex-col items-center gap-2 px-2 w-14 shrink-0">
        <DealVoting
          votes={votes}
          userVote={userVote}
          onVote={handleVote}
          commentCount={commentCount}
          orientation="vertical"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
        {/* Image */}
        <div className="w-full md:w-44 shrink-0">
          <DealImage imageUrl={imageUrl} title={title} discount={discount} />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Meta */}
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
            <Badge variant="outline" className="px-2 py-0.5">{retailer}</Badge>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timestamp}</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
            <h2 className="text-base md:text-lg font-semibold leading-snug mb-1">{title}</h2>
          </Link>

          {/* Description */}
          <p className="hidden md:block text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>

          {/* Price */}
          <PriceDisplay
            price={price}
            previousPrice={previousPrice}
            shipping={shipping}
            className="mb-2"
          />

          {/* Info Strip */}
          <div className="hidden md:flex flex-wrap gap-4 text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>Spotted by {postedBy}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              <span>{commentCount} comments</span>
            </div>
          </div>

          {/* Categories */}
          <div className="hidden md:block mb-2">
            <DealCategories categories={categories} />
          </div>

          {/* Mobile voting + CTA */}
          <div className="flex justify-between items-center mt-2 md:mt-3">
            <div className="md:hidden">
              <DealVoting
                votes={votes}
                userVote={userVote}
                onVote={handleVote}
                commentCount={commentCount}
                orientation="horizontal"
              />
            </div>

            <Button
              variant="default"
              size="sm"
              className="w-full md:w-auto rounded-full text-sm px-6"
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
