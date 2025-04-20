
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SidebarProvider } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { UserScore } from '@/components/gamification/UserScore';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

  // Pagination logic
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
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="fixed left-4 top-20 z-50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <div className="flex-1">
            <div className="flex items-center justify-between px-4 py-2 border-b">
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
              <div className="flex items-center gap-3">
                <UserScore />
                <Button className="bg-primary hover:bg-primary/90 rounded-full" size="sm" asChild>
                  <Link to="/submit-deal" className="hidden md:flex">
                    <PlusCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">Submit Bargain</span>
                  </Link>
                </Button>
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
