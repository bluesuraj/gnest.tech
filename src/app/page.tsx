import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { faqs } from "@/content/home";
import Hero from "@/components/sections/home/Hero";
import SocialProof from "@/components/sections/home/SocialProof";
import FeatureDeepDive from "@/components/sections/home/FeatureDeepDive";
import BusinessTypes from "@/components/sections/home/BusinessTypes";
import WhySwitch from "@/components/sections/home/WhySwitch";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import FinalCta from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: `${BRAND} — Free POS for Indian Cafes`,
  description:
    "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes — no new hardware to buy.",
};

/* FAQPage JSON-LD schema */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* SoftwareApplication JSON-LD schema */
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: BRAND,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free POS and billing software for Indian cafes. GST-ready, works offline, runs on any Android phone.",
};

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Social proof bar */}
      <SocialProof />

      {/* Receipt edge divider */}
      <div className="receipt-edge h-3 w-full" />

      {/* 3. Feature deep-dive */}
      <FeatureDeepDive />

      {/* 4. Built for your business */}
      <BusinessTypes />

      {/* 5. Why cafes switch */}
      <WhySwitch />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* Receipt edge divider */}
      <div className="receipt-edge h-3 w-full" />

      {/* 7. FAQ */}
      <FAQ />

      {/* 8. Final CTA band */}
      <FinalCta />
    </>
  );
}
