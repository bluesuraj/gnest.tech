import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: `One flat price. Every feature. No per-bill cuts. See ${BRAND} pricing plans — free plan included.`,
  openGraph: {
    title: `Pricing | ${BRAND}`,
    description: "One flat price. Every feature. No per-bill cuts.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
