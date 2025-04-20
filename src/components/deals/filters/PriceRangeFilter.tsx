
import React from 'react';
import { BaseFilter } from './BaseFilter';

interface PriceRangeFilterProps {
  selectedPriceRanges: string[];
  onPriceRangeToggle: (range: string) => void;
}

const priceRangeOptions = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $250", value: "100-250" },
  { label: "$250 - $500", value: "250-500" },
  { label: "$500+", value: "500-" }
];

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  selectedPriceRanges,
  onPriceRangeToggle,
}) => {
  return (
    <BaseFilter
      title="Price Range"
      items={priceRangeOptions}
      selectedItems={selectedPriceRanges}
      onItemToggle={onPriceRangeToggle}
      className="space-y-2"
    />
  );
};
