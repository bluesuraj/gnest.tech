import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Help",
  description: `Get help with ${BRAND}. Browse guides or message us on WhatsApp for instant support.`,
  openGraph: {
    title: `Help | ${BRAND}`,
    description: "Get help or message us on WhatsApp for instant support.",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
