"use client";

import Link from "next/link";
import { FadeUp, StaggerGrid } from "@/components/motion";
import { aboutHero, mission, values, roadmap } from "@/content/about";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {aboutHero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {aboutHero.sub}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="rounded-card border border-terracotta/20 bg-terracotta/5 p-10 text-center">
              <h2 className="font-display text-2xl font-bold text-espresso md:text-3xl">
                {mission.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                {mission.body}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              What we believe
            </h2>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerGrid.Item key={value.title}>
                <div className="rounded-card border border-espresso/5 bg-cream p-8">
                  <h3 className="font-display text-lg font-bold text-espresso">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>
              </StaggerGrid.Item>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              Where we're headed
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-espresso/10 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-12">
                {roadmap.map((phase, i) => (
                  <div
                    key={phase.label}
                    className="relative flex gap-6 md:items-center"
                  >
                    {/* Dot */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 md:absolute md:left-1/2 md:-translate-x-1/2 ${
                        phase.status === "current"
                          ? "border-terracotta bg-terracotta text-white"
                          : phase.status === "done"
                            ? "border-leaf bg-leaf text-white"
                            : "border-espresso/20 bg-cream text-ink/30"
                      }`}
                    >
                      {phase.status === "done" ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="font-mono text-sm font-bold">
                          {i + 1}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 rounded-card border p-6 ${
                        phase.status === "current"
                          ? "border-terracotta/20 bg-terracotta/5"
                          : "border-espresso/5 bg-white"
                      } ${i % 2 === 0 ? "md:mr-[55%]" : "md:ml-[55%]"}`}
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-espresso">
                          {phase.label}
                        </h3>
                        {phase.status === "current" && (
                          <span className="rounded-full bg-terracotta px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                            Now
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-ink/60">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream md:text-4xl">
            Join us on this journey.
          </h2>
          <p className="mt-4 text-base text-cream/60">
            Be one of our founding cafe partners and shape the future of
            cafe billing in India.
          </p>
          <div className="mt-8">
            <Link
              href="/cafe-pos#pilot"
              className="rounded-button bg-terracotta px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-terracotta-dark"
            >
              Join the pilot program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
