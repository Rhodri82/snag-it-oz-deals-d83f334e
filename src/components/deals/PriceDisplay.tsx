
import React from 'react';

interface PriceDisplayProps {
  price: string;
  previousPrice?: string;
  shipping?: string;
}

export const PriceDisplay = ({ price, previousPrice, shipping }: PriceDisplayProps) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="text-lg font-bold">{price}</div>
        {previousPrice && (
          <span className="text-sm line-through text-muted-foreground">{previousPrice}</span>
        )}
      </div>
      {shipping && (
        <span className="text-sm text-muted-foreground">{shipping}</span>
      )}
    </div>
  );
};
