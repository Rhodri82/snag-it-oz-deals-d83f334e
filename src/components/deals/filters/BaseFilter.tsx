
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface BaseFilterProps {
  title: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  selectedItems: string[];
  onItemToggle: (item: string) => void;
  className?: string;
}

export const BaseFilter: React.FC<BaseFilterProps> = ({
  title,
  items,
  selectedItems,
  onItemToggle,
  className,
}) => {
  return (
    <div className={className}>
      <h4 className="font-medium text-sm mb-2">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
            <Checkbox
              id={`filter-${item.value}`}
              checked={selectedItems.includes(item.value)}
              onCheckedChange={() => onItemToggle(item.value)}
            />
            <label
              htmlFor={`filter-${item.value}`}
              className="text-sm cursor-pointer"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
