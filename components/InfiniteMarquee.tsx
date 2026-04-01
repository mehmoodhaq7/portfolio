"use client";
import { motion } from "framer-motion";

export function InfiniteMarquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-hidden border-y border-white/5 bg-white/[0.01] py-5">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex min-w-max gap-16 px-8"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-sm font-mono text-white/40 tracking-widest uppercase">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
