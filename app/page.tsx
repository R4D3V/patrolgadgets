import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VaultDial from "@/components/VaultDial";
import Ticker from "@/components/Ticker";
import CopyAddress from "@/components/CopyAddress";
import StatCard from "@/components/StatCard";
import RoadmapPhase from "@/components/RoadmapPhase";
import ExchangeTarget from "@/components/ExchangeTarget";
import { LINKS, TOKEN_TICKER } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-10 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-60">
          <VaultDial size={620} />
        </div>

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-data text-[11px] uppercase tracking-[0.25em] text-cyan backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Live on Solana
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mx-auto mt-8 h-[220px] w-[220px] animate-float sm:h-[280px] sm:w-[280px]">
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-lime/30 blur-3xl" />
            <div className="clip-corner h-full w-full overflow-hidden rounded-2xl border-2 border-lime box-glow-lime">
              <Image src="/img/mascot.jpg" alt="The Thief Gen Z mascot" fill className="object-cover" priority />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 font-display text-4xl leading-[1.05] tracking-tight text-hi sm:text-6xl md:text-7xl">
            THE <span className="text-lime text-glow-lime">THIEF</span> IS
            <br />
            IN THE <span className="text-magenta text-glow-magenta">VAULT</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-mid sm:text-lg">
            A slippery little gremlin, a big Solana bag, and a plan to break into every major exchange vault on
            the internet. Meet <span className="text-hi">{TOKEN_TICKER}</span> — the meme coin running the heist.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.pumpfun}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner rounded-md bg-lime px-7 py-3 font-data text-sm font-bold uppercase tracking-widest text-void transition hover:bg-hi hover:box-glow-lime"
            >
              Buy {TOKEN_TICKER}
            </a>
            <a
              href={LINKS.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner rounded-md border border-line bg-surface/70 px-7 py-3 font-data text-sm uppercase tracking-widest text-hi backdrop-blur transition hover:border-cyan hover:text-cyan"
            >
              View Chart
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-6">
            <CopyAddress />
          </div>
        </Reveal>
      </section>

      <Ticker />

      {/* CASE FILE / ABOUT TEASER */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="clip-corner relative overflow-hidden rounded-2xl border border-line bg-surface/60">
              <div className="relative aspect-[4/5] w-full">
                <Image src="/img/mascot.jpg" alt="Case file: the Thief" fill className="object-cover grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-magenta/60 bg-void/80 px-3 py-1 font-data text-[10px] uppercase tracking-widest text-magenta">
                Case No. 0X4F2A
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-line bg-void/80 p-3 font-data text-[10px] uppercase tracking-widest text-lime backdrop-blur">
                Status: At Large — Last Seen Near the Vault
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-data text-xs uppercase tracking-[0.3em] text-cyan">Case File // 001</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 font-display text-3xl text-hi sm:text-4xl">
                Not your average <span className="text-lime">lizard</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 font-body text-mid">
                Pulled straight out of a claymation fever dream, the Thief slid into Solana with one mission: raid
                the vaults of the biggest exchanges on Earth and bring the loot back to the holders who believed
                first. No VC allocation, no insider unlock, just a green gremlin and a community that moves like a
                heist crew.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-data text-sm uppercase tracking-widest text-lime hover:text-hi"
              >
                Read the full case file →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Evidence Locker</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">Token Intel</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Chain" value="Solana" accent="lime" />
          <StatCard label="Supply" value="1,000,000,000" accent="cyan" />
          <StatCard label="Tax" value="0 / 0" accent="magenta" />
          <StatCard label="Liquidity" value="Burned" accent="lime" />
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">The Plan</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">The Heist Roadmap</h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-body text-sm text-mid">
            Four phases. One target. Every phase pulls the crew closer to the vault door.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          <RoadmapPhase
            index="00"
            codename="The Setup"
            title="Casing the Joint"
            status="complete"
            align="left"
            items={[
              "Deploy $THIEF on Solana, lock liquidity, burn LP",
              "Launch brand identity, site, and social channels",
              "Seed the first 500 holders in the crew",
            ]}
          />
          <RoadmapPhase
            index="01"
            codename="The Break-In"
            title="Building the Crew"
            status="active"
            align="right"
            items={[
              "Grow holders past 5,000 wallets",
              "Meme competitions, raid squads, and community rewards",
              "First CEX application packets submitted (tier-2 exchanges)",
            ]}
          />
          <RoadmapPhase
            index="02"
            codename="The Vault Door"
            title="Exchange Listings"
            status="locked"
            align="left"
            items={[
              "Push for mid-tier CEX listings and market-maker partners",
              "Formal listing applications to OKX, Binance, and Bybit",
              "Volume + liquidity milestones to qualify for tier-1 review",
            ]}
          />
          <RoadmapPhase
            index="03"
            codename="The Escape"
            title="Global Loot Run"
            status="locked"
            align="right"
            items={[
              "Tier-1 exchange listing push",
              "Cross-chain bridge exploration",
              "Merch drops, IRL activations, and the next heist target",
            ]}
          />
        </div>
      </section>

      {/* EXCHANGE TARGETS TEASER */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Wanted Vaults</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">Exchange Targets</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ExchangeTarget name="OKX" tier="Tier 1 Target" note="Global liquidity, deep order books — first vault on the list." />
          <ExchangeTarget name="Binance" tier="Tier 1 Target" delay={0.08} note="The biggest vault of all. The end goal of the entire crew." />
          <ExchangeTarget name="Bybit" tier="Tier 1 Target" delay={0.16} note="Derivatives depth and a fast-moving trader base." />
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-body text-sm text-mid">
            Full breakdown of the plan on the{" "}
            <Link href="/vision" className="text-lime hover:text-hi">
              Vision &amp; Mission
            </Link>{" "}
            page.
          </p>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-auto mb-10 max-w-5xl overflow-hidden rounded-3xl border border-line px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-lime/10 via-transparent to-magenta/10" />
        <Reveal>
          <h2 className="font-display text-3xl text-hi sm:text-5xl">
            Join the <span className="text-lime text-glow-lime">crew</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-md font-body text-mid">
            Grab a bag before the vault door opens. The heist is community-run — every holder is part of the crew.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.pumpfun}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner rounded-md bg-lime px-7 py-3 font-data text-sm font-bold uppercase tracking-widest text-void hover:bg-hi hover:box-glow-lime"
            >
              Buy {TOKEN_TICKER}
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner rounded-md border border-line bg-surface/70 px-7 py-3 font-data text-sm uppercase tracking-widest text-hi hover:border-magenta hover:text-magenta"
            >
              Join Telegram
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
