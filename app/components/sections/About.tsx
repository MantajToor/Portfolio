"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { personalInfo } from "@/lib/constants";

const Globe = dynamic(() => import("@/app/components/ui/Globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <span className="font-pixel text-[9px] text-text-muted animate-pulse">
        [ Loading Globe... ]
      </span>
    </div>
  ),
});

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 01" title="About Me" />

        {/* Top row: portrait + bio */}
        <div className="grid md:grid-cols-[240px_1fr] gap-8 mb-10">
          {/* Profile picture area */}
          <div>
            <div className="rpg-panel aspect-square relative overflow-hidden">
              <Image
                src="/LinkedinHeadshot.png"
                alt="Portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Mini stat line */}
            <div className="mt-3 text-center">
              <span className="font-pixel text-[8px] text-gold">
                LVL &nbsp;
              </span>
              <span className="font-pixel text-[8px] text-emerald">
                20
              </span>
            </div>
          </div>

          {/* Bio text */}
          <div className="rpg-panel-muted p-6 flex flex-col justify-center">
            <p className="font-pixel text-[9px] text-gold mb-3 uppercase tracking-wider">
              Overview
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              {personalInfo.about}
            </p>
            <p className="text-text-muted leading-relaxed">
              📍 Currently based in{" "}
              <span className="text-frost">{personalInfo.location}</span>
            </p>
          </div>
        </div>

        {/* Three.js Globe area */}
        <div className="mb-10">
          <div className="rpg-panel-muted p-4">
            <p className="font-pixel text-[9px] text-gold mb-1 uppercase tracking-wider px-2 pt-1">
              Location
            </p>
            <p className="font-pixel text-[7px] text-text-muted px-2 mb-3">
              Toronto, ON — drag to explore
            </p>

            {/* Constrain to a centred square-ish area so it doesn't stretch to a thin disc */}
            <div className="flex justify-center">
              <div id="globe-container" className="relative w-full max-w-md h-[380px]">
                <Globe />
                {/* Toronto label */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
                  <span className="font-pixel text-[8px] text-gold/80 tracking-widest">
                    📍 TORONTO, ON
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
