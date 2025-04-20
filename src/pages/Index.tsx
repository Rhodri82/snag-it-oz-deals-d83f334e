import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { UserScore } from '@/components/gamification/UserScore';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <Header />
        
        <div className="flex">
          <Sidebar />
          
          <div className="flex-1">
            <div className="border-b">
              <div className="container mx-auto px-4 py-2">
                <div className="flex items-center gap-2 mb-4">
                  <SidebarTrigger />
                  <h1 className="text-xl font-semibold">All Deals</h1>
                </div>
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
                <div className="flex items-center gap-3 justify-end mt-2">
                  <UserScore />
                </div>
              </div>
            </div>
            
            <main className="container mx-auto px-4 py-6">
              <DealList
                deals={currentDeals}
                viewMode={viewMode}
                onClearFilters={clearFilters}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPages={totalPages}
              />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
