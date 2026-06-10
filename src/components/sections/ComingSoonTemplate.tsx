"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeUp, StaggerGrid } from "@/components/motion";
import type { ComingSoonPage } from "@/content/coming-soon";

export default function ComingSoonTemplate({
  page,
}: {
  page: ComingSoonPage;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
            {page.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {page.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {page.sub}
          </p>
        </div>
      </section>

      {/* Planned features */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <StaggerGrid className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {page.plannedFeatures.map((feature) => (
              <StaggerGrid.Item key={feature.title}>
                <div className="rounded-card border border-dashed border-espresso/15 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10">
                    <svg
                      className="h-5 w-5 text-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-bold text-espresso">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {feature.description}
                  </p>
                </div>
              </StaggerGrid.Item>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-md">
          <FadeUp>
            <div className="rounded-card border border-espresso/10 bg-cream p-8 text-center">
              {submitted ? (
                <div className="py-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-leaf/20 text-leaf">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-espresso">
                    You're on the list!
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    We'll notify you as soon as this is ready.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-espresso">
                    Get notified when we launch
                  </h3>
                  <p className="mt-2 text-sm text-ink/50">
                    Be the first to know. No spam.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-3 text-left"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full rounded-button border border-espresso/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-terracotta focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number (optional)"
                      className="w-full rounded-button border border-espresso/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-terracotta focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-button bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
                    >
                      Join waitlist
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Link to cafe */}
      <section className="px-6 py-12 text-center">
        <FadeUp>
          <p className="text-ink/50">
            Meanwhile, see what we built for cafes →{" "}
            <Link
              href="/cafe-pos"
              className="font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
            >
              Cafe POS
            </Link>
          </p>
        </FadeUp>
      </section>
    </>
  );
}
