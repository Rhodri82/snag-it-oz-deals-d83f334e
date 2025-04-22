
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type DealTab = 'ripper' | 'fresh' | 'snagged';

interface DealTabsProps {
  activeTab: DealTab;
  onTabChange: (tab: DealTab) => void;
}

const DealTabs: React.FC<DealTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-gray-100">
        <TabsTrigger value="ripper">Ripper</TabsTrigger>
        <TabsTrigger value="fresh">Fresh</TabsTrigger>
        <TabsTrigger value="snagged">Snagged</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DealTabs;
