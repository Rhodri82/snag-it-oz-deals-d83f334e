
import { useState } from 'react';
import { Deal } from '@/types/deals';

export const useDeals = (initialDeals: Deal[]) => {
  const [activeTab, setActiveTab] = useState("popular");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showExpired, setShowExpired] = useState(false);
  const [sortOption, setSortOption] = useState("popular");

  const filteredDeals = initialDeals.filter(deal => {
    if (!showExpired && deal.expired) return false;
    
    if (selectedCategories.length > 0 && !deal.categories?.some(cat => selectedCategories.includes(cat))) {
      return false;
    }
    
    if (selectedRetailers.length > 0 && !selectedRetailers.includes(deal.retailer)) {
      return false;
    }
    
    if (selectedPriceRanges.length > 0) {
      return true;
    }
    
    return true;
  });

  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return b.id - a.id;
      case "hottest":
        return b.temperature - a.temperature;
      case "discussed":
        return (b.commentCount || 0) - (a.commentCount || 0);
      default: // popular
        return (b.votes.yeah - b.votes.nah) - (a.votes.yeah - a.votes.nah);
    }
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSortOption(tab);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleRetailerToggle = (retailer: string) => {
    setSelectedRetailers(prev => 
      prev.includes(retailer) 
        ? prev.filter(r => r !== retailer) 
        : [...prev, retailer]
    );
  };

  const handlePriceRangeToggle = (range: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) 
        ? prev.filter(p => p !== range) 
        : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRetailers([]);
    setSelectedPriceRanges([]);
    setShowExpired(false);
  };

  return {
    activeTab,
    viewMode,
    selectedCategories,
    selectedRetailers,
    selectedPriceRanges,
    showExpired,
    sortOption,
    sortedDeals,
    handleTabChange,
    handleCategoryToggle,
    handleRetailerToggle,
    handlePriceRangeToggle,
    setShowExpired,
    setViewMode,
    setSortOption,
    clearFilters
  };
};
