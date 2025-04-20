
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DealImage } from './deals/DealImage';
import { DealVoting } from './deals/DealVoting';
import { DealCategories } from './deals/DealCategories';
import { PriceDisplay } from './deals/PriceDisplay';
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
<<<<<<< HEAD
    <Card className={cn(
      "flex flex-col md:flex-row items-start transition-all hover:shadow-md px-2 py-2 md:px-3 md:py-3 rounded-md border",
      expired && "opacity-70"
    )}>
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
      {/* Image */}
      <div className="w-full md:w-44 shrink-0">
        <DealImage imageUrl={imageUrl} title={title} discount={discount} />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {/* Retailer Badge */}
        <div className="absolute top-2 left-2 bg-background px-2 py-1 rounded text-xs">
          <Badge variant="outline" className="p-0">{retailer}</Badge>
        </div>

        {/* Title */}
        <Link to={`/deal/${id}`} className="hover:text-primary transition-colors mt-2 ml-2">
          <h2 className="text-base md:text-lg font-semibold leading-snug mb-1">{title}</h2>
        </Link>

        {/* Price */}
        <div className="ml-2">
=======
    <>
      <Card
      className={cn(
        "flex flex-col md:flex-row items-start transition-all hover:shadow-md px-2 py-2 md:px-3 md:py-3 rounded-md border",

        expired && "opacity-70"
      )}
      <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
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

          {/* Price */}
>>>>>>> 6310daf00b446ab9adfb8b3d768dd49e2f947b66
          <PriceDisplay
            price={price}
            previousPrice={previousPrice}
            shipping={shipping}
            className="text-lg font-semibold"
          />
        </div>

<<<<<<< HEAD
        {/* Description */}
        <p className="hidden md:block text-sm text-muted-foreground mb-2 line-clamp-2 ml-2">{description}</p>

        {/* Info Strip */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground ml-2">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{timestamp}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>Spotted by {postedBy}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
=======
          {/* Description */}
          <p className="hidden md:block text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>

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
>>>>>>> 6310daf00b446ab9adfb8b3d768dd49e2f947b66
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mt-2 ml-2">
            <DealCategories categories={categories} className="p-0"/>
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
<<<<<<< HEAD
            <div className="ml-auto">
              <Button
                variant="default"
                size="sm"
                className="bg-orange-500 text-white rounded-md px-4 py-2 text-sm hover:bg-orange-600"
                asChild
              >
                <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get deal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
=======

            <Button
              variant="secondary"
              size="sm"
              className="w-full md:w-auto text-sm px-4"
              asChild
            >
              <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Snag This Deal
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
>>>>>>> 6310daf00b446ab9adfb8b3d768dd49e2f947b66
          </div>
        </div>
      </div>
        {/* Image */}
     <div className="w-full md:w-44 shrink-0">
          <DealImage imageUrl={imageUrl} title={title} discount={discount} />
        </div>
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

      </Card>
    </>
  );
};


export default DealCard;
