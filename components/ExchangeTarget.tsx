import Reveal from "./Reveal";

export default function ExchangeTarget({
  name,
  tier,
  note,
  delay = 0,
}: {
  name: string;
  tier: string;
  note: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group clip-corner relative overflow-hidden rounded-xl border border-line bg-surface/70 p-6 transition hover:border-magenta hover:box-glow-magenta">
        <div className="flex items-center justify-between">
          <p className="font-data text-[10px] uppercase tracking-widest text-low">{tier}</p>
          <span className="h-2 w-2 rounded-full bg-line group-hover:bg-magenta group-hover:animate-pulse-glow" />
        </div>
        <h3 className="mt-3 font-display text-2xl text-hi group-hover:text-magenta">{name}</h3>
        <p className="mt-2 font-body text-sm text-mid">{note}</p>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
        <p className="mt-4 font-data text-[10px] uppercase tracking-widest text-low">
          Status: <span className="text-cyan">Target Locked</span>
        </p>
      </div>
    </Reveal>
  );
}
