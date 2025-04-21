
import React from 'react';
import { cn } from "@/lib/utils";

interface DealTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobileHeader?: boolean;
}

const TABS = [
  { label: "Popular", value: "popular" },
  { label: "Fresh", value: "newest" },
  { label: "Snagged", value: "trending" },
];

export const DealTabs: React.FC<DealTabsProps> = ({ 
  activeTab, 
  onTabChange,
  isMobileHeader = false 
}) => {
  return (
    <div 
      className={cn(
        "doz-tablist flex overflow-x-auto hide-scrollbar",
        isMobileHeader 
          ? "w-full justify-center" 
          : "w-full justify-start sm:justify-center"
      )}
      style={{ 
        background: "var(--background)",
        marginBottom: 0,
        paddingBottom: 0,
        minHeight: isMobileHeader ? '30px' : '36px'
      }}
    >
      {TABS.map((tab) => {
        const selected = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "relative inline-block font-medium transition-all",
              isMobileHeader 
                ? "mx-1 px-2 py-1 text-xs" 
                : "mx-1 px-3 py-2 text-sm",
              selected
                ? "text-amber-800 font-bold"
                : "text-zinc-500 hover:text-amber-700"
            )}
          >
            <span className="relative inline-block">
              {tab.label}
              <span 
                className={`
                  absolute bottom-0 left-0 right-0 h-[3px] rounded-full 
                  transition-all duration-300 ease-in-out
                  ${selected ? "bg-amber-500" : "bg-transparent"}
                `} 
              />
            </span>
          </button>
        );
      })}
    </div>
  );
};
