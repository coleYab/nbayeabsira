import { resumeData } from "@/app/data/resume";
import { HeroActions } from "@/app/components/hero-actions";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(63,63,70,0.3)_1px,transparent_0)] [background-size:32px_32px]" />

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {/* Role title */}
        {/* <p className="font-mono text-sm font-medium tracking-widest text-emerald-400 uppercase">
          Backend Developer &bull; Systems Engineer
        </p> */}

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-7xl">
          {resumeData.name}
        </h1>

        <h2 className="text-4xl font-italic tracking-tight text-zinc-50 sm:text-5xl">
        Backend Developer
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          {resumeData.summary}
        </p>

        {/* Client interactive parts */}
        <HeroActions />
      </div>
    </section>
  );
}
