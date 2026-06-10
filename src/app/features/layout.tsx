import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Features",
  description: `Everything a cafe needs. Nothing it doesn't. Explore all ${BRAND} features — billing, inventory, reports, staff, and more.`,
  openGraph: {
    title: `Features | ${BRAND}`,
    description: "Everything a cafe needs. Nothing it doesn't.",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
