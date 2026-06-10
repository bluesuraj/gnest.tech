"use client";

import { FadeUp } from "@/components/motion";
import { whySwitch } from "@/content/home";

export default function WhySwitch() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Why cafes switch to us
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {whySwitch.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="rounded-card border border-espresso/5 bg-cream p-8">
                {/* Number accent */}
                <span className="font-mono text-4xl font-bold text-terracotta/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-espresso">
                  {item.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
