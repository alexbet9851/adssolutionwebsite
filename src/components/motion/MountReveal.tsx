"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springHero, springSoft } from "@/lib/motion";

type MountRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "blur" | "fadeUp";
};

export function MountReveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: MountRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    variant === "blur"
      ? { opacity: 0.001, filter: "blur(10px)" }
      : { opacity: 0.001, y: 10 };

  const animate =
    variant === "blur"
      ? { opacity: 1, filter: "blur(0px)" }
      : { opacity: 1, y: 0 };

  const transition =
    variant === "blur"
      ? { ...springHero, delay: springHero.delay + delay }
      : { ...springSoft, delay: springSoft.delay + delay };

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
