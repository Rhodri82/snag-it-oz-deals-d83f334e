
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
import { HEADER_HEIGHT } from '@/components/Header';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
  const currentDeals = sortedDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <main className="px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto pt-16 pb-8 md:pb-12">
        {/* Sticky header with filter tabs */}
        <div className={`bg-background sticky top-[${HEADER_HEIGHT}px] z-10 border-b`}>
         <DealHeader
            activeTab={activeTab}
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
        <div>
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
        className="fixed bottom-4 right-4 md:hidden z-50 rounded-full shadow-lg"
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
