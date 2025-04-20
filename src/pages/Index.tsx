
import React, { useState } from 'react';
import Header from '../components/Header';
import DealCard from '../components/DealCard';
import { DEALS, CATEGORIES } from '../data/mockData';
import { Deal, SortOption, FilterOptions } from '../types';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FilterIcon, 
  ArrowUpDown,
  Clock,
  ThumbsUp,
  Tag
} from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const Index = () => {
  const [deals, setDeals] = useState<Deal[]>(DEALS);
  const [sortOption, setSortOption] = useState<SortOption>("hottest");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    localOnly: false,
    onlineOnly: false,
    priceRange: [0, 2000],
    includeExpired: false
  });

  const handleVote = (dealId: string, voteType: 'yeah' | 'nah') => {
    const updatedDeals = deals.map(deal => {
      if (deal.id === dealId) {
        const updatedVotes = { 
          yeah: voteType === 'yeah' ? deal.votes.yeah + 1 : deal.votes.yeah,
          nah: voteType === 'nah' ? deal.votes.nah + 1 : deal.votes.nah
        };
        
        const updatedTemperature = Math.round(
          (updatedVotes.yeah / (updatedVotes.yeah + updatedVotes.nah)) * 100
        );
        
        return {
          ...deal,
          votes: updatedVotes,
          temperature: updatedTemperature || deal.temperature
        };
      }
      return deal;
    });
    
    setDeals(updatedDeals);
    toast.success(`You voted ${voteType} for this deal`);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value as SortOption);
    
    const sortedDeals = [...deals];
    switch (value) {
      case "newest":
        sortedDeals.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
      case "hottest":
        sortedDeals.sort((a, b) => b.temperature - a.temperature);
        break;
      case "expiring":
        sortedDeals.sort((a, b) => {
          if (!a.expiresAt) return 1;
          if (!b.expiresAt) return -1;
          return a.expiresAt.getTime() - b.expiresAt.getTime();
        });
        break;
      case "price-low-high":
        sortedDeals.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, '')) || 0;
          const priceB = parseInt(b.price.replace(/[^0-9]/g, '')) || 0;
          return priceA - priceB;
        });
        break;
      case "price-high-low":
        sortedDeals.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, '')) || 0;
          const priceB = parseInt(b.price.replace(/[^0-9]/g, '')) || 0;
          return priceB - priceA;
        });
        break;
      default:
        break;
    }
    
    setDeals(sortedDeals);
    toast.success(`Deals sorted by ${value}`);
  };

  const handleFilterChange = (field: keyof FilterOptions, value: any) => {
    setFilterOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleCategoryFilter = (categoryId: string) => {
    setFilterOptions(prev => {
      const updatedCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return {
        ...prev,
        categories: updatedCategories
      };
    });
  };

  const applyFilters = () => {
    let filteredDeals = DEALS;
    
    // Filter by categories
    if (filterOptions.categories.length > 0) {
      filteredDeals = filteredDeals.filter(deal => 
        filterOptions.categories.includes(deal.category)
      );
    }
    
    // Filter by expired
    if (!filterOptions.includeExpired) {
      filteredDeals = filteredDeals.filter(deal => !deal.isExpired);
    }
    
    // Filter by location
    if (filterOptions.localOnly) {
      filteredDeals = filteredDeals.filter(deal => 
        deal.location && deal.location !== "National"
      );
    }
    
    if (filterOptions.onlineOnly) {
      filteredDeals = filteredDeals.filter(deal => 
        !deal.location || deal.location === "National"
      );
    }
    
    toast.success("Filters applied");
    setDeals(filteredDeals);
  };
  
  const resetFilters = () => {
    setFilterOptions({
      categories: [],
      localOnly: false,
      onlineOnly: false,
      priceRange: [0, 2000],
      includeExpired: false
    });
    setDeals(DEALS);
    toast.success("Filters reset");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Latest Deals</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <ArrowUpDown className="mr-2 h-4 w-4 text-muted-foreground" />
              <Select value={sortOption} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="hottest">Hottest Deals</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Deals</SheetTitle>
                  <SheetDescription>
                    Narrow down deals based on your preferences
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {CATEGORIES.map(category => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category.id}`} 
                            checked={filterOptions.categories.includes(category.id)}
                            onCheckedChange={() => toggleCategoryFilter(category.id)}
                          />
                          <label 
                            htmlFor={`category-${category.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Location</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="local-only" 
                          checked={filterOptions.localOnly}
                          onCheckedChange={(checked) => 
                            handleFilterChange('localOnly', checked === true)
                          }
                        />
                        <label 
                          htmlFor="local-only"
                          className="text-sm font-medium leading-none"
                        >
                          Local deals only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="online-only" 
                          checked={filterOptions.onlineOnly}
                          onCheckedChange={(checked) => 
                            handleFilterChange('onlineOnly', checked === true)
                          }
                        />
                        <label 
                          htmlFor="online-only"
                          className="text-sm font-medium leading-none"
                        >
                          Online deals only
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Other Filters</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="include-expired" 
                        checked={filterOptions.includeExpired}
                        onCheckedChange={(checked) => 
                          handleFilterChange('includeExpired', checked === true)
                        }
                      />
                      <label 
                        htmlFor="include-expired"
                        className="text-sm font-medium leading-none"
                      >
                        Include expired deals
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                    <Button onClick={applyFilters}>Apply Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Filters display */}
        {(filterOptions.categories.length > 0 || filterOptions.localOnly || filterOptions.onlineOnly || filterOptions.includeExpired) && (
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="text-sm font-medium text-muted-foreground">Active filters:</div>
            {filterOptions.categories.map(catId => {
              const category = CATEGORIES.find(c => c.id === catId);
              return category ? (
                <Badge key={catId} variant="outline" className="flex items-center gap-1 bg-primary/10">
                  <Tag className="h-3 w-3" />
                  {category.name}
                </Badge>
              ) : null;
            })}
            {filterOptions.localOnly && (
              <Badge variant="outline" className="bg-primary/10">Local Only</Badge>
            )}
            {filterOptions.onlineOnly && (
              <Badge variant="outline" className="bg-primary/10">Online Only</Badge>
            )}
            {filterOptions.includeExpired && (
              <Badge variant="outline" className="bg-primary/10">Including Expired</Badge>
            )}
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} onVote={handleVote} />
          ))}
        </div>
        
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default Index;
