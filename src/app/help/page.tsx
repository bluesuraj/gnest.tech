"use client";

import { FadeUp, StaggerGrid } from "@/components/motion";
import { WHATSAPP_NUMBER } from "@/lib/brand";
import { helpHero, helpCategories, whatsappSupport } from "@/content/help";

const iconMap: Record<string, React.ReactNode> = {
  rocket: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  receipt: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  "file-text": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  printer: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.1 48.1 0 0110.5 0m-10.5 0V6.169c0-1.242.82-2.339 2.01-2.605a48.68 48.68 0 016.48 0 2.64 2.64 0 012.01 2.605V7.034" />
    </svg>
  ),
  user: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
};

export default function HelpPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with my POS setup.")}`;

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-12 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl">
            {helpHero.heading}
          </h1>
          <p className="mt-4 text-lg text-ink/60">{helpHero.sub}</p>

          {/* Search bar (visual only for now) */}
          <div className="mt-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full rounded-xl border border-espresso/10 bg-white py-3.5 pl-12 pr-4 text-base text-ink shadow-sm placeholder:text-ink/30 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((cat) => (
              <StaggerGrid.Item key={cat.title}>
                <a
                  href={cat.href}
                  className="group block rounded-card border border-espresso/8 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-transform group-hover:-translate-y-0.5">
                    {iconMap[cat.icon]}
                  </span>
                  <h3 className="font-display text-lg font-bold text-espresso">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/50">{cat.description}</p>
                </a>
              </StaggerGrid.Item>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* WhatsApp support block */}
      <section className="bg-espresso px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20">
              <svg
                className="h-8 w-8 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-cream md:text-4xl">
              {whatsappSupport.heading}
            </h2>
            <p className="mt-4 text-base text-cream/60">
              {whatsappSupport.sub}
            </p>
            <p className="mt-2 font-mono text-sm text-cream/40">
              {whatsappSupport.hours}
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-button bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#20bd5a]"
            >
              Message us on WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
