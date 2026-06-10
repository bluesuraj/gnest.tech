"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion";
import { features } from "@/content/home";

const icons: Record<string, React.ReactNode> = {
  receipt: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  "credit-card": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  package: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  "bar-chart": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  users: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  heart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 3v18m4.5-18v18m4.5-18v18m4.5-18v18M5.25 3h13.5" />
    </svg>
  ),
};

export default function FeatureDeepDive() {
  const [activeId, setActiveId] = useState(features[0].id);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

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

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Everything you need to run your cafe
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            From billing to reports, every feature designed for how Indian cafes
            actually work.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sticky side nav — desktop only */}
          <nav className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              {features.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    const el = sectionRefs.current.get(f.id);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeId === f.id
                      ? "bg-terracotta/10 text-terracotta"
                      : "text-ink/60 hover:bg-cream-warm hover:text-ink"
                  }`}
                >
                  <span
                    className={`${activeId === f.id ? "text-terracotta" : "text-ink/40"}`}
                  >
                    {icons[f.icon]}
                  </span>
                  {f.title}
                  {f.id === "multi-outlet" && (
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-leaf">
                      Growing
                    </span>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Feature sections with phone mockup */}
          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(f.id, el);
                }}
                data-feature-id={f.id}
                className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-espresso/5 bg-white p-6 md:grid-cols-2 md:gap-12 md:p-10"
              >
                {/* Phone mockup */}
                <div className="flex items-center justify-center">
                  <div className="relative w-[200px] overflow-hidden rounded-[1.5rem] border-2 border-espresso/10 bg-ink shadow-lg sm:w-[220px]">
                    <div className="h-4 w-full bg-ink" />
                    <div className="flex aspect-[9/16] w-full items-center justify-center bg-cream-warm">
                      <div className="text-center">
                        <span className="text-ink/30">{icons[f.icon]}</span>
                        <p className="mt-2 text-xs text-ink/30">{f.title} screen</p>
                      </div>
                    </div>
                    <div className="flex h-5 items-center justify-center bg-ink">
                      <div className="h-0.5 w-12 rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                      {icons[f.icon]}
                    </span>
                    <h3 className="font-display text-xl font-bold text-espresso">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-base font-medium text-ink/80">{f.headline}</p>
                  <ul className="mt-4 space-y-2">
                    {f.bullets.map((b, i) => (
                      <li
                        key={i}
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
                  <Link
                    href={f.link}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
                  >
                    Explore
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
