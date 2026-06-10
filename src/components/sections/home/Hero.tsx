"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { hero } from "@/content/home";

/* Lazy-load the 3D scene — no SSR, with a static fallback */
const Hero3D = dynamic(() => import("@/components/three/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center md:h-[480px]">
      <div className="relative flex h-[360px] w-[260px] items-center justify-center rounded-[2rem] border-2 border-espresso/10 bg-cream-warm/50 shadow-inner md:h-[440px] md:w-[300px]">
        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 animate-pulse rounded-xl bg-terracotta/15" />
          <p className="text-sm text-espresso/30">Loading 3D scene...</p>
        </div>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,111,61,0.08), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/signup"
              className="rounded-button bg-terracotta px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-terracotta-dark"
            >
              {hero.ctaPrimary}
            </Link>
            <button className="rounded-button border border-espresso/20 px-8 py-3.5 text-base font-semibold text-espresso transition-colors hover:bg-espresso/5">
              {hero.ctaSecondary}
            </button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-medium text-ink/60">
            {hero.trustStrip.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-leaf"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 3D tablet + receipt scene */}
        <div className="flex items-center justify-center">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
