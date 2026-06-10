"use client";

import Link from "next/link";
import { FadeUp, StaggerGrid, TiltCard } from "@/components/motion";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/brand";
import { hardwareHero, devices, starterSetup } from "@/content/hardware";

const iconMap: Record<string, React.ReactNode> = {
  phone: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  tablet: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  printer: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.1 48.1 0 0110.5 0m-10.5 0V6.169c0-1.242.82-2.339 2.01-2.605a48.68 48.68 0 016.48 0 2.64 2.64 0 012.01 2.605V7.034" />
    </svg>
  ),
  scanner: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
    </svg>
  ),
  drawer: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-17.5 0a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25h19.5a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25m-17.5 0V6.999c0-1.076.756-2.003 1.82-2.206a48.193 48.193 0 0115.36 0A2.25 2.25 0 0121.75 7v6.5" />
    </svg>
  ),
};

export default function HardwarePage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {hardwareHero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {hardwareHero.sub}
          </p>
        </div>
      </section>

      {/* Works-with grid */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              Works with
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <StaggerGrid.Item key={device.name}>
                <TiltCard maxTilt={5}>
                  <div className="group rounded-card border border-espresso/8 bg-white p-6 transition-shadow hover:shadow-lg">
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta transition-transform group-hover:-translate-y-1">
                      {iconMap[device.icon]}
                    </span>
                    <h3 className="font-display text-lg font-bold text-espresso">
                      {device.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {device.description}
                    </p>
                    {/* Expandable compatible models */}
                    <details className="mt-4">
                      <summary className="cursor-pointer text-xs font-semibold text-terracotta">
                        Compatible models
                      </summary>
                      <ul className="mt-2 space-y-1 pl-1">
                        {device.compatible.map((model, i) => (
                          <li key={i} className="text-xs text-ink/50">
                            • {model}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </TiltCard>
              </StaggerGrid.Item>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Recommended starter setup */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <FadeUp className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
              {starterSetup.heading}
            </h2>
            <p className="mt-3 text-base text-ink/50">{starterSetup.sub}</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-card border border-espresso/10 bg-cream">
              {/* Receipt styling */}
              <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,white_8px,white_16px)]" />
              <div className="px-8 py-6">
                <p className="mb-4 text-center font-mono text-xs uppercase tracking-wider text-ink/40">
                  --- Starter setup ---
                </p>
                {starterSetup.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-dashed border-espresso/10 py-3 last:border-0"
                  >
                    <span className="font-mono text-sm text-espresso">
                      {item.name}
                    </span>
                    <span className="font-mono text-sm font-semibold text-espresso">
                      {item.price}
                    </span>
                  </div>
                ))}
                <div className="mt-4 flex items-center justify-between border-t-2 border-espresso/20 pt-4">
                  <span className="font-mono text-sm font-bold text-espresso">
                    TOTAL
                  </span>
                  <span className="font-mono text-lg font-bold text-leaf">
                    {starterSetup.total}
                  </span>
                </div>
              </div>
              <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,white_8px,white_16px)]" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-terracotta px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Your phone is the POS.
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
