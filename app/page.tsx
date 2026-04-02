export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/70 via-cyan-200/50 to-transparent blur-3xl" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-200/60 via-rose-200/40 to-transparent blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/50 via-sky-200/40 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(24,24,27,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-10">
        <section className="w-full rounded-3xl border border-white/70 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-zinc-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Coming Soon
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Yeabsira Moges
              </h1>
              <p className="mx-auto max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                Software developer. I build clean, fast experiences — portfolio launching soon.
              </p>
            </div>

            <div className="w-full max-w-2xl">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
            </div>

            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  href="https://github.com/coleYab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-emerald-50" />
                  </div>
                  <div className="relative">
                    <div className="text-sm font-semibold">GitHub</div>
                    <div className="mt-1 text-sm text-zinc-600">@coleYab</div>
                  </div>
                </a>

                <a
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  href="https://www.linkedin.com/in/yeabsira-moges-781822289/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-sky-50" />
                  </div>
                  <div className="relative">
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="mt-1 text-sm text-zinc-600">/in/yeabsira-moges</div>
                  </div>
                </a>

                <a
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  href="https://t.me/nbayeabsira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-fuchsia-50" />
                  </div>
                  <div className="relative">
                    <div className="text-sm font-semibold">Telegram</div>
                    <div className="mt-1 text-sm text-zinc-600">nba yeabsira</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs text-zinc-600">
                  Available for collaborations • Open to opportunities
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
