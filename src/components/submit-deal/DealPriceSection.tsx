
import React from 'react';
import ImageUpload from '../deals/ImageUpload';
import PriceInput from '../deals/PriceInput';

interface DealPriceSectionProps {
  salePrice: string;
  originalPrice: string;
  onPriceChange: (field: string, value: string) => void;
  onImageSelect: (file: File) => void;
  selectedImage?: string;
}

const DealPriceSection = ({
  salePrice,
  originalPrice,
  onPriceChange,
  onImageSelect,
  selectedImage,
}: DealPriceSectionProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ImageUpload
        onImageSelect={onImageSelect}
        selectedImage={selectedImage}
      />
      <div className="space-y-4">
        <PriceInput
          id="salePrice"
          label="Sale Price"
          value={salePrice}
          onChange={(value) => onPriceChange('salePrice', value)}
          required
        />
        <PriceInput
          id="originalPrice"
          label="Original Price (Optional)"
          value={originalPrice}
          onChange={(value) => onPriceChange('originalPrice', value)}
        />
      </div>
    </div>
  );
};

export default DealPriceSection;
