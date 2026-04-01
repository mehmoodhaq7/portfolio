"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export function TelemetryDash() {
  // Use a consistent default static value for SSR to prevent Hydration mismatch
  const [data, setData] = useState<number[]>(Array.from({ length: 15 }, () => 20));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize random data purely on the client side after mounting
    setData(Array.from({ length: 15 }, () => 20 + Math.random() * 40));

    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), 20 + Math.random() * 60];
        return newData;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md hover:border-[#B7410E]/30 transition-all duration-500">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Activity size={20} className="text-[#B7410E] animate-pulse" />
          Live Telemetry
        </h3>
        <span className="px-2 py-1 bg-green-500/10 text-green-500 border border-green-500/20 text-[10px] uppercase font-mono rounded-md shadow-[0_0_10px_rgba(34,197,94,0.2)]">Healthy</span>
      </div>
      
      <div className="flex items-end gap-1 h-32 w-full opacity-60 mt-4">
        {mounted && data.map((h, i) => (
          <motion.div 
            key={i}
            layout
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex-1 rounded-t-sm ${i === data.length - 1 ? 'bg-[#D96A36]' : 'bg-white/20'}`}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-6 text-xs font-mono text-white/40">
        <span className="tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D96A36] inline-block"/>
          CPU ALLOCATION
        </span>
        <span className="text-[#D96A36] font-bold">{mounted ? (data[data.length-1]).toFixed(1) : "20.0"}%</span>
      </div>
    </div>
  );
}
