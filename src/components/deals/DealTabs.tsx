
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type DealTab = 'ripper' | 'fresh' | 'snagged';

interface DealTabsProps {
  activeTab: DealTab;
  onTabChange: (tab: DealTab) => void;
  isMobileHeader?: boolean;
}

const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange, isMobileHeader }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 h-10 rounded-md bg-muted p-1">
        <TabsTrigger 
          value="ripper"
          className="rounded-sm text-sm font-medium transition-colors hover:text-accent data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
        >
          Ripper
        </TabsTrigger>
        <TabsTrigger 
          value="fresh"
          className="rounded-sm text-sm font-medium transition-colors hover:text-accent data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
        >
          Fresh
        </TabsTrigger>
        <TabsTrigger 
          value="snagged"
          className="rounded-sm text-sm font-medium transition-colors hover:text-accent data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
        >
          Snagged
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DealTabs;
