"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
      <path d="M9 18c-4.5 1.5-5-2.5-7-3"/>
    </svg>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  detailed = false,
  githubUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  detailed?: boolean;
  githubUrl?: string;
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
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/50 text-xs font-mono tracking-wide hover:border-[#FF5C2B]/40 hover:text-[#FF8E3E] hover:bg-[#FF5C2B]/10 transition-all duration-300"
          >
            <GithubIcon size={14} />
            Source
          </a>
        )}
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
