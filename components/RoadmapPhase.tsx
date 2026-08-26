import Reveal from "./Reveal";

export default function RoadmapPhase({
  index,
  codename,
  title,
  items,
  status,
  align = "left",
}: {
  index: string;
  codename: string;
  title: string;
  items: string[];
  status: "complete" | "active" | "locked";
  align?: "left" | "right";
}) {
  const statusStyles = {
    complete: "border-lime text-lime bg-lime/10",
    active: "border-magenta text-magenta bg-magenta/10 animate-pulse-glow",
    locked: "border-line text-low bg-void",
  }[status];

  const statusLabel = { complete: "SECURED", active: "IN PROGRESS", locked: "LOCKED" }[status];

  return (
    <Reveal className={`relative flex flex-col gap-6 md:flex-row ${align === "right" ? "md:flex-row-reverse" : ""}`}>
      <div className="flex md:w-1/3 md:justify-center">
        <div className="flex flex-col items-center">
          <span className="font-display text-5xl text-hi/10 md:text-6xl" style={{ WebkitTextStroke: "1px var(--line)" }}>
            {index}
          </span>
          <span className={`mt-2 rounded-full border px-3 py-1 font-data text-[10px] uppercase tracking-widest ${statusStyles}`}>
            {statusLabel}
          </span>
        </div>
      </div>
      <div className="clip-corner flex-1 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur">
        <p className="font-data text-xs uppercase tracking-widest text-cyan">{codename}</p>
        <h3 className="mt-1 font-display text-xl text-hi sm:text-2xl">{title}</h3>
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-sm text-mid">
              <span className="mt-1 text-lime">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
