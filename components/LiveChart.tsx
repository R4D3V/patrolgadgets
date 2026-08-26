"use client";

import { CONTRACT_ADDRESS, TOKEN_TICKER } from "@/lib/constants";

export default function LiveChart() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <p className="font-data text-xs uppercase tracking-[0.3em] text-cyan">
          Live Market Data
        </p>
        <h2 className="mt-3 font-display text-3xl text-hi sm:text-4xl">
          <span className="text-lime text-glow-lime">{TOKEN_TICKER}</span> Price Chart
        </h2>
      </div>

      <div className="clip-corner mt-10 overflow-hidden rounded-2xl border border-line bg-surface/60">
        <iframe
          title={`${TOKEN_TICKER} live chart`}
          src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&chart=1&trading=0`}
          className="h-[450px] w-full border-0 sm:h-[550px]"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>

      <p className="mt-4 text-center font-body text-xs text-low">
        Powered by DexScreener. Data updates in real-time.
      </p>
    </section>
  );
}
