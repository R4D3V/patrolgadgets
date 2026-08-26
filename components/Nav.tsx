"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, TOKEN_TICKER, LINKS } from "@/lib/constants";
import AnimatedLogo from "./AnimatedLogo";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-line bg-surface/70 px-3 py-2 backdrop-blur-md box-glow-lime">
        <Link
          href="/"
          className="flex items-center gap-2 pl-1 font-display text-sm tracking-wider text-hi"
        >
          <AnimatedLogo size={30} />
          <span className="hidden sm:inline">
            THE <span className="text-lime">{TOKEN_TICKER}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-data text-xs uppercase tracking-widest transition ${
                  active ? "bg-lime text-void" : "text-mid hover:text-lime"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-lime px-4 py-2 font-data text-xs font-bold uppercase tracking-widest text-void transition hover:bg-hi sm:block"
          >
            Buy $THIEF
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-hi md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-[70px] flex flex-col gap-1 rounded-2xl border border-line bg-surface/95 p-3 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-data text-sm uppercase tracking-widest text-mid hover:bg-void hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINKS.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 rounded-xl bg-lime px-4 py-3 text-center font-data text-sm font-bold uppercase tracking-widest text-void"
          >
            Buy $THIEF
          </a>
        </div>
      )}
    </header>
  );
}
