
import React from 'react';
import { Button } from "@/components/ui/button";

interface DealTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { label: "Ripper Deals", value: "popular" },
  { label: "Fresh Finds", value: "newest" },
  { label: "Most Snagged", value: "trending" },
];

export const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
      {TABS.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          size="sm"
          variant={activeTab === tab.value ? "default" : "ghost"}
          className="rounded-full text-xs font-medium px-4 py-1 whitespace-nowrap"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
