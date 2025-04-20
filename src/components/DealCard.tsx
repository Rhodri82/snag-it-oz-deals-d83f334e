
import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DealHeader } from './deals/card/DealHeader';
import { DealContent } from './deals/card/DealContent';
import { DealVoting } from './deals/DealVoting';
import { useDealInteractions } from '@/hooks/useDealInteractions';
import type { Deal } from '@/types/deals';

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
}: Deal) => {
  const { saved, userVote, handleVote, handleSave } = useDealInteractions(temperature, featured, expired);

  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-md",
      featured ? "border-l-4 border-l-secondary" : "border-l-4 border-l-primary",
      expired && "opacity-75"
    )}>
      <div className="p-4">
        <DealHeader retailer={retailer} timestamp={timestamp} />
        
        <DealContent
          id={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
          price={price}
          previousPrice={previousPrice}
          shipping={shipping}
          postedBy={postedBy}
          location={location}
          expiresAt={expiresAt}
          temperature={temperature}
          categories={categories}
          dealUrl={dealUrl}
        />

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
    </Card>
  );
};

export default DealCard;
