"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY + 5) {
        setVisible(false);
        setMobileOpen(false);
      } else if (currentY < lastScrollY - 5) {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled || mobileOpen
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-sm text-white/70 hover:text-[#D96A36] transition-colors tracking-tight"
        >
          Mehmood<span className="text-[#B7410E]">_</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-white/50 hover:text-[#D96A36] transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#D96A36] transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-4 py-3 text-sm font-mono uppercase tracking-widest text-white/50 hover:text-[#D96A36] hover:bg-white/5 transition-colors rounded-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
