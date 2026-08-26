"use client";

import { useState } from "react";
import { CONTRACT_ADDRESS } from "@/lib/constants";

export default function CopyAddress({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`group flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 font-data text-xs text-mid backdrop-blur transition hover:border-lime hover:text-lime ${compact ? "" : "sm:text-sm"}`}
    >
      <span className="hidden text-low sm:inline">CA:</span>
      <span className="max-w-[140px] truncate sm:max-w-[220px]">{CONTRACT_ADDRESS}</span>
      <span className="shrink-0 text-lime">{copied ? "COPIED ✓" : "COPY"}</span>
    </button>
  );
}
