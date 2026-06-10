import type { Metadata } from "next";
import { guesthousePage } from "@/content/coming-soon";
import ComingSoonTemplate from "@/components/sections/ComingSoonTemplate";

export const metadata: Metadata = {
  title: "Guest House POS — Coming Soon",
  description:
    "Guest house billing with room folios, check-in/out, and housekeeping. Coming soon.",
};

export default function GuesthousePosPage() {
  return <ComingSoonTemplate page={guesthousePage} />;
}
