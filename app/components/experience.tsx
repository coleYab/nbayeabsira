import { resumeData } from "@/app/data/resume";
import { SectionHeader } from "@/app/components/section-header";
import { MapPinIcon } from "@/app/components/icons";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeader command="experience" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 md:left-4" />

        <div className="flex flex-col gap-10">
          {resumeData.experience.map((job, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-2 h-3 w-3 rounded-full border-2 md:left-3 ${
                  job.current
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-zinc-600 bg-zinc-900"
                }`}
              />

              {/* Card */}
              <div
                className={`rounded-xl border bg-zinc-900 p-6 ${
                  job.current
                    ? "border-l-2 border-l-emerald-500 border-t-zinc-800 border-r-zinc-800 border-b-zinc-800"
                    : "border-zinc-800"
                }`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {job.role}
                      {job.type && (
                        <span className="ml-2 text-sm font-normal text-zinc-500">
                          ({job.type})
                        </span>
                      )}
                    </h3>
                    <p className="text-emerald-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-zinc-500">
                    <p>{job.startDate} – {job.endDate}</p>
                    <p className="flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
