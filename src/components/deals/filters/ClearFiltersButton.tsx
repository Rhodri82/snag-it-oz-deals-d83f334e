
import React from 'react';
import { Button } from "@/components/ui/button";

interface ClearFiltersButtonProps {
  onClearFilters: () => void;
  disabled: boolean;
}

export const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({
  onClearFilters,
  disabled,
}) => {
  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={onClearFilters}
      disabled={disabled}
    >
      Clear All Filters
    </Button>
  );
};

