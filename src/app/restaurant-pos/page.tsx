import type { Metadata } from "next";
import { restaurantPage } from "@/content/coming-soon";
import ComingSoonTemplate from "@/components/sections/ComingSoonTemplate";

export const metadata: Metadata = {
  title: "Restaurant POS — Coming Soon",
  description:
    "Restaurant POS with table management, KDS, and split bills. Coming soon.",
};

export default function RestaurantPosPage() {
  return <ComingSoonTemplate page={restaurantPage} />;
}
