
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SidebarProvider } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';

const Index = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
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

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
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
            <main className="container mx-auto px-2 py-3">
              <DealList
                deals={sortedDeals}
                viewMode={viewMode}
                onClearFilters={clearFilters}
              />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
