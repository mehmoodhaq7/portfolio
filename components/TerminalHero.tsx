"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function TerminalHero() {
  const codeLines = [
    "> Initialize Cloud Infrastructure...",
    "> Provisioning AWS EKS Cluster...",
    "> Deploying CI/CD Pipelines with Jenkins & ArgoCD...",
    "> Enforcing Security Policy (Trivy & SonarQube)...",
    "> Status: Production Ready.",
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="w-full max-w-2xl mt-12 mb-20 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl relative"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#111]">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
          <Terminal size={14} />
          Terminal — bash
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-white/70 min-h-[180px]">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={visibleLines > idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-3 ${idx === codeLines.length - 1 ? "text-[#D96A36] font-medium mt-4" : ""}`}
          >
            {visibleLines > idx && <span>{line}</span>}
          </motion.div>
        ))}
        {visibleLines >= codeLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-4 bg-[#D96A36] mt-1 inline-block"
          />
        )}
      </div>
    </motion.div>
  );
}
