
import React from 'react';
import { DealTabs } from './DealTabs';
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';
import { useIsMobile } from '@/hooks/use-mobile';

interface DealHeaderProps {
  activeTab: string;
  viewMode: "list" | "grid";
  selectedCategories: string[];
  selectedRetailers: string[];
  selectedPriceRanges: string[];
  showExpired: boolean;
  sortOption: string;
  onTabChange: (tab: string) => void;
  onCategoryToggle: (category: string) => void;
  onRetailerToggle: (retailer: string) => void;
  onPriceRangeToggle: (range: string) => void;
  onShowExpiredChange: (show: boolean) => void;
  onViewModeChange: (mode: "list" | "grid") => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export const DealHeader: React.FC<DealHeaderProps> = ({
  activeTab,
  viewMode,
  selectedCategories,
  selectedRetailers,
  selectedPriceRanges,
  showExpired,
  sortOption,
  onTabChange,
  onCategoryToggle,
  onRetailerToggle,
  onPriceRangeToggle,
  onShowExpiredChange,
  onViewModeChange,
  onSortChange,
  onClearFilters
}) => {
  const isMobile = useIsMobile();

  // For desktop, render tabs and filters/sort normally
  if (!isMobile) {
    return (
      <div className="bg-background border-b px-4 md:px-6 max-w-screen-xl mx-auto mt-0 mb-4">
        {/* Tabs Row */}
        <div className="pt-2 pb-1">
          <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Filters & Sort Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 pb-2">
          <DealFilters
            selectedCategories={selectedCategories}
            selectedRetailers={selectedRetailers}
            selectedPriceRanges={selectedPriceRanges}
            showExpired={showExpired}
            onCategoryToggle={onCategoryToggle}
            onRetailerToggle={onRetailerToggle}
            onPriceRangeToggle={onPriceRangeToggle}
            onShowExpiredChange={onShowExpiredChange}
            onClearFilters={onClearFilters}
            viewMode={viewMode}
            onViewModeChange={onViewModeChange}
          />
          <DealSort sortOption={sortOption} onSortChange={onSortChange} />
        </div>
      </div>
    );
  }

  // For mobile, we'll render just the filter and sort on one line
  return (
    <div className="bg-background border-b px-4 max-w-screen-xl mx-auto mt-0 mb-4">
      {/* Only filters and sort on one line for mobile */}
      <div className="flex items-center justify-between py-2">
        <DealFilters
          selectedCategories={selectedCategories}
          selectedRetailers={selectedRetailers}
          selectedPriceRanges={selectedPriceRanges}
          showExpired={showExpired}
          onCategoryToggle={onCategoryToggle}
          onRetailerToggle={onRetailerToggle}
          onPriceRangeToggle={onPriceRangeToggle}
          onShowExpiredChange={onShowExpiredChange}
          onClearFilters={onClearFilters}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
        />
        <DealSort sortOption={sortOption} onSortChange={onSortChange} />
      </div>
    </div>
  );
};
