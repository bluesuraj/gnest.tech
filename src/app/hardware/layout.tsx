import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Hardware",
  description: `Bring the device you already own. ${BRAND} works on any Android phone — no proprietary hardware needed.`,
  openGraph: {
    title: `Hardware | ${BRAND}`,
    description: "Bring the device you already own. No proprietary hardware needed.",
  },
};

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
