
import React from 'react';
import { cn } from "@/lib/utils";
import { getTemperatureRating, getTemperatureColor } from '@/utils/dealTemperature';

interface DealTemperatureProps {
  temperature: number;
}

export const DealTemperature = ({ temperature }: DealTemperatureProps) => {
  return (
    <div className={cn(
      "text-xs px-2 py-1 rounded text-white",
      getTemperatureColor(temperature)
    )}>
      {temperature}° <span className="hidden sm:inline">{getTemperatureRating(temperature)}</span>
    </div>
  );
};
