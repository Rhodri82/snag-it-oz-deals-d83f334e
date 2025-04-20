
import React from 'react';
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: string;
  previousPrice?: string;
  shipping?: string;
  className?: string;
  size?: 'default' | 'large';
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  price, 
  previousPrice, 
  shipping,
  className,
  size = 'default'
}) => {
  const hasDiscount = previousPrice && previousPrice !== price;
  const discount = hasDiscount ? calculateDiscountPercent(previousPrice, price) : null;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <span 
          className={cn(
            "font-bold text-foreground",
            size === 'large' ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          )}
        >
          {price}
        </span>

        {hasDiscount && (
          <span className="line-through text-sm text-muted-foreground">
            {previousPrice}
          </span>
        )}

        {discount && (
          <span className="text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 px-2 py-0.5 rounded">
            -{discount}% OFF
          </span>
        )}
      </div>

      {shipping && (
        <div className="text-xs text-muted-foreground">
          {shipping.toLowerCase().includes("free") ? "Shipping: Free" : `Shipping: ${shipping}`}
        </div>
      )}
    </div>
  );
};

// Helper
const calculateDiscountPercent = (originalPrice: string, currentPrice: string): number | null => {
  const original = parseFloat(originalPrice.replace(/[^0-9.-]+/g, ""));
  const current = parseFloat(currentPrice.replace(/[^0-9.-]+/g, ""));
  if (isNaN(original) || isNaN(current) || original <= 0 || current <= 0) return null;
  const percent = Math.round(((original - current) / original) * 100);
  return percent > 0 ? percent : null;
};
