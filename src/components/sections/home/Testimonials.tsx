"use client";

import { FadeUp, MarqueeRow } from "@/components/motion";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            What cafe owners say
          </h2>
        </FadeUp>
      </div>

      <MarqueeRow speed={40} className="py-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="w-[320px] shrink-0 rounded-card border border-espresso/8 bg-white p-6 shadow-sm md:w-[380px]"
          >
            {/* Quote mark */}
            <svg
              className="mb-3 h-6 w-6 text-terracotta/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <p className="text-sm leading-relaxed text-ink/70">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4 border-t border-espresso/5 pt-3">
              <p className="text-sm font-semibold text-espresso">
                {t.name}
              </p>
              <p className="text-xs text-ink/40">
                {t.role}, {t.cafe} — {t.location}
              </p>
            </div>
          </div>
        ))}
      </MarqueeRow>
    </section>
  );
}
