import { resumeData } from "@/app/data/resume";
import { SectionHeader } from "@/app/components/section-header";
import { GraduationCapIcon } from "@/app/components/icons";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeader command="education" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 md:left-4" />

        <div className="flex flex-col gap-8">
          {resumeData.education.map((edu, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-3 md:left-3">
                <div className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-zinc-600 bg-zinc-900" />
              </div>

              {/* Card */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-zinc-800 p-2">
                    <GraduationCapIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">{edu.degree}</h3>
                    <p className="text-sm text-emerald-400">{edu.institution}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {edu.startYear} – {edu.endYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
