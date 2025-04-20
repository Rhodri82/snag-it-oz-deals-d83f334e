
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import { DealList } from '@/components/deals/DealList';
import { DealHeader } from '@/components/deals/DealHeader';
import VoucherList from '@/components/vouchers/VoucherList';
import { useDeals } from '@/hooks/use-deals';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { UserScore } from '@/components/gamification/UserScore';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { type Voucher } from '@/types/vouchers';

// Sample voucher data
const SAMPLE_VOUCHERS: Voucher[] = [
  {
    storeLogo: "/placeholder.svg",
    storeName: "Woolworths",
    code: "SAVE20",
    summary: "20% off your first online shop",
    description: "Save 20% on your first online grocery shop at Woolworths. Minimum spend $100.",
    expiryDate: "30 May 2025",
    tags: ["Groceries", "Online Only", "New Customers"]
  },
  {
    storeLogo: "/placeholder.svg",
    storeName: "Coles",
    code: "FRESH15",
    summary: "$15 off fresh produce",
    description: "Get $15 off when you spend $100 or more on fresh produce.",
    expiryDate: "1 June 2025",
    tags: ["Fresh Food", "Minimum Spend"]
  }
];

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
        {/* Deals Section */}
        <div className="border-b bg-white sticky top-[73px] z-10">
          <div className="container mx-auto px-4">
            <DealHeader
              activeTab={activeTab}
              viewMode="list"
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
              onViewModeChange={() => {}}
              onSortChange={setSortOption}
              onClearFilters={clearFilters}
            />
            <div className="flex items-center gap-3 justify-end py-2">
              <UserScore />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          {/* Vouchers Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Vouchers</h2>
            <VoucherList vouchers={SAMPLE_VOUCHERS} />
          </div>

          {/* Deals List */}
          <DealList
            deals={currentDeals}
            viewMode="list"
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
