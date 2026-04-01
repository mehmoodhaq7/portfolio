"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  tags,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.15,
        delay: index * 0.08,
      }}
      whileHover={{ y: -2 }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md hover:border-[#B7410E]/30 hover:shadow-[0_0_20px_rgba(183,65,14,0.15)] transition-all duration-500 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <Icon
          size={20}
          className="text-[#D96A36] opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#D96A36] transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 border border-white/10 text-white/45 hover:text-[#D96A36] hover:border-[#B7410E]/30 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
