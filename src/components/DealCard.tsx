
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
import { Clock, User, MapPin, MessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  // Calculate snag score
  const snagScore = votes.yeah - votes.nah;
  
  if (isMobile) {
    return (
      <Card className="flex flex-col gap-2 p-3 items-start relative">
        {/* Top retailer and score section */}
        <div className="flex justify-between items-center w-full">
          <Badge variant="outline" className="px-2 py-0.5 bg-background text-xs">
            {retailer}
          </Badge>
          <div className={cn(
            "text-xs px-2 py-0.5 rounded-full text-white font-medium",
            snagScore >= 50 ? "bg-emerald-500" : 
            snagScore >= 20 ? "bg-green-500" : 
            snagScore >= 0 ? "bg-amber-500" : "bg-red-500"
          )}>
            {snagScore > 0 ? `+${snagScore}` : snagScore}
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full mt-1">
          <DealImage 
            imageUrl={imageUrl} 
            title={title} 
            discount={discount} 
            alt={title} 
            className="aspect-video rounded-md"
          />
        </div>
        
        {/* Title and Price */}
        <div className="w-full">
          <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
            <h2 className="text-base font-semibold leading-tight mb-1">{title}</h2>
          </Link>
          
          <div className="flex flex-col gap-1 mt-1">
            <PriceDisplay
              price={price}
              previousPrice={previousPrice}
              shipping={shipping}
              className="text-lg font-semibold"
            />
          </div>
        </div>
        
        {/* Meta info */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground w-full">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{timestamp}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{postedBy}</span>
          </div>
        </div>
        
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-1 w-full">
            <DealCategories categories={categories} className="p-0" />
          </div>
        )}
        
        {/* Voting and Actions */}
        <div className="flex justify-between items-center w-full mt-2 border-t pt-2">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "h-8 px-2 py-0 rounded-md",
                userVote === 'yeah' && "text-emerald-600 font-medium"
              )}
              onClick={() => handleVote('yeah')}
            >
              <span aria-hidden={true}>🇦🇺</span>
              <span className="ml-1">Yeah</span>
              <span className="text-xs text-muted-foreground ml-1">{votes.yeah}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "h-8 px-2 py-0 rounded-md",
                userVote === 'nah' && "text-rose-600 font-medium"
              )}
              onClick={() => handleVote('nah')}
            >
              <span>Nah</span>
              <span className="text-xs text-muted-foreground ml-1">{votes.nah}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 py-0 rounded-md flex items-center gap-1 text-xs"
              asChild
            >
              <Link to={`/deal/${id}#comments`}>
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{commentCount}</span>
              </Link>
            </Button>
          </div>
          
          <Button
            variant="default"
            size="sm"
            className="bg-orange-500 text-white rounded-md px-3 py-1 text-sm hover:bg-orange-600 h-8"
            asChild
          >
            <a href={dealUrl} target="_blank" rel="noopener noreferrer">
              Snag It!
            </a>
          </Button>
        </div>
      </Card>
    );
  }
  
  // Desktop version
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 md:p-6 items-start">
      {/* Desktop Voting Column */}
      <div className="hidden md:flex flex-col items-center gap-2 w-14 shrink-0 justify-start">
        <DealVoting votes={votes} userVote={userVote} onVote={handleVote} commentCount={commentCount} orientation="vertical" />
      </div>

      {/* Image */}
      <div className="w-full md:w-44 shrink-0 aspect-video">
        <DealImage imageUrl={imageUrl} title={title} discount={discount} alt={title} className="aspect-video" />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {/* Retailer Badge */}
        <div className="relative">
          <Badge
            variant="outline"
            className="absolute top-2 left-2 bg-background px-2 py-1 rounded text-xs md:static md:bg-transparent z-10"
          >
            {retailer}
          </Badge>
        </div>
        {/* Title and Price */}
        <div className="flex flex-col gap-1">
          <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
            <h2 className="text-sm md:text-lg font-semibold leading-snug">{title}</h2>
          </Link>

          <div className="ml-0">
            {/* Price */}
            <PriceDisplay
              price={price}
              previousPrice={previousPrice}
              shipping={shipping}
              className="text-lg font-semibold"
            />
          </div>
        </div>

        {/* Description */}
        <p className="hidden md:block text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Info Strip */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
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
          <DealCategories categories={categories} className="p-0" />
        </div>

        {/* Mobile voting & CTA */}
        <div className="flex justify-between items-center mt-2 md:mt-3">
          <div className="md:hidden">
            <DealVoting votes={votes} userVote={userVote} onVote={handleVote} commentCount={commentCount} orientation="horizontal" />
          </div>
          <Button
            variant="default"
            size="default"
            className="bg-orange-500 text-white rounded-md px-4 py-2 text-sm hover:bg-orange-600"
            asChild
          >
            <a href={dealUrl} target="_blank" rel="noopener noreferrer">
              Get deal
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
