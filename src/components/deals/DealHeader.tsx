
import React from 'react';
import DealTabs, { DealTab } from './DealTabs';
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';
import { List, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DealHeaderProps {
  activeTab: DealTab;
  onTabChange: (tab: DealTab) => void;
  viewMode: 'list' | 'grid';
  onViewModeChange: (mode: 'list' | 'grid') => void;
  selectedCategories?: string[];
  selectedRetailers?: string[];
  selectedPriceRanges?: string[];
  showExpired?: boolean;
  sortOption?: string;
  onCategoryToggle?: (category: string) => void;
  onRetailerToggle?: (retailer: string) => void;
  onPriceRangeToggle?: (range: string) => void;
  onShowExpiredChange?: (show: boolean) => void;
  onSortChange?: (option: string) => void;
  onClearFilters?: () => void;
}

const DealHeader: React.FC<DealHeaderProps> = ({
  activeTab,
  onTabChange,
  viewMode,
  onViewModeChange,
  selectedCategories = [],
  selectedRetailers = [],
  selectedPriceRanges = [],
  showExpired = false,
  sortOption = "popular",
  onCategoryToggle = () => {},
  onRetailerToggle = () => {},
  onPriceRangeToggle = () => {},
  onShowExpiredChange = () => {},
  onSortChange = () => {},
  onClearFilters = () => {}
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Deal Tabs in their own row */}
      <div className="w-full">
        <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
      </div>
      
      {/* Filters, Sort and View toggles in a row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
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
        
        {/* View Mode Toggle buttons */}
        <div className="flex space-x-1">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => onViewModeChange('list')}
            className="w-10 h-10 p-0"
          >
            <List size={20} />
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => onViewModeChange('grid')}
            className="w-10 h-10 p-0"
          >
            <Grid size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealHeader;
