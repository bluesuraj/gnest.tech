import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About",
  description: `Built in Delhi, for the chai-and-croissant economy. Learn about ${BRAND}'s mission and team.`,
  openGraph: {
    title: `About | ${BRAND}`,
    description: "Built in Delhi, for the chai-and-croissant economy.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  url: "https://gnest.tech",
  description:
    "Free POS and billing software for Indian cafes. GST-ready, works offline, runs on any Android phone.",
  foundingLocation: {
    "@type": "Place",
    name: "Delhi, India",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      {children}
    </>
  );
}
