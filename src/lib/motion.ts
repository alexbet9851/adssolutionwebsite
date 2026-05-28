export const viewport = {
  once: true,
  amount: 0.25,
} as const;

export const springSoft = {
  type: "spring" as const,
  bounce: 0,
  delay: 0.075,
  duration: 0.4,
};

export const springHero = {
  type: "spring" as const,
  bounce: 0.1,
  delay: 0.05,
  duration: 0.45,
};

export const springZoom = {
  type: "spring" as const,
  bounce: 0.25,
  delay: 0.05,
  duration: 0.45,
};

export const springHover = {
  type: "spring" as const,
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
};
