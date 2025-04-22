
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
    <div className="flex items-center justify-between space-x-4 mb-4">
      <div className="flex-grow">
        <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
      </div>
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
        <div className="flex space-x-1">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => onViewModeChange('list')}
          >
            <List size={20} />
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => onViewModeChange('grid')}
          >
            <Grid size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealHeader;
