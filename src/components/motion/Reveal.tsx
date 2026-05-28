"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft, springZoom, viewport } from "@/lib/motion";

type RevealVariant = "fadeUp" | "blurUp" | "blurZoom";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0.001, y: 10 },
    visible: { opacity: 1, y: 0 },
  },
  blurUp: {
    hidden: { opacity: 0.001, y: 10, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  blurZoom: {
    hidden: { opacity: 0.001, scale: 2, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
} satisfies Record<RevealVariant, { hidden: object; visible: object }>;

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition =
    variant === "blurZoom"
      ? { ...springZoom, delay: springZoom.delay + delay }
      : { ...springSoft, delay: springSoft.delay + delay };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={VARIANTS[variant]}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
