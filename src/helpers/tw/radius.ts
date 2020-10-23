import { getSelectorClassName } from "./helper";

export type Radius =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-3xl"
  | "rounded-full"
  | "rounded-t-none"
  | "rounded-r-none"
  | "rounded-b-none"
  | "rounded-l-none"
  | "rounded-t-sm"
  | "rounded-r-sm"
  | "rounded-b-sm"
  | "rounded-l-sm"
  | "rounded-t"
  | "rounded-r"
  | "rounded-b"
  | "rounded-l"
  | "rounded-t-md"
  | "rounded-r-md"
  | "rounded-b-md"
  | "rounded-l-md"
  | "rounded-t-lg"
  | "rounded-r-lg"
  | "rounded-b-lg"
  | "rounded-l-lg"
  | "rounded-t-xl"
  | "rounded-r-xl"
  | "rounded-b-xl"
  | "rounded-l-xl"
  | "rounded-t-2xl"
  | "rounded-r-2xl"
  | "rounded-b-2xl"
  | "rounded-l-2xl"
  | "rounded-t-3xl"
  | "rounded-r-3xl"
  | "rounded-b-3xl"
  | "rounded-l-3xl"
  | "rounded-t-full"
  | "rounded-r-full"
  | "rounded-b-full"
  | "rounded-l-full"
  | "rounded-tl-none"
  | "rounded-tr-none"
  | "rounded-br-none"
  | "rounded-bl-none"
  | "rounded-tl-sm"
  | "rounded-tr-sm"
  | "rounded-br-sm"
  | "rounded-bl-sm"
  | "rounded-tl"
  | "rounded-tr"
  | "rounded-br"
  | "rounded-bl"
  | "rounded-tl-md"
  | "rounded-tr-md"
  | "rounded-br-md"
  | "rounded-bl-md"
  | "rounded-tl-lg"
  | "rounded-tr-lg"
  | "rounded-br-lg"
  | "rounded-bl-lg"
  | "rounded-tl-xl"
  | "rounded-tr-xl"
  | "rounded-br-xl"
  | "rounded-bl-xl"
  | "rounded-tl-2xl"
  | "rounded-tr-2xl"
  | "rounded-br-2xl"
  | "rounded-bl-2xl"
  | "rounded-tl-3xl"
  | "rounded-tr-3xl"
  | "rounded-br-3xl"
  | "rounded-bl-3xl"
  | "rounded-tl-full"
  | "rounded-tr-full"
  | "rounded-br-full"
  | "rounded-bl-full";

const radius = [
  "none",
  "sm",
  "default",
  "md",
  "lg",
  "xl",
  "doubleXl",
  "tripleXl",
  "full",
  "tNone",
  "rNone",
  "bNone",
  "lNone",
  "tSm",
  "rSm",
  "bSm",
  "lSm",
  "t",
  "r",
  "b",
  "l",
  "tMd",
  "rMd",
  "bMd",
  "lMd",
  "tLg",
  "rLg",
  "bLg",
  "lLg",
  "tXl",
  "rXl",
  "bXl",
  "lXl",
  "t2xl",
  "r2xl",
  "b2xl",
  "l2xl",
  "t3xl",
  "r3xl",
  "b3xl",
  "l3xl",
  "tFull",
  "rFull",
  "bFull",
  "lFull",
  "tlNone",
  "trNone",
  "brNone",
  "blNone",
  "tlSm",
  "trSm",
  "brSm",
  "blSm",
  "tl",
  "tr",
  "br",
  "bl",
  "tlMd",
  "trMd",
  "brMd",
  "blMd",
  "tlLg",
  "trLg",
  "brLg",
  "blLg",
  "tlXl",
  "trXl",
  "brXl",
  "blXl",
  "tl2xl",
  "tr2xl",
  "br2xl",
  "bl2xl",
  "tl3xl",
  "tr3xl",
  "br3xl",
  "bl3xl",
  "tlFull",
  "trFull",
  "brFull",
  "blFull",
] as const;

export type RadiusKey = typeof radius[number];

type RadiusValue = Record<RadiusKey, string>;

const mappedBeforeValues: RadiusValue = {
  none: "border-radius: 0;",
  sm: "border-radius: 0.125rem;",
  default: "border-radius: 0.25rem;",
  md: "border-radius: 0.375rem;",
  lg: "border-radius: 0.5rem;",
  xl: "border-radius: 0.75rem;",
  doubleXl: "border-radius: 1rem;",
  tripleXl: "border-radius: 1.5rem;",
  full: "border-radius: 9999px;",
  tNone: "border-top-left-radius: 0; border-top-right-radius: 0;",
  rNone: "border-top-right-radius: 0; border-bottom-right-radius: 0;",
  bNone: "border-bottom-right-radius: 0; border-bottom-left-radius: 0;",
  lNone: "border-top-left-radius: 0; border-bottom-left-radius: 0;",
  tSm: "border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;",
  rSm:
    "border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;",
  bSm:
    "border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;",
  lSm: "border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;",
  t: "border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;",
  r: "border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;",
  b: "border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem;",
  l: "border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;",
  tMd: "border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;",
  rMd:
    "border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;",
  bMd:
    "border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;",
  lMd: "border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;",
  tLg: "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;",
  rLg: "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;",
  bLg: "border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;",
  lLg: "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;",
  tXl: "border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem;",
  rXl: "border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem;",
  bXl:
    "border-bottom-right-radius: 0.75rem; border-bottom-left-radius: 0.75rem;",
  lXl: "border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem;",
  t2xl: "border-top-left-radius: 1rem; border-top-right-radius: 1rem;",
  r2xl: "border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;",
  b2xl: "border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;",
  l2xl: "border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;",
  t3xl: "border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem;",
  r3xl: "border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem;",
  b3xl:
    "border-bottom-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem;",
  l3xl: "border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem;",
  tFull: "border-top-left-radius: 9999px; border-top-right-radius: 9999px;",
  rFull: "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;",
  bFull:
    "border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;",
  lFull: "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;",
  tlNone: "border-top-left-radius: 0;",
  trNone: "border-top-right-radius: 0;",
  brNone: "border-bottom-right-radius: 0;",
  blNone: "border-bottom-left-radius: 0;",
  tlSm: "border-top-left-radius: 0.125rem;",
  trSm: "border-top-right-radius: 0.125rem;",
  brSm: "border-bottom-right-radius: 0.125rem;",
  blSm: "border-bottom-left-radius: 0.125rem;",
  tl: "border-top-left-radius: 0.25rem;",
  tr: "border-top-right-radius: 0.25rem;",
  br: "border-bottom-right-radius: 0.25rem;",
  bl: "border-bottom-left-radius: 0.25rem;",
  tlMd: "border-top-left-radius: 0.375rem;",
  trMd: "border-top-right-radius: 0.375rem;",
  brMd: "border-bottom-right-radius: 0.375rem;",
  blMd: "border-bottom-left-radius: 0.375rem;",
  tlLg: "border-top-left-radius: 0.5rem;",
  trLg: "border-top-right-radius: 0.5rem;",
  brLg: "border-bottom-right-radius: 0.5rem;",
  blLg: "border-bottom-left-radius: 0.5rem;",
  tlXl: "border-top-left-radius: 0.75rem;",
  trXl: "border-top-right-radius: 0.75rem;",
  brXl: "border-bottom-right-radius: 0.75rem;",
  blXl: "border-bottom-left-radius: 0.75rem;",
  tl2xl: "border-top-left-radius: 1rem;",
  tr2xl: "border-top-right-radius: 1rem;",
  br2xl: "border-bottom-right-radius: 1rem;",
  bl2xl: "border-bottom-left-radius: 1rem;",
  tl3xl: "border-top-left-radius: 1.5rem;",
  tr3xl: "border-top-right-radius: 1.5rem;",
  br3xl: "border-bottom-right-radius: 1.5rem;",
  bl3xl: "border-bottom-left-radius: 1.5rem;",
  tlFull: "border-top-left-radius: 9999px;",
  trFull: "border-top-right-radius: 9999px;",
  brFull: "border-bottom-right-radius: 9999px;",
  blFull: "border-bottom-left-radius: 9999px;",
};

export const radiusBeforeValue = getSelectorClassName(mappedBeforeValues);
