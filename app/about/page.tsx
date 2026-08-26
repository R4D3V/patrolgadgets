import Image from "next/image";
import Reveal from "@/components/Reveal";
import VaultDial from "@/components/VaultDial";
import CopyAddress from "@/components/CopyAddress";
import AnimatedLogo from "@/components/AnimatedLogo";
import { TOKEN_TICKER } from "@/lib/constants";

const MEDIA_KIT = [
  { label: "X / Twitter Header (1500×500)", file: "/banners/twitter-header.jpg", ratio: "aspect-[1500/500]" },
  { label: "Square Post (1080×1080)", file: "/banners/square-banner.jpg", ratio: "aspect-square" },
  { label: "Wide Banner (1920×1080)", file: "/banners/hero-wide-banner.jpg", ratio: "aspect-video" },
];

const TIMELINE = [
  {
    time: "T-MINUS: ORIGIN",
    title: "A gremlin crawls out of the clay",
    body:
      "Somewhere between a claymation short and a group chat at 3AM, the Thief showed up. Green, slippery, permanently unbothered — the kind of creature that looks harmless right up until your bag is gone.",
  },
  {
    time: "T-MINUS: THE IDEA",
    title: "Gen Z doesn't wait in line",
    body:
      "Older coins wait patiently for a listing email. The Thief doesn't wait for anything — it breaks in. The idea was simple: build a coin with an actual narrative pointed at real exchange listings, not just vibes.",
  },
  {
    time: "T-MINUS: LAUNCH",
    title: "$THIEF goes live on Solana",
    body:
      "Liquidity locked, contract deployed, no team allocation games. Just a fast chain, a low fee, and a mascot who's already halfway through the vault door.",
  },
  {
    time: "T-PLUS: NOW",
    title: "The crew is assembling",
    body:
      "Every wallet that holds $THIEF is part of the crew. No hierarchy, no gatekeeping — just people who think a lizard with main-character energy deserves a shot at the big vaults.",
  },
];

const VALUES = [
  { title: "No Gatekeeping", body: "Anyone can join the crew. No whitelist drama, no VC unlock cliffs." },
  { title: "Built In Public", body: "Roadmap, wallet, and progress stay visible. The crew sees the whole plan." },
  { title: "Chaos, Organized", body: "Gen Z humor on the surface, a real exchange-listing strategy underneath." },
  { title: "Community First", body: "Holders vote on raids, memes, and priorities. This is a crew, not a company." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-10 text-center">
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <VaultDial size={360} />
        </div>
        <Reveal>
          <p className="font-data text-xs uppercase tracking-[0.3em] text-cyan">Dossier // About</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 font-display text-4xl text-hi sm:text-6xl">
            Meet the <span className="text-lime text-glow-lime">Thief</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl font-body text-mid">
            The full story of how a claymation gremlin ended up leading a Solana heist crew.
          </p>
        </Reveal>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="clip-corner relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-lime box-glow-lime">
              <Image src="/img/mascot.jpg" alt="Portrait of the Thief" fill className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-hi sm:text-3xl">Identity: Unknown. Intentions: Clear.</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 font-body text-mid">
                Species: uncertain. Vibe: unbothered. The Thief doesn&apos;t explain itself — it just shows up
                wherever the loot is. In this story, the loot is a listing on OKX, Binance, and Bybit, and the
                Thief has already started casing the joint.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 font-body text-mid">
                {TOKEN_TICKER} runs on Solana for one reason: speed. A heist crew needs a fast chain and cheap
                getaways, and Solana delivers both. Every holder becomes part of the crew the moment they buy in —
                no ranks, no VIP rooms, just people betting on a lizard with a plan.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6">
                <CopyAddress />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Origin Log</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">How It Started</h2>
        </Reveal>

        <div className="relative mt-14 flex flex-col gap-10 border-l border-line pl-8">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border border-lime bg-void box-glow-lime" />
                <p className="font-data text-[10px] uppercase tracking-widest text-magenta">{item.time}</p>
                <h3 className="mt-1 font-display text-xl text-hi">{item.title}</h3>
                <p className="mt-2 font-body text-sm text-mid">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEDIA KIT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <AnimatedLogo size={44} />
            <p className="font-data text-xs uppercase tracking-[0.3em] text-cyan">Crew Supply Drop</p>
            <h2 className="font-display text-3xl text-hi sm:text-4xl">Media Kit</h2>
            <p className="max-w-lg font-body text-sm text-mid">
              Grab these for raids, group chats, and shill posts. Right-click → save, or open in a new tab.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {MEDIA_KIT.map((item, i) => (
            <Reveal key={item.file} delay={i * 0.05}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group clip-corner block overflow-hidden rounded-xl border border-line bg-surface/70 transition hover:border-lime hover:box-glow-lime"
              >
                <div className={`relative w-full ${item.ratio} overflow-hidden bg-void`}>
                  <Image
                    src={item.file}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-data text-xs uppercase tracking-widest text-mid group-hover:text-lime">
                    {item.label}
                  </span>
                  <span className="font-data text-xs text-low group-hover:text-lime">↗ Open</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-center font-data text-xs uppercase tracking-[0.3em] text-cyan">Crew Rules</p>
          <h2 className="mt-3 text-center font-display text-3xl text-hi sm:text-4xl">What We Stand For</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="clip-corner h-full rounded-xl border border-line bg-surface/70 p-6 transition hover:border-lime hover:box-glow-lime">
                <h3 className="font-display text-lg text-lime">{v.title}</h3>
                <p className="mt-2 font-body text-sm text-mid">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
