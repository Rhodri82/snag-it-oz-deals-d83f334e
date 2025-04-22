
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
    <div className="space-y-0">
      {/* Deal Tabs */}
      <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DealTabs activeTab={activeTab} onTabChange={onTabChange} />
      </div>
      
      {/* Filters, Sort and View toggles */}
      <div className="flex items-center justify-between py-2">
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
        
        {/* View Mode Toggle buttons */}
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange('list')}
            className={viewMode === 'list' ? 'bg-accent text-accent-foreground' : ''}
          >
            <List className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange('grid')}
            className={viewMode === 'grid' ? 'bg-accent text-accent-foreground' : ''}
          >
            <Grid className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealHeader;
