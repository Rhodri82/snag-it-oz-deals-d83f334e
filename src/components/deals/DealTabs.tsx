
import React from 'react';
import { cn } from "@/lib/utils";
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DealFilters } from './DealFilters';
import { DealSort } from './DealSort';

interface DealTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobileHeader?: boolean;
  selectedCategories?: string[];
  selectedRetailers?: string[];
  selectedPriceRanges?: string[];
  showExpired?: boolean;
  onCategoryToggle?: (category: string) => void;
  onRetailerToggle?: (retailer: string) => void;
  onPriceRangeToggle?: (range: string) => void;
  onShowExpiredChange?: (show: boolean) => void;
  onClearFilters?: () => void;
  sortOption?: string;
  onSortChange?: (sort: string) => void;
}

const TABS = [
  { label: "Ripper", value: "popular" },
  { label: "Fresh", value: "newest" },
  { label: "Snagged", value: "trending" },
];

export const DealTabs: React.FC<DealTabsProps> = ({ 
  activeTab, 
  onTabChange,
  isMobileHeader = false,
  selectedCategories = [],
  selectedRetailers = [],
  selectedPriceRanges = [],
  showExpired = false,
  onCategoryToggle = () => {},
  onRetailerToggle = () => {},
  onPriceRangeToggle = () => {},
  onShowExpiredChange = () => {},
  onClearFilters = () => {},
  sortOption = "popular",
  onSortChange = () => {},
}) => {
  const totalFilters = selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length;
  
  if (isMobileHeader) {
    return (
      <div className="flex items-center justify-between w-full py-2">
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
                <span className={cn(
                  "transition-colors",
                  selected ? "text-amber-800" : "text-zinc-500"
                )}>
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
              <button className="flex items-center justify-center w-8 h-8 rounded-full">
                <Filter className="w-5 h-5 text-muted-foreground" />
                {totalFilters > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-amber-500 text-white rounded-full text-xs font-medium">
                    {totalFilters}
                  </span>
                )}
              </button>
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
                  viewMode="list"
                  onViewModeChange={() => {}}
                  inlinePopover={true}
                />
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-center w-8 h-8 rounded-full">
                <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="end">
              <div className="grid gap-2">
                <h4 className="font-medium">Sort by</h4>
                <DealSort 
                  sortOption={sortOption} 
                  onSortChange={onSortChange} 
                  inlinePopover={true}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }
  
  // Desktop version
  return (
    <div 
      className="doz-tablist flex w-full justify-start sm:justify-center overflow-x-auto hide-scrollbar" 
      style={{ 
        background: "var(--background)",
        marginBottom: 0,
        paddingBottom: 0,
        minHeight: '36px'
      }}
    >
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
  );
};
