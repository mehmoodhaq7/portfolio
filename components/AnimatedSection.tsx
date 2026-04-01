"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = "fadeUp" | "fadeLeft" | "fadeScale";

const variantMap: Record<
  AnimationVariant,
  { initial: Record<string, number>; animate: Record<string, number> }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  fadeScale: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
}) {
  const v = variantMap[variant];

  return (
    <motion.section
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay }}
      className={cn("w-full py-10", className)}
    >
      {children}
    </motion.section>
  );
}
