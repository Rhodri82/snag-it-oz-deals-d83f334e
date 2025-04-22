
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type DealTab = 'ripper' | 'fresh' | 'snagged';

interface DealTabsProps {
  activeTab: DealTab;
  onTabChange: (tab: DealTab) => void;
  isMobileHeader?: boolean;
}

const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/50">
        <TabsTrigger 
          value="ripper"
          className="text-base font-medium"
        >
          Ripper
        </TabsTrigger>
        <TabsTrigger 
          value="fresh"
          className="text-base font-medium"
        >
          Fresh
        </TabsTrigger>
        <TabsTrigger 
          value="snagged"
          className="text-base font-medium"
        >
          Snagged
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DealTabs;
