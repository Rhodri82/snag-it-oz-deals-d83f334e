
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CategoryFilter } from './filters/CategoryFilter';
import { RetailerFilter } from './filters/RetailerFilter';
import { PriceRangeFilter } from './filters/PriceRangeFilter';
import { ViewModeToggle } from './filters/ViewModeToggle';
import { ExpiredToggle } from './filters/ExpiredToggle';
import { ClearFiltersButton } from './filters/ClearFiltersButton';

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
  const totalFilters = selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length;

  return (
    <div className="flex items-center gap-2">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 h-9 px-3 text-xs"
          >
            <Filter className="w-3.5 h-3.5" />
            Filters
            {totalFilters > 0 && (
              <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full ml-1">
                {totalFilters}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 md:w-80">
          <div className="grid gap-4">
            <CategoryFilter 
              selectedCategories={selectedCategories}
              onCategoryToggle={onCategoryToggle}
            />
            
            <RetailerFilter
              selectedRetailers={selectedRetailers}
              onRetailerToggle={onRetailerToggle}
            />
            
            <PriceRangeFilter
              selectedPriceRanges={selectedPriceRanges}
              onPriceRangeToggle={onPriceRangeToggle}
            />
            
            <ExpiredToggle
              showExpired={showExpired}
              onShowExpiredChange={onShowExpiredChange}
            />
            
            <ClearFiltersButton
              onClearFilters={onClearFilters}
              disabled={totalFilters === 0 && !showExpired}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
