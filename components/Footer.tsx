import Link from "next/link";
import { LINKS, NAV_LINKS, TOKEN_TICKER } from "@/lib/constants";
import CopyAddress from "./CopyAddress";
import AnimatedLogo from "./AnimatedLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <AnimatedLogo size={52} />
            <div>
              <p className="font-display text-2xl tracking-wide text-hi">
                THE THIEF <span className="text-lime text-glow-lime">{TOKEN_TICKER}</span>
              </p>
              <p className="mt-2 max-w-sm font-body text-sm text-mid">
                A green little gremlin with big exchange dreams. Built by the community, running on Solana, coming for the vault.
              </p>
            </div>
          </div>
          <CopyAddress />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6">
          <div className="flex gap-6 font-data text-xs uppercase tracking-widest text-mid">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-6 font-data text-xs uppercase tracking-widest text-mid">
            <a href={LINKS.dexscreener} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Chart</a>
            <a href={LINKS.solscan} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Solscan</a>
            <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-magenta">X</a>
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-magenta">Telegram</a>
          </div>
        </div>

        <p className="font-data text-[10px] uppercase tracking-widest text-low">
          $THIEF is a meme coin with no intrinsic value or financial return guarantee. It exists purely for entertainment.
          Nothing here is financial advice — DYOR before you ape.
        </p>
      </div>
    </footer>
  );
}
