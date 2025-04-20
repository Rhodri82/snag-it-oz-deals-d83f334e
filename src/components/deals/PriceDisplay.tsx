
import React from 'react';
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: string;
  previousPrice?: string;
  shipping?: string;
  className?: string;
}

export const PriceDisplay = ({ price, previousPrice, shipping, className }: PriceDisplayProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-3">
        <div className="text-xl md:text-2xl font-bold text-primary">{price}</div>
        {previousPrice && (
          <span className="text-sm line-through text-muted-foreground">
            {previousPrice}
          </span>
        )}
      </div>
      {shipping && (
        <span className="text-xs md:text-sm text-muted-foreground">{shipping}</span>
      )}
    </div>
  );
};
