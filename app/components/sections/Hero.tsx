"use client";

import { useState, useEffect } from "react";
import PixelButton from "@/app/components/ui/PixelButton";
import { personalInfo } from "@/lib/constants";

const lines = ["From localhost to production", "shipping products that work."];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex <= currentLine.length) {
      const id = setTimeout(() => {
        setDisplayLines((prev) => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.slice(0, charIndex);
          return copy;
        });
        setCharIndex((c) => c + 1);
      }, 45);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(id);
    }
  }, [lineIndex, charIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative stars */}
        <div className="text-gold/40 font-pixel text-[8px] mb-6 tracking-[0.5em]">
          ✦ ✦ ✦ ✦ ✦
        </div>

        {/* Title */}
        <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-gold mb-4 leading-relaxed">
          {personalInfo.name}
        </h1>

        <p className="font-pixel text-[10px] sm:text-xs text-mana mb-10 tracking-wider">
          ~ {personalInfo.title} ~
        </p>

        {/* Dialog box with typing text */}
        <div className="rpg-panel p-6 md:p-8 text-left max-w-xl mx-auto mb-10">
          <div className="font-mono text-sm md:text-base text-text-primary leading-relaxed space-y-1 text-center">
            {displayLines.map((line, i) => (
              <p key={i}>
                {line}
                {i === lineIndex && lineIndex < lines.length && (
                  <span className="text-gold blink">▋</span>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* CTA menu */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PixelButton href="#projects">▶ VIEW PROJECTS</PixelButton>
          <PixelButton href="#contact" variant="secondary">
            ▶ SEND MESSAGE
          </PixelButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-pixel text-[8px] text-text-muted">
        ▼ SCROLL ▼
      </div>
    </section>
  );
}
