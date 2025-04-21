
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
    <div className="doz-tablist border-b flex w-full justify-start sm:justify-center overflow-x-auto hide-scrollbar min-h-[36px]">
      {TABS.map((tab) => {
        const selected = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            className={
              "doz-tab relative transition-all px-3 py-1 mx-1 text-sm " +
              (selected
                ? "text-amber-700 font-bold doz-tab--active"
                : "text-muted-foreground font-medium hover:text-amber-900")
            }
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
              minWidth: 56,
              transition: "color 0.15s"
            }}
          >
            {tab.label}
            {selected && (
              <span className="absolute left-1 right-1 -bottom-[2px] h-[3px] rounded bg-amber-400" />
            )}
          </button>
        );
      })}
    </div>
  );
};
