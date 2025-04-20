
import React from 'react';
import { Button } from "@/components/ui/button";

interface DealTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center text-sm overflow-x-auto hide-scrollbar">
      <Button 
        variant={activeTab === "popular" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("popular")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Ripper Deals
      </Button>
      <Button 
        variant={activeTab === "newest" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("newest")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Fresh Finds
      </Button>
      <Button 
        variant={activeTab === "trending" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("trending")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Most Snagged
      </Button>
    </div>
  );
};
