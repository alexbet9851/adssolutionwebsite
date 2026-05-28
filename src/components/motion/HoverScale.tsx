"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { springHover } from "@/lib/motion";

type HoverScaleProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
};

export function HoverScale({
  children,
  className,
  as = "button",
  href,
  ...props
}: HoverScaleProps) {
  const reduceMotion = useReducedMotion();
  const hoverProps = reduceMotion ? {} : { whileHover: { scale: 1.1 }, transition: springHover };

  if (as === "a" && href) {
    const anchorProps = props as HTMLMotionProps<"a">;

    return (
      <motion.a href={href} className={className} {...hoverProps} {...anchorProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={className} {...hoverProps} {...props}>
      {children}
    </motion.button>
  );
}
