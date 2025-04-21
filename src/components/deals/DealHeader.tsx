
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
    <div className="bg-background px-2 sm:px-6 md:px-8 py-2 border-b" style={{paddingTop: 0, paddingBottom: 0}}>
      <div className="flex flex-col gap-1">
        {/* Tabs Row - less left padding for compact, remove vertical margin */}
        <div className="pl-0 sm:pl-6 md:pl-8">
          <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Filters & Sort Row - closer to tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mt-0">
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
  );
};
