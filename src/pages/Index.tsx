
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DealList } from '@/components/deals/DealList';
import DealHeader from '@/components/deals/DealHeader';
import Header from '@/components/Header';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Deal } from '@/types/deals';
import { DealTab } from '@/components/deals/DealTabs';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const isMobile = useIsMobile();
  
  const {
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
  } = useDeals(SAMPLE_DEALS);

  const totalPages = Math.ceil(sortedDeals.length / itemsPerPage);
  // Cast the DealWithTrendingScore[] to Deal[] to match the DealList component's expectations
  const currentDeals = sortedDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) as Deal[];

  return (
    <>
      <Header />
      <main className={`pb-20 md:pb-12 ${isMobile ? 'pt-[44px]' : ''}`}>
        {/* Sticky header with filter tabs */}
        <div className={`bg-background sticky ${isMobile ? 'top-[44px]' : 'top-14'} z-10`}>
          <div className="max-w-screen-xl mx-auto">
            <DealHeader
              activeTab={activeTab as DealTab}
              viewMode={viewMode}
              selectedCategories={selectedCategories}
              selectedRetailers={selectedRetailers}
              selectedPriceRanges={selectedPriceRanges}
              showExpired={showExpired}
              sortOption={sortOption}
              onTabChange={handleTabChange}
              onCategoryToggle={handleCategoryToggle}
              onRetailerToggle={handleRetailerToggle}
              onPriceRangeToggle={handlePriceRangeToggle}
              onShowExpiredChange={setShowExpired}
              onViewModeChange={setViewMode}
              onSortChange={setSortOption}
              onClearFilters={clearFilters}
            />
          </div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <DealList
            deals={currentDeals}
            viewMode={viewMode}
            onClearFilters={clearFilters}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </main>

      {/* Floating button for mobile */}
      <Button
        className="fixed bottom-[70px] right-4 md:hidden z-40 rounded-full shadow-lg"
        variant="secondary"
        asChild
      >
        <Link to="/submit-deal" className="gap-2">
          <PlusCircle className="w-5 h-5" />
          <span>Submit a Deal</span>
        </Link>
      </Button>
    </>
  );
};

export default Index;
