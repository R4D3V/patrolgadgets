import { CONTRACT_ADDRESS, TOKEN_TICKER } from "@/lib/constants";

const ITEMS = [
  `${TOKEN_TICKER} ON SOLANA`,
  "THE HEIST IS LIVE",
  `CA: ${CONTRACT_ADDRESS}`,
  "TARGET: OKX // BINANCE // BYBIT",
  "NO CAP, ALL VAULT",
  "COMMUNITY OWNED, GREMLIN RUN",
];

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-data text-xs uppercase tracking-[0.2em] text-lime/80">
            {item}
            <span className="text-magenta">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
