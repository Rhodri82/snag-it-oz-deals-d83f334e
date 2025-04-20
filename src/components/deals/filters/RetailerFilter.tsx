
import React from 'react';
import { BaseFilter } from './BaseFilter';

interface RetailerFilterProps {
  selectedRetailers: string[];
  onRetailerToggle: (retailer: string) => void;
}

const retailerOptions = [
  { label: "Amazon", value: "Amazon" },
  { label: "eBay", value: "eBay" },
  { label: "JB Hi-Fi", value: "JB Hi-Fi" },
  { label: "Telstra", value: "Telstra" },
  { label: "ALDI", value: "ALDI" },
  { label: "Coles", value: "Coles" },
  { label: "Woolworths", value: "Woolworths" },
  { label: "Target", value: "Target" }
];

export const RetailerFilter: React.FC<RetailerFilterProps> = ({
  selectedRetailers,
  onRetailerToggle,
}) => {
  return (
    <BaseFilter
      title="Retailers"
      items={retailerOptions}
      selectedItems={selectedRetailers}
      onItemToggle={onRetailerToggle}
      className="space-y-2"
    />
  );
};
