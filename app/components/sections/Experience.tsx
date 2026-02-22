import SectionHeading from "@/app/components/ui/SectionHeading";
import { experiences } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 04" title="Adventure Log" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-6 top-0 bottom-0 w-[3px] bg-border">
            <div className="w-full h-full bg-gradient-to-b from-gold via-mana to-transparent opacity-40" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-10 md:pl-16"
              >
                {/* Diamond marker */}
                <div className="absolute left-3 md:left-6 top-5 w-2 h-2 -translate-x-1/2 rotate-45 bg-gold" />

                <div className="rpg-panel-muted p-6 hover:border-gold/40 transition-colors">
                  {/* Quest header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="font-pixel text-[10px] text-text-primary leading-relaxed">
                      {exp.title}
                    </h3>
                    <span className="font-pixel text-[7px] text-gold shrink-0 bg-gold/10 px-2 py-1">
                      {exp.startDate} — {exp.endDate ?? "Present"}
                    </span>
                  </div>

                  <p className="font-pixel text-[8px] text-mana mb-4">
                    {exp.company} · {exp.location}
                  </p>

                  {/* Quest objectives */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-muted flex gap-2"
                      >
                        <span className="text-gold mt-0.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Reward loot */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-text-muted bg-surface"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* End marker */}
            <div className="relative pl-10 md:pl-16">
              <div className="absolute left-3 md:left-6 top-0 w-2 h-2 -translate-x-1/2 rotate-45 bg-text-muted/30" />
              <p className="font-pixel text-[8px] text-text-muted pt-1">
                ... more adventures await
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
