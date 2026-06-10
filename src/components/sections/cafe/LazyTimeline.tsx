"use client";

import dynamic from "next/dynamic";

const HorizontalTimeline = dynamic(
  () => import("@/components/sections/cafe/HorizontalTimeline"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-espresso">
        <div className="text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-pulse rounded-lg bg-terracotta/20" />
          <p className="text-sm text-cream/30">Loading timeline...</p>
        </div>
      </div>
    ),
  }
);

export default function LazyTimeline() {
  return <HorizontalTimeline />;
}
