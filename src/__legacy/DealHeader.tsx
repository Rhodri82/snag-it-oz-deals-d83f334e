
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface DealHeaderProps {
  retailer: string;
  timestamp: string;
}

export const DealHeader = ({ retailer, timestamp }: DealHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <Badge variant="outline" className="text-xs px-2 py-0.5 bg-background">
        {retailer}
      </Badge>
      <div className="hidden md:flex items-center text-xs text-muted-foreground">
        <Clock className="w-3 h-3 mr-1" />
        <span>{timestamp}</span>
      </div>
    </div>
  );
};
