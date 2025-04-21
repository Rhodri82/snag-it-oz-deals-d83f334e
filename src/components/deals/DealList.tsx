
import React from 'react';
import { cn } from "@/lib/utils";
import DealCard from '@/components/DealCard';
import { Button } from "@/components/ui/button";
import { Deal } from '@/types/deals';
import { Card } from '@/components/ui/card';
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
  viewMode,
  onClearFilters,
  currentPage = 1,
  onPageChange = () => {},
  totalPages = 1
}) => {
  if (deals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-lg font-semibold mb-2">No deals match your filters</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your filters or exploring other categories.
        </p>
        <Button onClick={onClearFilters}>Clear All Filters</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Main Content Column */}
        <div className={cn(
            "flex-1",
            viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                : 'space-y-6'
        )}>
            {deals.map((deal) => (
                <DealCard key={deal.id} {...deal} />
            ))}

            {totalPages > 1 && (
                <div className="flex justify-center pt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </div>
        {/* Sidebar Column (Desktop Only) */}
        <aside className="hidden md:block md:w-80 shrink-0">
            <Card className="p-4">
                <h4 className="font-bold mb-2">Featured Deals</h4>
                <p className="text-sm text-muted-foreground">Placeholder for pinned posts, trending tags, or "Editor's Pick" banners.</p>
            </Card>
        </aside>
    </div>
  );
};
