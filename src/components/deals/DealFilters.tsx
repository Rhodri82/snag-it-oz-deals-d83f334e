
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid3X3, LayoutList, ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DealFiltersProps {
  selectedCategories: string[];
  selectedRetailers: string[];
  selectedPriceRanges: string[];
  showExpired: boolean;
  onCategoryToggle: (category: string) => void;
  onRetailerToggle: (retailer: string) => void;
  onPriceRangeToggle: (range: string) => void;
  onShowExpiredChange: (show: boolean) => void;
  onClearFilters: () => void;
  viewMode: "list" | "grid";
  onViewModeChange: (mode: "list" | "grid") => void;
}

const categoryOptions = ["Electronics", "Gaming", "Home & Garden", "Fashion", "Groceries", "Travel", "Services"];
const retailerOptions = ["Amazon", "eBay", "JB Hi-Fi", "Telstra", "ALDI", "Coles", "Woolworths", "Target"];
const priceRanges = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $250", value: "100-250" },
  { label: "$250 - $500", value: "250-500" },
  { label: "$500+", value: "500-" }
];

export const DealFilters: React.FC<DealFiltersProps> = ({
  selectedCategories,
  selectedRetailers,
  selectedPriceRanges,
  showExpired,
  onCategoryToggle,
  onRetailerToggle,
  onPriceRangeToggle,
  onShowExpiredChange,
  onClearFilters,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex border rounded-md">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "px-2 rounded-none",
            viewMode === "list" && "bg-muted"
          )}
          onClick={() => onViewModeChange("list")}
        >
          <LayoutList className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "px-2 rounded-none",
            viewMode === "grid" && "bg-muted"
          )}
          onClick={() => onViewModeChange("grid")}
        >
          <Grid3X3 className="w-4 h-4" />
        </Button>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 h-9 px-3 text-xs"
          >
            <Filter className="w-3.5 h-3.5" />
            Filters
            {(selectedCategories.length > 0 || selectedRetailers.length > 0 || selectedPriceRanges.length > 0) && (
              <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full ml-1">
                {selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 md:w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categoryOptions.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => onCategoryToggle(category)}
                    />
                    <label 
                      htmlFor={`category-${category}`}
                      className="text-sm cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
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
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="show-expired"
                checked={showExpired}
                onCheckedChange={(value) => onShowExpiredChange(!!value)}
              />
              <label
                htmlFor="show-expired"
                className="text-sm cursor-pointer"
              >
                Show expired deals
              </label>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={onClearFilters}
              disabled={selectedCategories.length === 0 && selectedRetailers.length === 0 && selectedPriceRanges.length === 0 && !showExpired}
            >
              Clear All Filters
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
