"use client";

import SectionHeading from "@/app/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 01" title="Character Profile" />

        {/* Top row: portrait + bio */}
        <div className="grid md:grid-cols-[240px_1fr] gap-8 mb-10">
          {/* Profile picture area */}
          <div>
            <div className="rpg-panel p-2 aspect-square flex items-center justify-center">
              {/*
                Replace the placeholder below with your own <Image> or <img>.
                Example:
                  <Image src="/me.jpg" alt="Portrait" width={220} height={220}
                         className="w-full h-full object-cover" />
              */}
              <div className="w-full h-full bg-surface flex flex-col items-center justify-center gap-3">
                <span className="font-pixel text-[10px] text-text-muted text-center leading-relaxed">
                  Your
                  <br />
                  Photo
                  <br />
                  Here
                </span>
              </div>
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
              Bio
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
            <p className="font-pixel text-[9px] text-gold mb-3 uppercase tracking-wider px-2 pt-1">
              World Map
            </p>

            {/*
              ── THREE.JS GLOBE PLACEHOLDER ──
              This div is your canvas for a Three.js globe.
              It's already inside a "use client" component.

              Quick start:
              1. Create a <Globe /> component using @react-three/fiber + @react-three/drei
              2. Import it here and drop it inside the div below
              3. The container is set to 400px tall — adjust as needed

              Example:
                import Globe from "@/app/components/Globe";
                ...
                <Globe />
            */}
            <div
              id="globe-container"
              className="w-full h-[400px] bg-surface/50 flex items-center justify-center border-2 border-dashed border-border"
            >
              <span className="font-pixel text-[9px] text-text-muted text-center leading-loose">
                [ Three.js Globe ]
                <br />
                Replace this placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rpg-panel-muted p-4 text-center hover:border-gold/40 transition-colors"
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-pixel text-sm text-gold">{s.value}</div>
              <div className="font-pixel text-[8px] text-text-muted mt-1 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
