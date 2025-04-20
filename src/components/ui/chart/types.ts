
import { ReactNode, ComponentType } from "react";

export type ThemeNames = "light" | "dark";

export const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode;
    icon?: ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<ThemeNames, string> }
  )
};

export type ChartContextProps = {
  config: ChartConfig;
};
