export default function StatCard({
  label,
  value,
  accent = "lime",
}: {
  label: string;
  value: string;
  accent?: "lime" | "magenta" | "cyan";
}) {
  const glow = {
    lime: "box-glow-lime text-lime",
    magenta: "box-glow-magenta text-magenta",
    cyan: "box-glow-cyan text-cyan",
  }[accent];

  return (
    <div className={`clip-corner rounded-xl border border-line bg-surface/80 p-5 backdrop-blur ${glow.split(" ")[0]}`}>
      <p className="font-data text-[10px] uppercase tracking-widest text-low">{label}</p>
      <p className={`mt-2 font-display text-2xl ${glow.split(" ")[1]}`}>{value}</p>
    </div>
  );
}
