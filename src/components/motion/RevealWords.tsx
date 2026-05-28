"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springSoft } from "@/lib/motion";

type RevealWordsProps = {
  lines: string[];
  className?: string;
  startDelay?: number;
  onMount?: boolean;
  as?: "div" | "h1" | "h2";
  id?: string;
};

export function RevealWords({
  lines,
  className,
  startDelay = 0,
  onMount = false,
  as: Tag = "div",
  id,
}: RevealWordsProps) {
  const reduceMotion = useReducedMotion();
  let wordIndex = 0;

  if (reduceMotion) {
    return (
      <Tag className={className} id={id}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} id={id}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word) => {
            const index = wordIndex++;
            const delay = startDelay + index * 0.05;
            const motionProps = onMount
              ? {
                  initial: { opacity: 0.001, y: 10 },
                  animate: { opacity: 1, y: 0 },
                }
              : {
                  initial: { opacity: 0.001, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.8 },
                };

            return (
              <motion.span
                key={`${lineIndex}-${index}`}
                {...motionProps}
                transition={{ ...springSoft, delay }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            );
          })}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
