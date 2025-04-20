
import React from 'react';
import { cn } from "@/lib/utils";
import DealCard from '../DealCard';
import { Button } from "@/components/ui/button";
import { Deal } from '@/types/deals';
import { Pagination } from "@/components/Pagination";

interface DealListProps {
  deals: Deal[];
  viewMode: "list" | "grid";
  onClearFilters: () => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalPages?: number;
}

export const DealList: React.FC<DealListProps> = ({ 
  deals, 
  onClearFilters,
  currentPage = 1,
  onPageChange = () => {},
  totalPages = 1
}) => {
  if (deals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-lg font-medium mb-2">No deals match your filters</h3>
        <p className="text-muted-foreground mb-6">Try changing or clearing your filters</p>
        <Button onClick={onClearFilters}>Clear all filters</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {deals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center my-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};
