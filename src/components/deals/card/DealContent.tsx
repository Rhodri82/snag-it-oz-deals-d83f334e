
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { DealTemperature } from './DealTemperature';
import { DealMetadata } from './DealMetadata';
import { DealImage } from '../DealImage';
import { DealCategories } from '../DealCategories';
import { PriceDisplay } from '../PriceDisplay';

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
  dealUrl
}: DealContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3">
        <DealImage imageUrl={imageUrl} title={title} />
      </div>

      <div className="flex-1 flex flex-col">
        <Link to={`/deal/${id}`} className="hover:text-primary transition-colors">
          <h2 className="font-semibold text-base md:text-lg leading-snug mb-2">{title}</h2>
        </Link>

        <p className="hidden lg:block text-sm text-muted-foreground mb-3">{description}</p>

        <PriceDisplay 
          price={price}
          previousPrice={previousPrice}
          shipping={shipping}
        />

        <DealMetadata
          postedBy={postedBy}
          location={location}
          expiresAt={expiresAt}
        />

        <div className="hidden lg:block mb-3">
          <DealCategories categories={categories} />
        </div>

        <div className="flex items-center justify-between mt-auto">
          <DealTemperature temperature={temperature} />
          
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
      </div>
    </div>
  );
};
