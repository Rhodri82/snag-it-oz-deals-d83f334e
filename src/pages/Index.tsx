
import React, { useState } from 'react';
import Header from '../components/Header';
import DealCard from '../components/DealCard';
import Sidebar from '../components/Sidebar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Filter, Grid3X3, LayoutList, ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const SAMPLE_DEALS = [
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

// Filter and sort options
const categoryOptions = ["Electronics", "Gaming", "Home & Garden", "Fashion", "Groceries", "Travel", "Services"];
const retailerOptions = ["Amazon", "eBay", "JB Hi-Fi", "Telstra", "ALDI", "Coles", "Woolworths", "Target"];
const priceRanges = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $250", value: "100-250" },
  { label: "$250 - $500", value: "250-500" },
  { label: "$500+", value: "500-" }
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
    // Filter by expired status
    if (!showExpired && deal.expired) return false;
    
    // Filter by categories if any selected
    if (selectedCategories.length > 0 && !deal.categories?.some(cat => selectedCategories.includes(cat))) {
      return false;
    }
    
    // Filter by retailers if any selected
    if (selectedRetailers.length > 0 && !selectedRetailers.includes(deal.retailer)) {
      return false;
    }
    
    // Filter by price range if any selected
    if (selectedPriceRanges.length > 0) {
      // Implementation would depend on how price values are stored
      // This is a placeholder for the price range filtering logic
      return true;
    }
    
    return true;
  });
  
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortOption) {
      case "newest":
        // Simple descending sort by id (assuming higher id = newer)
        return b.id - a.id;
      case "hottest":
        // Sort by temperature
        return b.temperature - a.temperature;
      case "discussed":
        // Sort by comment count
        return (b.commentCount || 0) - (a.commentCount || 0);
      default: // popular
        // Sort by votes (yeah - nah)
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

  // Clear all filters function
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRetailers([]);
    setSelectedPriceRanges([]);
    setShowExpired(false);
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
                {/* Tabs for view options */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm overflow-x-auto hide-scrollbar">
                    <Button 
                      variant={activeTab === "popular" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => {setActiveTab("popular"); setSortOption("popular")}}
                      className="rounded-full text-xs whitespace-nowrap"
                    >
                      Popular deals
                    </Button>
                    <Button 
                      variant={activeTab === "newest" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => {setActiveTab("newest"); setSortOption("newest")}}
                      className="rounded-full text-xs whitespace-nowrap"
                    >
                      Newest
                    </Button>
                    <Button 
                      variant={activeTab === "hottest" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => {setActiveTab("hottest"); setSortOption("hottest")}}
                      className="rounded-full text-xs whitespace-nowrap"
                    >
                      Hottest
                    </Button>
                    <Button 
                      variant={activeTab === "discussed" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => {setActiveTab("discussed"); setSortOption("discussed")}}
                      className="rounded-full text-xs whitespace-nowrap"
                    >
                      Discussed
                    </Button>
                  </div>
                  
                  {/* Display options and filters */}
                  <div className="flex items-center gap-2">
                    <div className="hidden md:flex border rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "px-2 rounded-none",
                          viewMode === "list" && "bg-muted"
                        )}
                        onClick={() => setViewMode("list")}
                      >
                        <LayoutList className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "px-2 rounded-none",
                          viewMode === "grid" && "bg-muted"
                        )}
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </Button>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 h-9 px-3 text-xs"
                        >
                          <Filter className="w-3.5 h-3.5" />
                          Filters
                          {(selectedCategories.length > 0 || selectedRetailers.length > 0 || selectedPriceRanges.length > 0) && (
                            <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full ml-1">
                              {selectedCategories.length + selectedRetailers.length + selectedPriceRanges.length}
                            </Badge>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 md:w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Categories</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {categoryOptions.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                  <Checkbox 
                                    id={`category-${category}`}
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => handleCategoryToggle(category)}
                                  />
                                  <label 
                                    htmlFor={`category-${category}`}
                                    className="text-sm cursor-pointer"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Retailers</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {retailerOptions.map((retailer) => (
                                <div key={retailer} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`retailer-${retailer}`}
                                    checked={selectedRetailers.includes(retailer)}
                                    onCheckedChange={() => handleRetailerToggle(retailer)}
                                  />
                                  <label
                                    htmlFor={`retailer-${retailer}`}
                                    className="text-sm cursor-pointer"
                                  >
                                    {retailer}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Price Range</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {priceRanges.map((range) => (
                                <div key={range.value} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`price-${range.value}`}
                                    checked={selectedPriceRanges.includes(range.value)}
                                    onCheckedChange={() => handlePriceRangeToggle(range.value)}
                                  />
                                  <label
                                    htmlFor={`price-${range.value}`}
                                    className="text-sm cursor-pointer"
                                  >
                                    {range.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="show-expired"
                              checked={showExpired}
                              onCheckedChange={(value) => setShowExpired(!!value)}
                            />
                            <label
                              htmlFor="show-expired"
                              className="text-sm cursor-pointer"
                            >
                              Show expired deals
                            </label>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={clearFilters}
                            disabled={selectedCategories.length === 0 && selectedRetailers.length === 0 && selectedPriceRanges.length === 0 && !showExpired}
                          >
                            Clear All Filters
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 h-9 px-3 text-xs"
                        >
                          Sort by
                          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem 
                          onClick={() => setSortOption("popular")}
                          className={cn("cursor-pointer", sortOption === "popular" && "font-medium")}
                        >
                          Popular
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setSortOption("newest")}
                          className={cn("cursor-pointer", sortOption === "newest" && "font-medium")}
                        >
                          Newest first
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setSortOption("hottest")}
                          className={cn("cursor-pointer", sortOption === "hottest" && "font-medium")}
                        >
                          Hottest first
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setSortOption("discussed")}
                          className={cn("cursor-pointer", sortOption === "discussed" && "font-medium")}
                        >
                          Most discussed
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>

            <main className="container mx-auto px-2 py-3">
              {sortedDeals.length > 0 ? (
                <div className={cn(
                  viewMode === "list" ? "space-y-1" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                )}>
                  {sortedDeals.map((deal) => (
                    <DealCard key={deal.id} {...deal} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-lg font-medium mb-2">No deals match your filters</h3>
                  <p className="text-muted-foreground mb-6">Try changing or clearing your filters</p>
                  <Button onClick={clearFilters}>Clear all filters</Button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
