
import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';

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
  const totalFilters = selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length;

  const TABS = [
    { label: "Ripper", value: "popular" },
    { label: "Fresh", value: "newest" },
    { label: "Snagged", value: "trending" },
  ];

  if (isMobile) {
    return (
      <div className="sticky top-[44px] z-40 bg-background border-b">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            {TABS.map((tab) => {
              const selected = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => onTabChange(tab.value)}
                  className="relative text-base font-medium"
                >
                  <span className={selected ? "text-amber-800" : "text-zinc-500"}>
                    {tab.label}
                  </span>
                  {selected && (
                    <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1 relative">
                  <Filter className="h-5 w-5" />
                  {totalFilters > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-amber-500">
                      {totalFilters}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Filters</h4>
                    <button 
                      className="text-xs text-muted-foreground hover:text-foreground"
                      onClick={onClearFilters}
                    >
                      Clear all
                    </button>
                  </div>
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
                </div>
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1">
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48" align="end">
                <div className="grid gap-2">
                  <h4 className="font-medium">Sort by</h4>
                  <DealSort sortOption={sortOption} onSortChange={onSortChange} />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="bg-background border-b px-4 md:px-6 max-w-screen-xl mx-auto mt-0 mb-4">
      {/* Tabs Row */}
      <div className="pt-2 pb-1">
        <div className="flex justify-center">
          {TABS.map((tab) => {
            const selected = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => onTabChange(tab.value)}
                className={`
                  relative inline-block font-medium transition-all mx-1 px-3 py-2 text-sm
                  ${selected
                    ? "text-amber-800 font-bold"
                    : "text-zinc-500 hover:text-amber-700"}
                `}
              >
                <span className="relative inline-block">
                  {tab.label}
                  <span 
                    className={`
                      absolute bottom-0 left-0 right-0 h-[3px] rounded-full 
                      transition-all duration-300 ease-in-out
                      ${selected ? "bg-amber-500" : "bg-transparent"}
                    `} 
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters & Sort Row */}
      <div className="flex items-center justify-between gap-3 pb-2">
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
