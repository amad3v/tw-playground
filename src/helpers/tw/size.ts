import { getSelectorClassName } from "./helper";

export type Size = "small" | "medium" | "large";

const mappedValues: Record<Size, string> = {
  small: "h-8 px-3 py-1",
  medium: "h-10 px-4 py-2",
  large: "h-12 px-5 py-3",
};

const mappedSvgValues: Record<Size, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};

const mappedViewBoxValues: Record<Size, string> = {
  small: "0 0 16 16",
  medium: "0 0 20 20",
  large: "0 0 24 24",
};

export const paddingClass = getSelectorClassName(mappedValues);
export const svgClass = getSelectorClassName(mappedSvgValues);
export const viewBoxSize = getSelectorClassName(mappedViewBoxValues);
