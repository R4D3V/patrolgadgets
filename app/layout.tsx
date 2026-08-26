import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LizardGhost from "@/components/LizardGhost";

const chakra = localFont({
  variable: "--font-chakra",
  src: [
    { path: "./fonts/ChakraPetch-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ChakraPetch-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ChakraPetch-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/ChakraPetch-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const grotesk = localFont({
  variable: "--font-grotesk",
  src: [{ path: "./fonts/SpaceGrotesk-Variable.ttf", weight: "300 700", style: "normal" }],
  display: "swap",
});

const jbmono = localFont({
  variable: "--font-jbmono",
  src: [{ path: "./fonts/JetBrainsMono-Variable.ttf", weight: "100 800", style: "normal" }],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://thethiefgenz.example"),
  title: "The Thief Gen Z ($THIEF) — Solana Meme Coin",
  description:
    "The Thief Gen Z ($THIEF) is a Solana meme coin on a heist for the big exchange vaults — OKX, Binance, Bybit and beyond. No cap.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "The Thief Gen Z ($THIEF) — Solana Meme Coin",
    description: "A green gremlin, a Solana bag, and a plan to break into every major exchange vault.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakra.variable} ${grotesk.variable} ${jbmono.variable}`}>
      <body className="bg-void-radial min-h-screen antialiased">
        <div className="bg-grid pointer-events-none fixed inset-0 z-0 opacity-40" />
        <div className="scanline-overlay pointer-events-none fixed inset-0 z-0" />
        <div className="noise-vignette pointer-events-none fixed inset-0 z-0" />
        <LizardGhost />
        <div className="relative z-10">
          <Nav />
          <main className="pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
