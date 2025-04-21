import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { DealTemperature } from './DealTemperature';
import { DealMetadata } from './DealMetadata';
import { DealImage } from '@/components/deals/DealImage';
import { DealCategories } from '@/components/deals/DealCategories';
import { PriceDisplay } from '@/components/deals/PriceDisplay';
import { DealVoting } from '@/components/deals/DealVoting';

interface DealContentProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  price: string;
  previousPrice?: string;
  shipping?: string;
  postedBy: string;
  location?: string;
  expiresAt?: string;
  temperature: number;
  categories?: string[];
  dealUrl?: string;
  votes: { yeah: number; nah: number };
  commentCount: number;
}

export const DealContent = ({
  id,
  title,
  description,
  imageUrl,
  price,
  previousPrice,
  shipping,
  postedBy,
  location,
  expiresAt,
  temperature,
  categories,
  dealUrl,
  votes,
  commentCount
}: DealContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left column for voting on desktop */}
      <div className="hidden md:flex md:flex-col md:items-center md:gap-2 md:w-16">
        <DealVoting
          votes={votes}
          userVote={null}
          onVote={() => {}}
          commentCount={commentCount}
          orientation="vertical"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image column */}
          <div className="w-full md:w-1/3">
            <DealImage imageUrl={imageUrl} title={title} />
          </div>

          {/* Content column */}
          <div className="flex-1 flex flex-col">
            <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
              <h2 className="font-semibold text-base md:text-lg leading-snug mb-2">{title}</h2>
            </Link>

            {/* Description - hidden on mobile */}
            <p className="hidden md:block text-sm text-muted-foreground mb-3">{description}</p>

            <PriceDisplay 
              price={price}
              previousPrice={previousPrice}
              shipping={shipping}
              className="mb-3"
            />

            {/* Mobile voting row */}
            <div className="flex md:hidden items-center border-t border-b py-2 mb-3">
              <DealVoting
                votes={votes}
                userVote={null}
                onVote={() => {}}
                commentCount={commentCount}
                orientation="horizontal"
              />
            </div>

            <DealMetadata
              postedBy={postedBy}
              location={location}
              expiresAt={expiresAt}
              className="mb-3"
            />

            <div className="hidden md:block mb-3">
              <DealCategories categories={categories} />
            </div>

            {/* CTA Button */}
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
    </div>
  );
};
