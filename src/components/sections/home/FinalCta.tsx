"use client";

import Link from "next/link";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/brand";
import { finalCta } from "@/content/home";

export default function FinalCta() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-terracotta px-6 py-20 md:py-28">
      {/* Subtle receipt-paper texture drift */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 20px, #fff 20px, #fff 21px)",
          animation: "drift 20s linear infinite",
        }}
      />

      <style jsx>{`
        @keyframes drift {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 100px;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {finalCta.heading}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-button bg-white px-8 py-3.5 text-base font-semibold text-terracotta shadow-md transition-colors hover:bg-cream"
          >
            {finalCta.ctaPrimary}
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-button border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {finalCta.ctaWhatsApp}
          </a>
        </div>
      </div>
    </section>
  );
}
