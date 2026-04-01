"use client";
import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--glow-x", `${e.clientX}px`);
      el.style.setProperty("--glow-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(183, 65, 14, 0.08), transparent 40%)",
        transition: "background 0.3s ease",
      }}
    />
  );
}
