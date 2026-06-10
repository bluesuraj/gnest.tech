"use client";

import { FadeUp, StaggerGrid } from "@/components/motion";
import { cafeFeatures } from "@/content/cafe";

export default function CafeFeatureGrid() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Built for how cafes actually work
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Every feature designed around the Indian cafe workflow.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cafeFeatures.map((feature) => (
            <StaggerGrid.Item key={feature.title}>
              <div className="rounded-card border border-espresso/8 bg-white p-6 transition-shadow hover:shadow-md">
                <h3 className="font-display text-lg font-bold text-espresso">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {feature.description}
                </p>
              </div>
            </StaggerGrid.Item>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
