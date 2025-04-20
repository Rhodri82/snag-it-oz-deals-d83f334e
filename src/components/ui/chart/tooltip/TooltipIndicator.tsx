
import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipIndicatorProps {
  indicatorColor: string;
  indicator: "line" | "dot" | "dashed";
  nestLabel?: boolean;
  hideIndicator?: boolean;
  itemConfig?: {
    icon?: React.ComponentType;
  };
}

export const TooltipIndicator = ({
  indicatorColor,
  indicator,
  nestLabel,
  hideIndicator,
  itemConfig,
}: TooltipIndicatorProps) => {
  if (itemConfig?.icon) {
    const Icon = itemConfig.icon;
    return <Icon />;
  }

  if (hideIndicator) {
    return null;
  }

  return (
    <div
      className={cn(
        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
        {
          "h-2.5 w-2.5": indicator === "dot",
          "w-1": indicator === "line",
          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
          "my-0.5": nestLabel && indicator === "dashed",
        }
      )}
      style={
        {
          "--color-bg": indicatorColor,
          "--color-border": indicatorColor,
        } as React.CSSProperties
      }
    />
  );
};
