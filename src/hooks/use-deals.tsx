
import { useState, useMemo } from "react";
import { calculateTrendingScore } from "@/utils/trendingScore";
import { Deal } from "@/types/deals";

export interface DealWithTrendingScore extends Deal {
  trendingScore: number;
}

export const useDeals = (initialDeals: Deal[]) => {
  // Pre-calculate trending scores for each deal
  const dealsWithScores: DealWithTrendingScore[] = useMemo(() => {
    return initialDeals.map((deal) => ({
      ...deal,
      trendingScore: calculateTrendingScore(
        deal.votes.yeah,
        deal.votes.nah,
        new Date(deal.timestamp),
      ),
    }));
  }, [initialDeals]);

  const [activeTab, setActiveTab] = useState<string>("popular");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list"); // default to list view
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showExpired, setShowExpired] = useState(false);
  const [sortOption, setSortOption] = useState<string>("popular"); // default sorting
  const [searchQuery, setSearchQuery] = useState<string>(""); // default empty search query

  // Filter deals based on selected criteria
  const filteredDeals: DealWithTrendingScore[] = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return dealsWithScores.filter((deal) => {
      const lowerCaseTitle = deal.title.toLowerCase();
      const lowerCaseDescription = deal.description.toLowerCase();
      const lowerCaseRetailer = deal.retailer.toLowerCase();

      // Filter by expired status. return false if deal is expired and we don't want expired ones
      if (!showExpired && deal.expired) return false;
      
      // Filter by categories
      if (selectedCategories.length > 0 && 
        !deal.categories?.some(cat => selectedCategories.includes(cat))) {
        return false;
      }
      // Filter by retailers.  return false if deal does not include selected retailer
      if (
        selectedRetailers.length > 0 &&
        !selectedRetailers.includes(deal.retailer)
      ) {
        return false;
      }
      
      // Filter by price ranges. returns false if not in range
      if (selectedPriceRanges.length > 0) {
        const numericPrice = parseFloat(deal.price.replace(/[^0-9.]/g, "")); // clean the price to be a number
        if (isNaN(numericPrice)) return false;
        
        const inRange = selectedPriceRanges.some((range) => {
          const [min, max] = range.split("-").map(Number); // split into min and max values
          if (isNaN(min) || isNaN(max)) return false;
          return numericPrice >= min && numericPrice <= max;
        });
        if (!inRange) {
          return false; // If deal is not in any selected range, return false
          }
      }
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();

        const matches = lowerCaseTitle.includes(query) || lowerCaseDescription.includes(query) || lowerCaseRetailer.includes(query);

        if (!matches) {
          return false;

        }
      }
      
      return true;
    });
  }, [initialDeals, showExpired, selectedCategories, selectedRetailers, selectedPriceRanges, searchQuery]);
  
  // Sort deals based on the selected option
  const sortedDeals = useMemo(() => {
    return [...filteredDeals].sort((a:DealWithTrendingScore, b:DealWithTrendingScore) => {
      switch (sortOption) {
        case "newest": // Sort by most recent timestamp
          return (
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        case "trending": // Sort by pre-calculated trending score
          return b.trendingScore - a.trendingScore;
        case "discussed": // Sort by number of comments
          return (b.commentCount ?? 0) - (a.commentCount ?? 0);
        default: // popular. Sort by net votes (yeah - nah)
          return b.votes.yeah - b.votes.nah - (a.votes.yeah - a.votes.nah);
      }
    });
  }, [filteredDeals, sortOption]); // Recalculate if filteredDeals or sortOption changes

  // Function to handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSortOption(tab);
  };

  // Function to toggle category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    ); // remove if exists else add
  };

  // Function to toggle retailer selection
  const handleRetailerToggle = (retailer: string) => {
    setSelectedRetailers((prev) =>
      prev.includes(retailer)
        ? prev.filter((r) => r !== retailer)
        : [...prev, retailer],
    ); // remove if exists else add
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
    setSearchQuery(""); // Reset search query
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
