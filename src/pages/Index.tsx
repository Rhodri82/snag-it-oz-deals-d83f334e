import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SidebarProvider } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DealFilters } from '@/components/deals/DealFilters';
import { DealTabs } from '@/components/deals/DealTabs';
import { DealSort } from '@/components/deals/DealSort';
import { DealList } from '@/components/deals/DealList';
import { Deal } from '@/types/deals';

const SAMPLE_DEALS: Deal[] = [
  {
    id: 1,
    title: "Nintendo Switch OLED - JB Hi-Fi Deal",
    price: "$398",
    previousPrice: "$449",
    discount: "12% OFF",
    retailer: "JB Hi-Fi",
    description: "Latest Nintendo Switch OLED model with white Joy-Cons. Pickup in store or delivery available.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    timestamp: "2 hours ago",
    temperature: 85,
    votes: { yeah: 45, nah: 3 },
    commentCount: 12,
    shipping: "Free Delivery",
    featured: true,
    categories: ["Gaming", "Electronics"]
  },
  {
    id: 2,
    title: "iPhone 15 Pro with $200 Gift Card",
    price: "$1,499",
    retailer: "Telstra",
    description: "Get a $200 gift card when you purchase any iPhone 15 Pro model. Limited time offer.",
    timestamp: "5 hours ago",
    temperature: 65,
    votes: { yeah: 32, nah: 8 },
    commentCount: 5,
    shipping: "$9.95 Delivery",
    expireDate: "Tomorrow",
    categories: ["Electronics", "Smartphones"]
  },
  {
    id: 3,
    title: "Anker PowerCore Essential 20000 PD Power Bank",
    price: "$49.99",
    previousPrice: "$79.99",
    discount: "38% OFF",
    retailer: "Amazon",
    description: "20000mAh portable charger with USB-C Power Delivery. Fast charging for phones and tablets.",
    imageUrl: "/lovable-uploads/9a5ec587-4dca-49aa-a508-0de8c79de058.png",
    timestamp: "3 hours ago",
    temperature: 92,
    votes: { yeah: 67, nah: 2 },
    commentCount: 15,
    shipping: "Free with Prime",
    categories: ["Electronics", "Accessories"]
  },
  {
    id: 4,
    title: "Dyson V8 Cordless Vacuum - 25% OFF",
    price: "$449",
    previousPrice: "$599",
    discount: "25% OFF",
    retailer: "eBay",
    description: "Certified refurbished Dyson V8 with 2 year warranty. Use code DYSON25.",
    timestamp: "Yesterday",
    temperature: 78,
    votes: { yeah: 53, nah: 7 },
    commentCount: 8,
    shipping: "Free Delivery",
    expireDate: "3 days",
    categories: ["Home & Garden", "Appliances"]
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: "$348",
    retailer: "JB Hi-Fi",
    description: "Industry-leading noise cancellation. 30 hour battery life. Limited time offer.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    timestamp: "1 day ago",
    temperature: 88,
    votes: { yeah: 41, nah: 4 },
    commentCount: 6,
    shipping: "Click & Collect",
    categories: ["Electronics", "Audio"]
  },
  {
    id: 6,
    title: "ALDI Special Buy: Weighted Blanket - 7kg",
    price: "$49.99",
    retailer: "ALDI",
    description: "Premium weighted blanket for better sleep. Available in store only, while stocks last.",
    timestamp: "3 days ago",
    temperature: 72,
    votes: { yeah: 28, nah: 5 },
    commentCount: 3,
    shipping: "In-store only",
    expired: true,
    categories: ["Home & Garden", "Bedding"]
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showExpired, setShowExpired] = useState(false);
  const [sortOption, setSortOption] = useState("popular");
  
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  const filteredDeals = SAMPLE_DEALS.filter(deal => {
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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSortOption(tab);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <div className="sticky top-0 z-10 bg-background border-b">
              <div className="container mx-auto px-2 py-3">
                <div className="flex items-center justify-between">
                  <DealTabs activeTab={activeTab} onTabChange={handleTabChange} />
                  <div className="flex items-center gap-2">
                    <DealFilters
                      selectedCategories={selectedCategories}
                      selectedRetailers={selectedRetailers}
                      selectedPriceRanges={selectedPriceRanges}
                      showExpired={showExpired}
                      onCategoryToggle={handleCategoryToggle}
                      onRetailerToggle={handleRetailerToggle}
                      onPriceRangeToggle={handlePriceRangeToggle}
                      onShowExpiredChange={setShowExpired}
                      onClearFilters={clearFilters}
                      viewMode={viewMode}
                      onViewModeChange={setViewMode}
                    />
                    <DealSort sortOption={sortOption} onSortChange={setSortOption} />
                  </div>
                </div>
              </div>
            </div>

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
