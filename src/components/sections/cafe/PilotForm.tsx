"use client";

import { useState } from "react";
import { FadeUp } from "@/components/motion";
import { pilotProgram } from "@/content/cafe";

export default function PilotForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to backend / API endpoint
    setSubmitted(true);
  }

  return (
    <section id="pilot" className="bg-espresso px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Perks */}
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-cream md:text-4xl">
              {pilotProgram.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/60">
              {pilotProgram.sub}
            </p>
            <ul className="mt-6 space-y-3">
              {pilotProgram.perks.map((perk, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-cream/70"
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
                  {perk}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.15}>
            <div className="rounded-card border border-cream/10 bg-espresso-light p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-leaf/20 text-leaf">
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
                  <h3 className="font-display text-xl font-bold text-cream">
                    You're in!
                  </h3>
                  <p className="mt-2 text-sm text-cream/60">
                    We'll reach out on WhatsApp within 24 hours to get you set
                    up.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="mb-2 font-display text-lg font-bold text-cream">
                    Join the founding cafes
                  </h3>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-cream/50">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className="w-full rounded-button border border-cream/10 bg-espresso px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-terracotta focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-cream/50">
                      Cafe name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="The Chai Story"
                      className="w-full rounded-button border border-cream/10 bg-espresso px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-terracotta focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-cream/50">
                      WhatsApp number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-button border border-cream/10 bg-espresso px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-terracotta focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-button bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
                  >
                    Join the pilot
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
