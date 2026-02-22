"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b-[3px] border-gold/30"
            : "bg-transparent",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="font-pixel text-[10px] text-gold select-none hover:text-gold/80 transition-colors"
            >
              ▶ PORTFOLIO
            </Link>

            {/* Desktop nav — RPG menu style */}
            <div className="hidden md:flex items-center gap-0">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 font-pixel text-[9px] text-text-muted hover:text-gold hover:bg-gold/5 transition-all duration-150"
                >
                  {item.name}
                  {i < navItems.length - 1 && (
                    <span className="ml-4 text-border">·</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger — pixel style */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 font-pixel text-[10px] text-gold"
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — RPG menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 md:hidden flex flex-col items-center justify-center gap-6">
          <div className="rpg-panel p-8">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 font-pixel text-[10px] text-text-muted hover:text-gold transition-colors"
                >
                  <span className="text-gold mr-3">▶</span>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
