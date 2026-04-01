"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

type Log = { id: string; text: string; isCommand: boolean };

export function InteractiveTerminal() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasBootedRef = useRef(false);

  const bootSequence = [
    "Initializing Mehmood OS v1.0.0...",
    "Mounting file systems... [OK]",
    "Starting Docker daemon... [OK]",
    "Connecting to Kubernetes cluster... [OK]",
    "System Ready. Type 'help' to see available commands."
  ];

  useEffect(() => {
    // Prevent double execution in React Strict Mode which causes duplicate keys
    if (hasBootedRef.current) return;
    hasBootedRef.current = true;

    let delay = 0;
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLogs(prev => {
          if (prev.some(log => log.id === `boot-${index}`)) return prev;
          return [...prev, { id: `boot-${index}`, text: line, isCommand: false }];
        });
        if (index === bootSequence.length - 1) setTimeout(() => setIsBooting(false), 500);
      }, delay);
      delay += 600;
    });
  }, []);

  // Use container scrollTop to prevent Window-level scroll hijacking
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const cmd = input.trim().toLowerCase();
      setInput("");
      const newLogs: Log[] = [...logs, { id: Date.now().toString(), text: `visitor@mehmood-aws:~$ ${cmd}`, isCommand: true }];
      
      let response = "";
      switch(cmd) {
        case "help": response = "Available commands: whoami, skills, clear, echo [msg]"; break;
        case "whoami": response = "Mehmood Ul Haq - AWS Certified Solutions Architect & DevOps Engineer.\nLocation: Lahore, Pakistan."; break;
        case "skills": response = "AWS, Docker, Kubernetes, Terraform, Jenkins, GitOps. (Always expanding)"; break;
        case "clear": setLogs([]); return;
        case "sudo": response = "bash: sudo: permission denied. This incident will be reported. 🚨"; break;
        case "ls": response = "Desktop/   Documents/   Downloads/   aws_keys.pem"; break;
        default: 
          if(cmd.startsWith("echo ")) response = cmd.slice(5);
          else response = `bash: ${cmd}: command not found. Type 'help'.`;
      }
      
      setLogs(newLogs);
      
      if (cmd !== "clear") {
         setTimeout(() => {
           setLogs(prev => [...prev, { id: (Date.now() + 1).toString(), text: response, isCommand: false }]);
         }, 150);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="w-full max-w-3xl mt-12 mb-6 overflow-hidden rounded-xl border border-white/20 bg-[#050505] shadow-[0_0_50px_rgba(183,65,14,0.05)] relative mx-auto"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#111]">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40 font-mono tracking-wider">
          <Terminal size={14} /> root@mehmood-eks
        </div>
      </div>
      <div 
        ref={containerRef}
        className="p-6 font-mono text-sm leading-relaxed text-white/70 h-[320px] overflow-y-auto custom-scrollbar" 
        onClick={() => document.getElementById("terminal-input")?.focus()}
      >
        {logs.map((log) => (
          <div key={log.id} className={`mb-2 ${log.isCommand ? "text-[#FF8E3E]" : "text-white/80 whitespace-pre-line"}`}>
            {log.text}
          </div>
        ))}
        {!isBooting && (
          <div className="flex items-center text-[#FF8E3E] mt-2">
            <span className="mr-2">visitor@mehmood-aws:~$</span>
            <input 
              id="terminal-input"
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              className="bg-transparent outline-none flex-1 text-white shadow-none focus:ring-0"
            />
          </div>
        )}
        <div className="h-4" />
      </div>
    </motion.div>
  );
}
