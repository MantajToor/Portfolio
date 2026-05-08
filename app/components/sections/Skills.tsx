import SectionHeading from "@/app/components/ui/SectionHeading";
import { skillCategories } from "@/lib/constants";

function getLevelLabel(level: number) {
  if (level >= 90) return "MASTER";
  if (level >= 75) return "EXPERT";
  if (level >= 60) return "ADEPT";
  if (level >= 40) return "APPRENTICE";
  return "NOVICE";
}

function getLevelColor(level: number) {
  if (level >= 90) return "text-gold";
  if (level >= 75) return "text-emerald";
  if (level >= 60) return "text-frost";
  if (level >= 40) return "text-mana";
  return "text-text-muted";
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 02" title="Technical Skills" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rpg-panel-muted p-6"
            >
              <h3 className="font-pixel text-[10px] text-gold mb-6 uppercase tracking-wider">
                {cat.name}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-mono text-text-primary">
                        {skill.name}
                      </span>
                      <span
                        className={`font-pixel text-[7px] ${getLevelColor(skill.level)}`}
                      >
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-3 bg-surface border border-border">
                      <div
                        className="h-full xp-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
