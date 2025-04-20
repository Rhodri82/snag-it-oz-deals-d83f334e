
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface PriceRangeFilterProps {
  selectedPriceRanges: string[];
  onPriceRangeToggle: (range: string) => void;
}

const priceRanges = [
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
    <div className="space-y-2">
      <h4 className="font-medium text-sm">Price Range</h4>
      <div className="grid grid-cols-2 gap-2">
        {priceRanges.map((range) => (
          <div key={range.value} className="flex items-center space-x-2">
            <Checkbox
              id={`price-${range.value}`}
              checked={selectedPriceRanges.includes(range.value)}
              onCheckedChange={() => onPriceRangeToggle(range.value)}
            />
            <label
              htmlFor={`price-${range.value}`}
              className="text-sm cursor-pointer"
            >
              {range.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
