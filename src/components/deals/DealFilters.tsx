
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CategoryFilter } from './filters/CategoryFilter';
import { RetailerFilter } from './filters/RetailerFilter';
import { PriceRangeFilter } from './filters/PriceRangeFilter';
import { ExpiredToggle } from './filters/ExpiredToggle';
import { ClearFiltersButton } from './filters/ClearFiltersButton';

/**
 * DealFilters Component
 * 
 * Comprehensive filter controls for deals allowing users to filter by:
 * - Categories
 * - Retailers
 * - Price ranges
 * - Show/hide expired deals
 * 
 * Shows a badge with active filter count and provides clear all functionality.
 * 
 * Used in: DealHeader component
 */
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
  // We still receive these props but don't use them here anymore
  viewMode,
  onViewModeChange,
}) => {
  const totalFilters = selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length;

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 h-9 px-3 text-xs flex items-center"
          >
            <Filter className="w-4 h-4" />
            Filters
            {totalFilters > 0 && (
              <Badge className="ml-1 h-5 w-5 p-0 rounded-full flex items-center justify-center text-[11px]">
                {totalFilters}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[290px] md:w-[320px]">
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
