
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  // Calculate visible page numbers
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];
    
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    
    // Always include first page
    if (currentPage > delta + 1) {
      rangeWithDots.push(1);
      
      if (currentPage > delta + 2) {
        rangeWithDots.push('...');
      }
    }
    
    rangeWithDots.push(...range);
    
    // Always include last page
    if (currentPage < totalPages - delta) {
      if (currentPage < totalPages - delta - 1) {
        rangeWithDots.push('...');
      }
      
      rangeWithDots.push(totalPages);
    }
    
    return rangeWithDots;
  };
  
  const pages = getPageNumbers();
  
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="w-8 h-8 p-0"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {pages.map((page, index) => {
        if (page === '...') {
          return <span key={`ellipsis-${index}`} className="px-2">...</span>;
        }
        
        return (
          <Button
            key={`page-${page}`}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page as number)}
            className="w-8 h-8 p-0"
          >
            {page}
          </Button>
        );
      })}
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="w-8 h-8 p-0"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
