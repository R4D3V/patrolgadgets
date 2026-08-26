export default function VaultDial({ className = "", size = 220 }: { className?: string; size?: number }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slower opacity-70">
        <circle cx="100" cy="100" r="94" fill="none" stroke="var(--lime)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 6" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 88;
          const y1 = 100 + Math.sin(angle) * 88;
          const x2 = 100 + Math.cos(angle) * 94;
          const y2 = 100 + Math.sin(angle) * 94;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--lime)" strokeOpacity="0.5" strokeWidth="1.5" />;
        })}
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="100" cy="100" r="70" fill="none" stroke="var(--magenta)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="14 10" />
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="48" fill="none" stroke="var(--cyan)" strokeOpacity="0.6" strokeWidth="1" />
        <circle cx="100" cy="100" r="3" fill="var(--lime)" />
      </svg>
    </div>
  );
}
