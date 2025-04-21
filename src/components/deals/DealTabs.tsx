
import React from 'react';

interface DealTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { label: "Popular", value: "popular" },
  { label: "Fresh", value: "newest" },
  { label: "Snagged", value: "trending" },
];

export const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div 
      className="doz-tablist flex w-full justify-start sm:justify-center overflow-x-auto hide-scrollbar" 
      style={{ 
        background: "var(--background)",
        marginBottom: 0,
        paddingBottom: 0,
        minHeight: '36px'
      }}
    >
      {TABS.map((tab) => {
        const selected = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            className={`
              relative inline-block font-medium transition-all mx-1 px-2 py-2 text-sm
              ${selected
                ? "text-amber-800 font-bold"
                : "text-zinc-500 hover:text-amber-700"}
            `}
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
