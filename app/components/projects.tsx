import { resumeData } from "@/app/data/resume";
import { SectionHeader } from "@/app/components/section-header";
import { ExternalLinkIcon } from "@/app/components/icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader command="projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{project.dateRange}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                aria-label={`GitHub – ${project.name}`}
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            {/* Highlight metrics */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.highlights.map((h, j) => (
                <span
                  key={j}
                  className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
