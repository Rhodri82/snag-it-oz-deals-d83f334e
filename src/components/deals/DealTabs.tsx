
import React from 'react';

/**
 * DealTabs Component
 * 
 * Navigation tabs for filtering deals by popularity, freshness, or trending status.
 * Features clean underline style for active tab and smooth transitions.
 * 
 * Used in: DealHeader for main deal filtering controls
 */
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
      className="doz-tablist flex w-full justify-start sm:justify-center overflow-x-auto hide-scrollbar border-b-0" 
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
              relative font-medium transition-all mx-1 px-1 py-1 text-sm
              ${selected
                ? "text-amber-700 font-bold"
                : "text-muted-foreground hover:text-amber-900"}
            `}
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
              minWidth: 52,
              fontSize: "1rem",
              lineHeight: 1.2,
              marginBottom: 0,
              paddingBottom: 6,
              transition: "color 0.15s"
            }}
          >
            {tab.label}
            {/* slim underline below label with smooth transition */}
            <span 
              className={`
                block absolute left-1.5 right-1.5 -bottom-[3px] h-[2px] rounded-full 
                transition-all duration-300 ease-in-out
                ${selected ? "bg-amber-500" : "bg-transparent"}
              `} 
            />
          </button>
        );
      })}
    </div>
  );
};
