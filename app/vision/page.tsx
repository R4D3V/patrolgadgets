import Reveal from "@/components/Reveal";
import VaultDial from "@/components/VaultDial";
import ExchangeTarget from "@/components/ExchangeTarget";

const PILLARS = [
  {
    title: "Real Utility Narrative",
    body:
      "Most meme coins stop at a funny mascot. $THIEF is built around one concrete goal: qualify for and pursue real exchange listings, backed by liquidity, volume, and an active community.",
    accent: "lime" as const,
  },
  {
    title: "Community-Run Growth",
    body:
      "No hidden team wallet steering the ship. Growth comes from raids, memes, and holders who genuinely want the crew to win — every campaign starts in the community, not a boardroom.",
    accent: "magenta" as const,
  },
  {
    title: "Sustainable Tokenomics",
    body:
      "Zero buy/sell tax, locked and burned liquidity, and a fixed supply. The mechanics are boring on purpose — the chaos is reserved for the marketing.",
    accent: "cyan" as const,
  },
];

const MISSION_POINTS = [
  "Give Solana meme culture a mascot with an actual multi-year plan, not just a launch-week pump.",
  "Reach the liquidity and volume thresholds that tier-1 exchanges require, transparently and publicly.",
  "Keep the entry point accessible — no presale games, no insider unlocks dumping on new holders.",
  "Turn every holder into part of the crew, with a real voice in what the project does next.",
];

export default function VisionPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-10 text-center">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30">
          <VaultDial size={420} />
        </div>
        <Reveal>
          <p className="font-data text-xs uppercase tracking-[0.3em] text-cyan">Master Plan // Classified</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 font-display text-4xl text-hi sm:text-6xl">
            Vision &amp; <span className="text-magenta text-glow-magenta">Mission</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-2xl font-body text-mid">
            The blueprint for how a green internet gremlin becomes one of the most recognized tickers on major
            centralized exchanges.
          </p>
        </Reveal>
      </section>

      {/* MISSION / VISION STATEMENTS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="clip-corner h-full rounded-2xl border border-lime/60 bg-surface/70 p-8 box-glow-lime">
              <p className="font-data text-xs uppercase tracking-widest text-lime">Mission</p>
              <h2 className="mt-3 font-display text-2xl text-hi sm:text-3xl">Steal the spotlight, legitimately.</h2>
              <p className="mt-4 font-body text-sm text-mid">
                Build the most community-driven path from a Solana launch to major exchange listings — with full
                transparency on liquidity, holders, and progress at every step of the heist.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="clip-corner h-full rounded-2xl border border-magenta/60 bg-surface/70 p-8 box-glow-magenta">
              <p className="font-data text-xs uppercase tracking-widest text-magenta">Vision</p>
              <h2 className="mt-3 font-display text-2xl text-hi sm:text-3xl">A ticker everyone recognizes.</h2>
              <p className="mt-4 font-body text-sm text-mid">
                A future where $THIEF trades on OKX, Binance, and Bybit alongside the coins it once watched from
                outside the vault — proof that a meme with a real plan can make it all the way in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION POINTS */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">The Objectives</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">What We're Actually Doing</h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-4">
          {MISSION_POINTS.map((point, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-xl border border-line bg-surface/60 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lime font-data text-xs text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-mid">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Pillars</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">How We Get There</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div
                className={`clip-corner h-full rounded-xl border border-line bg-surface/70 p-6 ${
                  p.accent === "lime" ? "hover:border-lime hover:box-glow-lime" :
                  p.accent === "magenta" ? "hover:border-magenta hover:box-glow-magenta" :
                  "hover:border-cyan hover:box-glow-cyan"
                } transition`}
              >
                <h3 className={`font-display text-lg ${p.accent === "lime" ? "text-lime" : p.accent === "magenta" ? "text-magenta" : "text-cyan"}`}>
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-sm text-mid">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXCHANGE TARGETS DETAIL */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Vault Targets</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">The Exchange Hit List</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-sm text-mid">
            Every target is chosen for a reason — reach, liquidity, and the audience that finds a coin like
            $THIEF genuinely fun to trade.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ExchangeTarget name="OKX" tier="Phase 02 Target" note="Deep global liquidity and a fast-moving retail base — the first vault door on the plan." />
          <ExchangeTarget name="Binance" tier="Phase 03 Target" delay={0.08} note="The biggest exchange in crypto. The long-term target every phase of the roadmap builds toward." />
          <ExchangeTarget name="Bybit" tier="Phase 02 Target" delay={0.16} note="A derivatives-heavy, meme-friendly audience that moves fast on new listings." />
        </div>
        <Reveal delay={0.24}>
          <p className="mt-8 text-center font-data text-[11px] uppercase tracking-widest text-low">
            Listings depend on exchange approval, liquidity, and volume requirements. This is a roadmap goal, not a guarantee.
          </p>
        </Reveal>
      </section>
    </>
  );
}
