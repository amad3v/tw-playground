export interface RGB {
  r: number;
  g: number;
  b: number;
}

export type ObjectKey = string | number | symbol;

export const rgbKeys: (keyof RGB)[] = ["r", "g", "b"];
