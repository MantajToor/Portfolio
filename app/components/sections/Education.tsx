import SectionHeading from "@/app/components/ui/SectionHeading";
import { education } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 05" title="Training Grounds" />

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rpg-panel p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-pixel text-[10px] text-text-primary leading-relaxed">
                    {edu.degree}
                  </h3>
                  <p className="font-pixel text-[8px] text-mana mt-2">
                    {edu.school} · {edu.location}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {edu.gpa && (
                    <span className="font-pixel text-[9px] text-emerald bg-emerald/10 px-2 py-1">
                      GPA: {edu.gpa}
                    </span>
                  )}
                  <span className="font-pixel text-[7px] text-text-muted">
                    {edu.startDate} — {edu.endDate ?? "Present"}
                  </span>
                </div>
              </div>

              {/* Honors / achievements */}
              {edu.honors && edu.honors.length > 0 && (
                <div className="mb-6">
                  <p className="font-pixel text-[8px] text-gold mb-3 uppercase tracking-wider">
                    ★ Achievements Unlocked
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1.5 text-sm text-gold bg-gold/5 border border-gold/25 font-mono"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Coursework */}
              <div>
                <p className="font-pixel text-[8px] text-frost mb-3 uppercase tracking-wider">
                  Skill Training
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-2 text-sm text-text-muted bg-surface text-center border border-border hover:border-gold/25 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
