"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { morningTimeline } from "@/content/cafe";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, React.ReactNode> = {
  sunrise: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  "wifi-off": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
    </svg>
  ),
  "qr-code": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
    </svg>
  ),
  alert: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
  heart: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  users: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  "bar-chart": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const scrollWidth = track.scrollWidth - container.offsetWidth;

    const tween = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-espresso">
      {/* Section heading — visible before scroll starts */}
      <div className="absolute left-6 top-8 z-10 md:left-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
          A morning at your cafe
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-cream md:text-3xl">
          From open to close, we've got you.
        </h2>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="flex h-screen items-center gap-8 px-6 pt-24 md:gap-12 md:px-12"
        style={{ width: "max-content" }}
      >
        {morningTimeline.map((beat, i) => (
          <div
            key={i}
            className="flex h-[360px] w-[300px] shrink-0 flex-col justify-between rounded-card border border-cream/10 bg-espresso-light p-8 md:w-[380px]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/20 text-terracotta">
                  {iconMap[beat.icon]}
                </span>
                <span className="font-mono text-sm text-cream/50">
                  {beat.time}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-cream">
                {beat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {beat.description}
              </p>
            </div>
            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {morningTimeline.map((_, j) => (
                <div
                  key={j}
                  className={`h-1.5 rounded-full transition-all ${
                    j === i
                      ? "w-6 bg-terracotta"
                      : j < i
                        ? "w-1.5 bg-terracotta/40"
                        : "w-1.5 bg-cream/15"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Spacer to ensure last card is fully visible */}
        <div className="w-12 shrink-0" />
      </div>
    </section>
  );
}
