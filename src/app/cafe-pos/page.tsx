import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/brand";
import {
  cafeHero,
  cafeFeatures,
  pilotProgram,
  cafeTestimonial,
  cafeFaqs,
} from "@/content/cafe";
import LazyTimeline from "@/components/sections/cafe/LazyTimeline";
import CafeFeatureGrid from "@/components/sections/cafe/CafeFeatureGrid";
import PilotForm from "@/components/sections/cafe/PilotForm";
import CafeFaq from "@/components/sections/cafe/CafeFaq";

export const metadata: Metadata = {
  title: "Cafe POS — Billing Software for Indian Cafes",
  description:
    "The POS made for Indian cafes. Counter billing, KOT, UPI, GST — works on any Android phone. Free to start.",
  openGraph: {
    title: `Cafe POS | ${BRAND}`,
    description:
      "The POS made for Indian cafes. Counter billing, KOT, UPI, GST — works on any Android phone.",
  },
};

const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${BRAND} Cafe POS`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free cafe billing software with KOT, UPI, GST invoicing, and offline mode for Indian cafes.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cafeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CafePosPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-12 md:pb-24 md:pt-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,111,61,0.1), transparent)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
            {cafeHero.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-espresso md:text-5xl lg:text-6xl">
            {cafeHero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {cafeHero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-button bg-terracotta px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-terracotta-dark"
            >
              {cafeHero.ctaPrimary}
            </Link>
            <a
              href="#pilot"
              className="rounded-button border border-espresso/20 px-8 py-3.5 text-base font-semibold text-espresso transition-colors hover:bg-espresso/5"
            >
              {cafeHero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Morning timeline — GSAP horizontal scroll */}
      <LazyTimeline />

      {/* 3. Cafe-specific features grid */}
      <CafeFeatureGrid />

      {/* 4. Pilot program invite */}
      <PilotForm />

      {/* 5. Testimonial spotlight */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <svg
            className="mx-auto mb-6 h-10 w-10 text-terracotta/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
          </svg>
          <blockquote className="text-xl font-medium leading-relaxed text-espresso md:text-2xl">
            &ldquo;{cafeTestimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-espresso">
              {cafeTestimonial.name}
            </p>
            <p className="text-sm text-ink/50">
              {cafeTestimonial.role}, {cafeTestimonial.cafe} —{" "}
              {cafeTestimonial.location}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <CafeFaq />

      {/* CTA band */}
      <section className="bg-terracotta px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Your cafe deserves better billing.
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
