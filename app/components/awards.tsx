import { resumeData } from "@/app/data/resume";
import { SectionHeader } from "@/app/components/section-header";
import { TrophyIcon } from "@/app/components/icons";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeader command="awards" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resumeData.awards.map((award, i) => {
          const isWinner =
            award.achievement.toLowerCase().includes("winner") ||
            award.achievement.toLowerCase().includes("1st");

          return (
            <div
              key={i}
              className={`rounded-xl border bg-zinc-900 p-6 transition-all hover:shadow-lg ${
                isWinner
                  ? "border-emerald-500/50 hover:shadow-emerald-500/5"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-lg p-2 ${
                    isWinner ? "bg-emerald-500/10" : "bg-zinc-800"
                  }`}
                >
                  <TrophyIcon
                    className={`w-5 h-5 ${
                      isWinner ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100">{award.title}</h3>
                  <p
                    className={`text-sm font-medium ${
                      isWinner ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  >
                    {award.achievement}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500">{award.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
