import { RGB, ObjectKey, rgbKeys } from "./interface";
import { Maybe } from "./maybe";

export const compose = (...fns: Function[]) => (initialInput: any) =>
  fns.reduce((prevResult, fn) => fn(prevResult), initialInput);

export const defaultColors = [0, 0, 0];

// eslint-disable-next-line prefer-spread
export const initArray = (length: number) =>
  Array.from(new Array(length), (_, idx) => idx);

export const additiveColors = (hex: string) =>
  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

const reduceToObj = <K extends ObjectKey>(keys: K[]) => <A, C>(
  prevVal: A,
  curVal: C,
  idx: number
) => ({
  ...prevVal,
  [keys[idx]]: curVal,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapKeyToVal = <T, K extends ObjectKey, F extends (arg: T) => any>(
  items: T[],
  itemConverter: F,
  offset: number,
  length: number,
  keys: K[]
) =>
  initArray(length)
    .map((idx) => idx + offset)
    .map((newIdx) => items[newIdx])
    .map((item) => itemConverter(item))
    .reduce(reduceToObj(keys), {}) as Record<K, ReturnType<F>>;

const isValidOpacity = (opacity: number) => opacity < 0 || opacity > 1;

const produceRGBA = ({ r, g, b }: RGB, opacity = 1) =>
  `rgba(${r}, ${g}, ${b}, ${opacity})`;

export const base16num = (value: string) => parseInt(value, 16);

const maybeColors = (colors: RegExpExecArray | null) => Maybe.of(colors);

export const hex2rgb = (maybe: Maybe<RegExpExecArray | null>): RGB =>
  maybe.caseOf({
    Just: (c) => mapKeyToVal(c!, base16num, 1, 3, rgbKeys),
    Nothing: () => mapKeyToVal(defaultColors, (x: number) => x, 0, 3, rgbKeys),
  });

export const rgb2Rgba = (opacity: number) => (rgbVal: RGB) =>
  isValidOpacity(opacity)
    ? produceRGBA(rgbVal, 1)
    : produceRGBA(rgbVal, opacity);

export const hex2rgba = (hex: string, opacity: number): string =>
  compose(
    additiveColors,
    maybeColors,
    hex2rgb,
    rgb2Rgba(opacity)
  )(hex) as string;
