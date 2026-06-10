"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FadeUp, StaggerGrid } from "@/components/motion";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/brand";
import { featuresHero, featureDetails, comparisonRows } from "@/content/features";

function StickyTabNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="sticky top-[64px] z-30 -mx-6 overflow-x-auto border-b border-espresso/10 bg-cream/95 px-6 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl gap-1 py-2">
        {featureDetails.map((f) => (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeId === f.id
                ? "bg-terracotta/10 text-terracotta"
                : "text-ink/50 hover:bg-cream-warm hover:text-ink"
            }`}
          >
            {f.title}
          </button>
        ))}
      </nav>
    </div>
  );
}

function ComparisonTable() {
  return (
    <FadeUp>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-espresso/10">
              <th className="py-3 pr-4 text-left font-semibold text-espresso">
                Feature
              </th>
              <th className="px-4 py-3 text-center font-semibold text-espresso">
                Free
              </th>
              <th className="px-4 py-3 text-center font-semibold text-terracotta">
                Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-espresso/5"
              >
                <td className="py-3 pr-4 text-ink/70">{row.feature}</td>
                <td className="px-4 py-3 text-center">
                  {row.free === true ? (
                    <svg
                      className="mx-auto h-5 w-5 text-leaf"
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
                  ) : row.free === false ? (
                    <svg
                      className="mx-auto h-5 w-5 text-ink/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <span className="text-ink/50">{row.free}</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.pro === true ? (
                    <svg
                      className="mx-auto h-5 w-5 text-leaf"
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
                  ) : (
                    <span className="font-medium text-terracotta">
                      {row.pro}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeUp>
  );
}

export default function FeaturesPage() {
  const [activeId, setActiveId] = useState(featureDetails[0].id);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-feature-id");
            if (id) setActiveId(id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const el = sectionRefs.current.get(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-4 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {featuresHero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {featuresHero.sub}
          </p>
        </div>
      </section>

      {/* Sticky tab nav */}
      <StickyTabNav activeId={activeId} onSelect={scrollToSection} />

      {/* Feature sections — alternating left/right */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-20">
          {featureDetails.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(feature.id, el);
                }}
                data-feature-id={feature.id}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Screenshot placeholder */}
                <FadeUp
                  className="md:[direction:ltr]"
                  y={0}
                >
                  <div
                    className={`flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-espresso/8 bg-white shadow-sm`}
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10">
                        <svg
                          className="h-6 w-6 text-terracotta"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-ink/30">
                        {feature.title} screenshot
                      </p>
                    </div>
                  </div>
                </FadeUp>

                {/* Copy */}
                <FadeUp className="md:[direction:ltr]" delay={0.1}>
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-terracotta">
                    {feature.title}
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-espresso md:text-3xl">
                    {feature.headline}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/60">
                    {feature.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {feature.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-ink/60"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-leaf"
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
                        {b}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              Free plan vs Pro plan
            </h2>
            <p className="mt-3 text-base text-ink/50">
              Everything you need to decide.
            </p>
          </FadeUp>
          <ComparisonTable />
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
            >
              See full pricing details
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-terracotta px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Try every feature free.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-button bg-white px-8 py-3.5 text-base font-semibold text-terracotta shadow-md transition-colors hover:bg-cream"
            >
              Start free
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-button border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
