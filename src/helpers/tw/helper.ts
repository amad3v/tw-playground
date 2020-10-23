import { Color, Shade } from "./color";

export const getSelectorClassName = <T, U extends keyof T>(values: T) => (
  value: U
) => values[value];

const getColorClassName = (property: string) => <T, U>(color: T, shade?: U) => {
  if (shade === null || shade === undefined) return `${property}-${color}`;

  return `${property}-${color}-${shade}`;
};

export const textClassName = getColorClassName("text");
export const borderClassName = getColorClassName("border");
export const bgClassName = getColorClassName("bg");

export const getBgShade = (op: string, bgShade: Shade) => {
  switch (op) {
    case "a":
      return bgShade + 200 > 900 ? bgShade - 200 : bgShade + 200;
    case "h":
      return bgShade + 100 > 900 ? bgShade - 300 : bgShade + 100;
    default:
      return bgShade;
  }
};

export const needsShade = (color: Color) =>
  color !== "black" && color !== "white"; // && color !== "transparent";
