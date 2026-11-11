interface SectionHeaderProps {
  command: string;
}

export function SectionHeader({ command }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="font-mono text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
        <span className="text-emerald-500">~</span>
        <span>/{command}</span>{" "}
        <span className="text-zinc-500">$</span>
      </h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-500/50 via-zinc-800 to-transparent" />
    </div>
  );
}
