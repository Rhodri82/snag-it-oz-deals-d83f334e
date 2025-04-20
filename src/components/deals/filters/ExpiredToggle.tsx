
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface ExpiredToggleProps {
  showExpired: boolean;
  onShowExpiredChange: (show: boolean) => void;
}

export const ExpiredToggle: React.FC<ExpiredToggleProps> = ({
  showExpired,
  onShowExpiredChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="show-expired"
        checked={showExpired}
        onCheckedChange={(value) => onShowExpiredChange(!!value)}
      />
      <label
        htmlFor="show-expired"
        className="text-sm cursor-pointer"
      >
        Show expired deals
      </label>
    </div>
  );
};

