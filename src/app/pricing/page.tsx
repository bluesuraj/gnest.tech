"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeUp, TiltCard, CountUp } from "@/components/motion";
import Accordion from "@/components/ui/Accordion";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/brand";
import {
  pricingHero,
  tiers,
  alwaysFree,
  pricingFaqs,
} from "@/content/pricing";

function PricingToggle({
  annual,
  onToggle,
}: {
  annual: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`text-sm font-medium ${!annual ? "text-espresso" : "text-ink/40"}`}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative h-7 w-12 rounded-full bg-espresso/15 transition-colors"
        aria-label="Toggle annual pricing"
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-terracotta shadow transition-transform ${
            annual ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium ${annual ? "text-espresso" : "text-ink/40"}`}
      >
        Annual{" "}
        <span className="text-xs text-leaf">(save 19%)</span>
      </span>
    </div>
  );
}

function CostCalculator() {
  const [currentCost, setCurrentCost] = useState(5000);

  const annualSavings = Math.max(0, currentCost * 12 - 649 * 12);

  return (
    <FadeUp>
      <div className="mx-auto max-w-2xl rounded-card border border-espresso/10 bg-white p-8">
        <h3 className="text-center font-display text-xl font-bold text-espresso">
          How much could you save?
        </h3>
        <p className="mt-2 text-center text-sm text-ink/50">
          What do you pay your current POS yearly?
        </p>

        <div className="mt-8">
          <input
            type="range"
            min={0}
            max={20000}
            step={500}
            value={currentCost}
            onChange={(e) => setCurrentCost(Number(e.target.value))}
            className="w-full accent-terracotta"
          />
          <div className="mt-2 flex items-center justify-between text-sm text-ink/50">
            <span>₹0/mo</span>
            <span className="font-mono text-lg font-bold text-espresso">
              ₹{currentCost.toLocaleString("en-IN")}/mo
            </span>
            <span>₹20,000/mo</span>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-leaf/5 p-6 text-center">
          <p className="text-sm text-ink/50">Your estimated annual savings</p>
          <p className="mt-1 font-mono text-4xl font-bold text-leaf">
            ₹{annualSavings.toLocaleString("en-IN")}
          </p>
          <p className="mt-1 text-xs text-ink/40">
            Compared to Pro plan at ₹649/mo (annual)
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {pricingHero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {pricingHero.sub}
          </p>
          <div className="mt-8">
            <PricingToggle
              annual={annual}
              onToggle={() => setAnnual(!annual)}
            />
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <FadeUp key={tier.name}>
                <TiltCard maxTilt={5}>
                  <div
                    className={`relative flex h-full flex-col rounded-card border p-8 ${
                      tier.highlighted
                        ? "border-terracotta bg-white shadow-lg ring-2 ring-terracotta/20"
                        : "border-espresso/10 bg-white"
                    }`}
                  >
                    {tier.badge && (
                      <span
                        className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                          tier.highlighted
                            ? "bg-terracotta text-white"
                            : "bg-cream-warm text-terracotta"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    )}

                    <h3 className="font-display text-xl font-bold text-espresso">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink/50">
                      {tier.description}
                    </p>

                    <div className="mt-6">
                      {price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="font-mono text-4xl font-bold text-espresso">
                            ₹{price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-sm text-ink/40">/mo</span>
                        </div>
                      ) : (
                        <p className="font-display text-2xl font-bold text-espresso">
                          Custom
                        </p>
                      )}
                      {annual && price !== null && price > 0 && (
                        <p className="mt-1 text-xs text-ink/40">
                          billed annually
                        </p>
                      )}
                    </div>

                    <Link
                      href={tier.ctaHref}
                      className={`mt-6 block rounded-button px-6 py-3 text-center text-sm font-semibold transition-colors ${
                        tier.highlighted
                          ? "bg-terracotta text-white hover:bg-terracotta-dark"
                          : "border border-espresso/15 bg-cream text-espresso hover:bg-cream-warm"
                      }`}
                    >
                      {tier.ctaLabel}
                    </Link>

                    <ul className="mt-6 flex-1 space-y-3 border-t border-espresso/5 pt-6">
                      {tier.features.map((f, i) => (
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
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* What's always free */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              What's always free
            </h2>
            <p className="mt-3 text-base text-ink/50">
              These features are included on every plan, forever.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {alwaysFree.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-espresso/5 bg-white px-5 py-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-leaf"
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
                  <span className="text-sm text-ink/70">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Cost calculator */}
      <section className="bg-cream-warm px-6 py-16 md:py-24">
        <CostCalculator />
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              Pricing questions
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion items={pricingFaqs} />
          </FadeUp>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-terracotta px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Start billing for free today.
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
