
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-[73px] pb-20 md:pb-6">
        <div className="border-b bg-white sticky top-[73px] z-10">
          <div className="container mx-auto px-4">
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
            {/* Removed UserScore component */}
          </div>
        </div>
        
        <div className="mx-auto px-4 py-6 max-w-[700px] lg:max-w-[800px]">
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

      <Button 
        className="fixed bottom-4 right-4 md:hidden bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50" 
        size="lg"
        asChild
      >
        <Link to="/submit-deal" className="gap-2">
          <PlusCircle className="w-5 h-5" />
          <span>Submit a Deal</span>
        </Link>
      </Button>
    </div>
  );
};

export default Index;
