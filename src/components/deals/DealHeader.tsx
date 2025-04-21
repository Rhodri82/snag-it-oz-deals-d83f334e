
import React from 'react';
import { DealTabs } from './DealTabs';
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';

/**
 * DealHeader Component
 * 
 * Main control panel for deal filtering, sorting and display options.
 * Includes tabs, filters, view mode toggle, and sorting controls.
 * 
 * Used in: Index page and other deal listing pages
 */
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
    <div 
      className="bg-background px-2 sm:px-6 md:px-8 border-b" 
      style={{ 
        paddingTop: 0, 
        paddingBottom: 0,
        maxWidth: '1280px', // Matches typical max-w-screen-xl
        margin: '0 auto' 
      }}
    >
      <div className="flex flex-col gap-0">
        {/* Tabs Row - remove extra padding */}
        <div className="pl-0 sm:pl-6 md:pl-8">
          <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Filters & Sort Row - tighter vertical spacing, consistent alignment */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-0">
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
