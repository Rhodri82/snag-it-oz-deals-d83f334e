
import React from 'react';

interface DealImageProps {
  imageUrl?: string;
  title: string;
  discount?: string;
}

export const DealImage = ({ imageUrl, title, discount }: DealImageProps) => {
  const defaultImageUrl = `https://via.placeholder.com/300x200?text=${encodeURIComponent(title)}`;

  return (
    <div className="relative">
      <img
        src={imageUrl || defaultImageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded mb-3"
        loading="lazy"
      />
      {discount && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
          {discount}
        </div>
      )}
    </div>
  );
};
