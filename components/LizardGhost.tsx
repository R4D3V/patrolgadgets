"use client";

import { useEffect, useRef } from "react";

function LizardSVG({ flipX }: { flipX: boolean }) {
  return (
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flipX ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M10 20 Q2 12 4 6 Q6 2 10 5 Q14 8 12 14"
        stroke="var(--lime)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      >
        <animate
          attributeName="d"
          values="M10 20 Q2 12 4 6 Q6 2 10 5 Q14 8 12 14;M10 20 Q1 15 3 9 Q5 4 9 7 Q13 10 11 16;M10 20 Q2 12 4 6 Q6 2 10 5 Q14 8 12 14"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </path>

      <g>
        <line x1="22" y1="22" x2="16" y2="34" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <animate attributeName="x2" values="16;20;16" dur="0.4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34;30;34" dur="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="16" y1="34" x2="12" y2="36" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x2" values="12;16;12" dur="0.4s" repeatCount="indefinite" />
        </line>
      </g>

      <g>
        <line x1="22" y1="18" x2="16" y2="6" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <animate attributeName="x2" values="16;20;16" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
          <animate attributeName="y2" values="6;10;6" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </line>
        <line x1="16" y1="6" x2="12" y2="4" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x2" values="12;16;12" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </line>
      </g>

      <ellipse cx="35" cy="20" rx="16" ry="7" fill="var(--lime)" opacity="0.85">
        <animate attributeName="ry" values="7;6.5;7" dur="0.4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="36" cy="21" rx="10" ry="4" fill="var(--lime-dim)" opacity="0.4" />

      <g>
        <line x1="46" y1="22" x2="52" y2="34" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <animate attributeName="x2" values="52;48;52" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
          <animate attributeName="y2" values="34;30;34" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </line>
        <line x1="52" y1="34" x2="56" y2="36" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x2" values="56;52;56" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </line>
      </g>

      <g>
        <line x1="46" y1="18" x2="52" y2="6" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <animate attributeName="x2" values="52;48;52" dur="0.4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="6;10;6" dur="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="52" y1="6" x2="56" y2="4" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x2" values="56;52;56" dur="0.4s" repeatCount="indefinite" />
        </line>
      </g>

      <ellipse cx="55" cy="20" rx="9" ry="7" fill="var(--lime)" opacity="0.9" />
      <ellipse cx="58" cy="17" rx="3.5" ry="3" fill="var(--void)" />
      <ellipse cx="58" cy="16.5" rx="2.5" ry="2.2" fill="#fff" />
      <ellipse cx="59" cy="16.5" rx="1.2" ry="1.5" fill="var(--void)">
        <animate attributeName="cx" values="59;58.5;59;59.5;59" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="59.8" cy="15.8" r="0.6" fill="#fff" opacity="0.9" />
      <path d="M60 23 Q63 24 66 22" stroke="var(--void)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="65" cy="20" rx="4" ry="3.5" fill="var(--lime)" opacity="0.9" />
      <circle cx="67" cy="19" r="0.7" fill="var(--void)" opacity="0.5" />

      <g opacity="0.6">
        <circle cx="56" cy="36" r="1" fill="var(--lime)">
          <animate attributeName="cx" values="56;52;56" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </circle>
        <circle cx="54" cy="37" r="0.8" fill="var(--lime)">
          <animate attributeName="cx" values="54;50;54" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
        </circle>
      </g>

      <g opacity="0.6">
        <circle cx="56" cy="4" r="1" fill="var(--lime)">
          <animate attributeName="cx" values="56;52;56" dur="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="54" cy="3" r="0.8" fill="var(--lime)">
          <animate attributeName="cx" values="54;50;54" dur="0.4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

interface LizardState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  scale: number;
  opacity: number;
  flipX: boolean;
  pauseTimer: number;
}

const NUM_LIZARDS = 15;
const LIZARD_SPEED = 0.6;

function randomEdge(w: number, h: number): { x: number; y: number } {
  const side = Math.floor(Math.random() * 4);
  switch (side) {
    case 0: return { x: Math.random() * w, y: -30 };
    case 1: return { x: w + 30, y: Math.random() * h };
    case 2: return { x: Math.random() * w, y: h + 30 };
    default: return { x: -30, y: Math.random() * h };
  }
}

function randomPoint(w: number, h: number): { x: number; y: number } {
  return { x: Math.random() * (w - 100) + 50, y: Math.random() * (h - 100) + 50 };
}

export default function LizardGhost() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lizardsRef = useRef<LizardState[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    lizardsRef.current = Array.from({ length: NUM_LIZARDS }, (_, i) => {
      const start = randomEdge(w, h);
      const target = randomPoint(w, h);
      return {
        x: start.x,
        y: start.y,
        targetX: target.x,
        targetY: target.y,
        speed: LIZARD_SPEED + Math.random() * 0.5,
        scale: 0.7 + Math.random() * 0.7,
        opacity: 0.1 + Math.random() * 0.18,
        flipX: false,
        pauseTimer: 0,
      };
    });

    const containers = containerRef.current?.children;
    if (!containers) return;

    let lastTime = performance.now();

    function animate(now: number) {
      const dt = Math.min((now - lastTime) / 16.67, 3);
      lastTime = now;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      lizardsRef.current.forEach((liz, i) => {
        if (liz.pauseTimer > 0) {
          liz.pauseTimer -= dt;
          return;
        }

        const dx = liz.targetX - liz.x;
        const dy = liz.targetY - liz.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10) {
          const pt = randomPoint(vw, vh);
          liz.targetX = pt.x;
          liz.targetY = pt.y;
          liz.pauseTimer = 30 + Math.random() * 90;
          return;
        }

        const moveX = (dx / dist) * liz.speed * dt;
        const moveY = (dy / dist) * liz.speed * dt;
        liz.x += moveX;
        liz.y += moveY;

        if (dx > 0.5) liz.flipX = false;
        else if (dx < -0.5) liz.flipX = true;

        const el = containers?.[i] as HTMLElement | undefined;
        if (el) {
          el.style.transform = `translate(${liz.x}px, ${liz.y}px) scale(${liz.scale}) scaleX(${liz.flipX ? -1 : 1})`;
          el.style.opacity = String(liz.opacity);
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      lizardsRef.current.forEach((liz) => {
        liz.targetX = Math.min(liz.targetX, window.innerWidth - 50);
        liz.targetY = Math.min(liz.targetY, window.innerHeight - 50);
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {Array.from({ length: NUM_LIZARDS }, (_, i) => (
        <div
          key={i}
          className="absolute top-0 left-0"
          style={{ willChange: "transform" }}
        >
          <LizardSVG flipX={false} />
        </div>
      ))}
    </div>
  );
}
