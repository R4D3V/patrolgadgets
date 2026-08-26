import Image from "next/image";

/**
 * Animated brand mark: mascot photo inside a glowing ring, with
 * two counter-rotating HUD rings and a slow pulse — pure CSS/SVG,
 * respects prefers-reduced-motion via globals.css.
 */
export default function AnimatedLogo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const ringPad = Math.round(size * 0.22);
  const outer = size + ringPad * 2;

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: outer, height: outer }}>
      {/* ambient pulse glow */}
      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-lime/40 blur-md" />

      {/* outer rotating dashed ring */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slower">
        <circle cx="50" cy="50" r="47" fill="none" stroke="var(--lime)" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 5" />
      </svg>

      {/* inner counter-rotating ring */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--magenta)" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="2 6" />
      </svg>

      {/* mascot */}
      <div
        className="absolute overflow-hidden rounded-full border-2 border-lime box-glow-lime"
        style={{ width: size, height: size, top: ringPad, left: ringPad }}
      >
        <Image src="/img/mascot-badge.jpg" alt="$THIEF mascot" fill sizes={`${size}px`} className="object-cover" />
      </div>

      {/* cyan scan blip */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="50" cy="4" r="2" fill="var(--cyan)" />
      </svg>
    </div>
  );
}
