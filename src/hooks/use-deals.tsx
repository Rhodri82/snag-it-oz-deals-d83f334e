import { useState, useMemo } from 'react';
import { Deal } from '@/types/deals';

export const useDeals = (initialDeals: Deal[]) => {
  const [activeTab, setActiveTab] = useState("popular");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showExpired, setShowExpired] = useState(false);
  const [sortOption, setSortOption] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeals = useMemo(() => {
    return initialDeals.filter(deal => {
      // Filter by expired status
      if (!showExpired && deal.expired) return false;
      
      // Filter by categories
      if (selectedCategories.length > 0 && 
          !deal.categories?.some(cat => selectedCategories.includes(cat))) {
        return false;
      }
      
      // Filter by retailers
      if (selectedRetailers.length > 0 && !selectedRetailers.includes(deal.retailer)) {
        return false;
      }
      
      // Filter by price ranges
      if (selectedPriceRanges.length > 0) {
        // This would need more robust price parsing logic in a real app
        const numericPrice = parseFloat(deal.price.replace(/[^0-9.]/g, ''));
        const inRange = selectedPriceRanges.some(range => {
          const [min, max] = range.split('-').map(p => parseInt(p || '9999'));
          return numericPrice >= min && (max ? numericPrice <= max : true);
        });
        if (!inRange) return false;
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = deal.title.toLowerCase().includes(query);
        const matchesDescription = deal.description.toLowerCase().includes(query);
        const matchesRetailer = deal.retailer.toLowerCase().includes(query);
        
        if (!matchesTitle && !matchesDescription && !matchesRetailer) {
          return false;
        }
      }
      
      return true;
    });
  }, [initialDeals, showExpired, selectedCategories, selectedRetailers, selectedPriceRanges, searchQuery]);

  const sortedDeals = useMemo(() => {
    return [...filteredDeals].sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case "discussed":
          return (b.commentCount || 0) - (a.commentCount || 0);
        default: // popular
          return (b.votes.yeah - b.votes.nah) - (a.votes.yeah - a.votes.nah);
      }
    });
  }, [filteredDeals, sortOption]);

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRetailers([]);
    setSelectedPriceRanges([]);
    setShowExpired(false);
    setSearchQuery("");
  };

  return {
    activeTab,
    viewMode,
    selectedCategories,
    selectedRetailers,
    selectedPriceRanges,
    showExpired,
    sortOption,
    searchQuery,
    sortedDeals,
    handleTabChange,
    handleCategoryToggle,
    handleRetailerToggle,
    handlePriceRangeToggle,
    handleSearch,
    setShowExpired,
    setViewMode,
    setSortOption,
    clearFilters
  };
};
