
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
  const calculatedDiscount = hasDiscount ? calculateDiscountPercent(previousPrice, price) : null;
  
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline gap-2">
        <span 
          className={cn(
            "font-bold", 
            size === 'large' ? "text-xl md:text-2xl" : "text-lg"
          )}
        >
          {price}
        </span>
        
        {hasDiscount && (
          <span className="text-muted-foreground line-through text-sm">
            {previousPrice}
          </span>
        )}
        
        {calculatedDiscount && (
          <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded">
            -{calculatedDiscount}% OFF
          </span>
        )}
      </div>
      
      {shipping && (
        <div className="text-xs text-muted-foreground mt-1">
          {shipping === "free" ? "Free Shipping" : `Shipping: ${shipping}`}
        </div>
      )}
    </div>
  );
};

// Helper function to calculate discount percentage
const calculateDiscountPercent = (originalPrice: string, currentPrice: string): number | null => {
  const original = parseFloat(originalPrice.replace(/[^0-9.-]+/g, ""));
  const current = parseFloat(currentPrice.replace(/[^0-9.-]+/g, ""));
  
  if (isNaN(original) || isNaN(current) || original <= 0 || current <= 0) {
    return null;
  }
  
  const percentage = Math.round(((original - current) / original) * 100);
  return percentage > 0 ? percentage : null;
};
