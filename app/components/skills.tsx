import { resumeData } from "@/app/data/resume";
import { SectionHeader } from "@/app/components/section-header";
import { CodeIcon, ServerIcon, DatabaseIcon, TerminalIcon } from "@/app/components/icons";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <CodeIcon className="w-5 h-5 text-emerald-400" />,
  Frameworks: <ServerIcon className="w-5 h-5 text-emerald-400" />,
  Databases: <DatabaseIcon className="w-5 h-5 text-emerald-400" />,
  Tools: <TerminalIcon className="w-5 h-5 text-emerald-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader command="skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {resumeData.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              {categoryIcons[group.category]}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
