
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface RetailerFilterProps {
  selectedRetailers: string[];
  onRetailerToggle: (retailer: string) => void;
}

const retailerOptions = ["Amazon", "eBay", "JB Hi-Fi", "Telstra", "ALDI", "Coles", "Woolworths", "Target"];

export const RetailerFilter: React.FC<RetailerFilterProps> = ({
  selectedRetailers,
  onRetailerToggle,
}) => {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">Retailers</h4>
      <div className="grid grid-cols-2 gap-2">
        {retailerOptions.map((retailer) => (
          <div key={retailer} className="flex items-center space-x-2">
            <Checkbox
              id={`retailer-${retailer}`}
              checked={selectedRetailers.includes(retailer)}
              onCheckedChange={() => onRetailerToggle(retailer)}
            />
            <label
              htmlFor={`retailer-${retailer}`}
              className="text-sm cursor-pointer"
            >
              {retailer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
