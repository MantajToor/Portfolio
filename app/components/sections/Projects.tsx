import SectionHeading from "@/app/components/ui/SectionHeading";
import PixelCard from "@/app/components/ui/PixelCard";
import { projects } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="// 03" title="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <PixelCard
                variant={project.featured ? "gold" : "muted"}
                className="h-full flex flex-col"
              >
                {/* Quest status badge */}
                {project.featured && (
                  <span className="inline-block w-fit font-pixel text-[7px] text-gold mb-3 uppercase tracking-widest">
                    ★ FEATURED
                  </span>
                )}

                <h3 className="font-pixel text-[10px] text-text-primary mb-3 leading-relaxed">
                  {project.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech tags as "loot" */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-frost bg-frost/5 border border-frost/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-2 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-pixel text-[7px] text-text-muted hover:text-emerald transition-colors"
                    >
                      [ SOURCE ]
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-pixel text-[7px] text-text-muted hover:text-gold transition-colors"
                    >
                      [ LIVE DEMO ]
                    </a>
                  )}
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
