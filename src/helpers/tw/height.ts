const height = [
  "h-0",
  "h-1",
  "h-2",
  "h-3",
  "h-4",
  "h-5",
  "h-6",
  "h-8",
  "h-10",
  "h-12",
  "h-16",
  "h-20",
] as const;

export type Height = typeof height[number];
