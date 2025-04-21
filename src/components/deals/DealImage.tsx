
import React from 'react';

interface DealImageProps {
  imageUrl?: string;
  title: string;
  discount?: string;
  className?: string;
}

export const DealImage = ({ imageUrl, title, discount, className }: DealImageProps) => {
  const defaultImageUrl = `https://via.placeholder.com/300x200?text=${encodeURIComponent(title)}`;

  return (
    <div className={`relative w-full h-40 rounded border bg-muted overflow-hidden ${className || ''}`}>
      <img
        src={imageUrl || defaultImageUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {discount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm z-10">
          {discount}
        </div>
      )}
    </div>
  );
};
