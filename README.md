# The Thief Gen Z ($THIEF)

Solana meme coin site — Next.js 16 (App Router) + Tailwind CSS v4, cyberpunk/neon "heist" theme built around the mascot.

## Contract
- Chain: Solana
- CA: `HCeLw23AT2q8zK9Gvo8rVEY1wtHRx6dNDyaBVv6tpump`
- Edit in `lib/constants.ts` (also update social/Telegram/X links there).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm run start
```

## Pages
- `/` — Home: hero, ticker, tokenomics, "The Heist Roadmap", exchange-target teaser, CTA
- `/about` — mascot lore, origin timeline, community values
- `/vision` — mission/vision statements, pillars, detailed exchange hit-list (OKX, Binance, Bybit)

## Notes
- Fonts (Chakra Petch, Space Grotesk, JetBrains Mono) are self-hosted in `app/fonts/` via `next/font/local` — no external font requests at build or runtime.
- Update `NEXT_PUBLIC_SITE_URL` env var (or the fallback in `app/layout.tsx`) to your real domain before deploying, so Open Graph images resolve correctly.
- Buy/Chart buttons point to pump.fun and Dexscreener using the CA above — swap for your preferred DEX/aggregator links in `lib/constants.ts` once you have a Raydium pool, etc.
- Everything is content-editable in plain English inside `app/page.tsx`, `app/about/page.tsx`, and `app/vision/page.tsx` — no design-system knowledge needed to tweak copy.
