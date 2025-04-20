
import React from 'react';
import { DealTabs } from './DealTabs';
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';

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
  return (
    <div className="sticky top-0 z-10 bg-background border-b">
      <div className="container mx-auto px-2 py-3">
        <div className="flex items-center justify-between">
          <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
          <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};
