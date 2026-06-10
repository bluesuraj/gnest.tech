"use client";

import Link from "next/link";
import { FadeUp, StaggerGrid, TiltCard } from "@/components/motion";
import { businessTypes } from "@/content/home";

export default function BusinessTypes() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Built for your business
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Whether you run a cafe, bakery, or cloud kitchen — we've got you
            covered.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((biz) => (
            <StaggerGrid.Item key={biz.name}>
              <TiltCard maxTilt={6}>
                <Link
                  href={biz.href}
                  className={`group relative block rounded-card border p-6 transition-shadow hover:shadow-lg ${
                    biz.active
                      ? "border-espresso/10 bg-white"
                      : "border-dashed border-espresso/15 bg-cream-warm/50"
                  }`}
                >
                  {biz.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-terracotta/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-terracotta">
                      {biz.badge}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-espresso">
                    {biz.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {biz.description}
                  </p>
                  {biz.active && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              </TiltCard>
            </StaggerGrid.Item>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
