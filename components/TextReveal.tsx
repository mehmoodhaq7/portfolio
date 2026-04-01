"use client";
import { motion } from "framer-motion";

export function TextReveal({ text, className, delay = 0, as = "div" }: { text: string; className?: string; delay?: number, as?: "h1" | "div" }) {
  const words = text.split(" ");
  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag 
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 20 } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
