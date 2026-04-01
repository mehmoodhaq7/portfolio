"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export function ProjectCard({
  title,
  description,
  tags,
  detailed = false,
}: {
  title: string;
  description: string;
  tags: string[];
  detailed?: boolean;
}) {
  return (
    <motion.div
      whileHover="hover"
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-lg transition-colors ${detailed ? "p-8 md:p-10" : "p-6"}`}
    >
      <motion.div
        variants={{
          hover: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF5C2B]/10 to-transparent pointer-events-none"
      />
      <motion.div
        variants={{ hover: { borderColor: "rgba(255, 92, 43, 0.5)" } }}
        className="absolute inset-0 z-0 rounded-2xl border border-transparent transition-colors duration-300 pointer-events-none"
      />

      <div className="z-10 flex items-center justify-between">
        <div className="p-3 rounded-xl border border-white/5 bg-white/5 group-hover:bg-[#FF5C2B]/10 transition-colors duration-500">
          <FolderGit2 className="text-white/60 group-hover:text-[#FF8E3E] transition-colors" size={detailed ? 28 : 20} />
        </div>
      </div>
      
      <div className="z-10 mt-4 flex flex-col flex-1">
        <h3 className={`${detailed ? "text-2xl" : "text-lg"} font-bold text-white group-hover:text-[#FF8E3E] transition-colors tracking-tight`}>
          {title}
        </h3>
        <p className={`mt-4 text-white/60 font-sans ${detailed ? "text-base leading-relaxed" : "text-sm leading-relaxed"}`}>
          {description}
        </p>
      </div>

      <div className="z-10 mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 tracking-wider font-mono shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
