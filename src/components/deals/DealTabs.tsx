
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
        Popular deals
      </Button>
      <Button 
        variant={activeTab === "newest" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("newest")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Newest
      </Button>
      <Button 
        variant={activeTab === "hottest" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("hottest")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Hottest
      </Button>
      <Button 
        variant={activeTab === "discussed" ? "default" : "ghost"} 
        size="sm"
        onClick={() => onTabChange("discussed")}
        className="rounded-full text-xs whitespace-nowrap"
      >
        Discussed
      </Button>
    </div>
  );
};
