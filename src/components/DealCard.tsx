
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
    <Card className="flex flex-col md:flex-row p-4 gap-4 md:gap-6 md:p-6 items-start">
      {/* Desktop Voting Column */}
      <div className="hidden md:flex flex-col items-center gap-2 px-2 w-14 shrink-0 justify-start">
        <DealVoting
            votes={votes}
            userVote={userVote}
            onVote={handleVote}
            className="mt-2"
              commentCount={commentCount}
              orientation="vertical"
          />
      </div>
      {/* Voting Column */}
      
      {/* Image */}
      <div className="w-full md:w-44 shrink-0 aspect-video">
        <DealImage imageUrl={imageUrl} title={title} discount={discount} className="aspect-video" />
      </div>

      <div className="flex-1 flex flex-col justify-start gap-1">
        {/* Retailer Badge */}
        <div className="absolute top-2 left-2 bg-background px-2 py-1 rounded text-xs md:static md:bg-transparent">
          <Badge variant="outline" className="p-0">{retailer}</Badge>
        </div>

        {/* Title */}
        <Link to={`/deal/${id}`} className="hover:text-primary transition-colors ">
          <h2 className="text-sm md:text-lg font-semibold leading-snug ">
            {title}</h2>
        </Link>

          {/* Price */}
        <div className="ml-2">
          <PriceDisplay
            price={price}
            previousPrice={previousPrice}
            shipping={shipping}
            className="text-lg font-semibold"
          />
        </div>

        {/* Description */}
        <p className="hidden md:block text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Info Strip */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1 truncate">
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
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            <span>{commentCount} comments</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          <DealCategories categories={categories} className="p-0"/>
        </div>

         {/* Mobile voting & CTA */}
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
          <div className=" ">
            <Button
              variant="default"
              size="default"
              className="bg-orange-500 text-white rounded-md px-4 py-2 text-sm hover:bg-orange-600"
              asChild
            >
              <a href={dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Get deal
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