"use client";

import { CountUp, MarqueeRow } from "@/components/motion";
import { socialProof } from "@/content/home";

export default function SocialProof() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Receipt-styled stats card */}
        <div className="overflow-hidden rounded-card border border-espresso/10 bg-white shadow-md">
          {/* Torn receipt top edge */}
          <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#FAF6EF_8px,#FAF6EF_16px)]" />

          <div className="grid grid-cols-1 divide-y divide-dashed divide-espresso/10 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
            {socialProof.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-4 text-center sm:py-0"
              >
                <div className="font-mono text-3xl font-bold text-espresso md:text-4xl">
                  {stat.prefix ?? ""}
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </div>
                <p className="mt-2 text-sm text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Torn receipt bottom edge */}
          <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#FAF6EF_8px,#FAF6EF_16px)]" />
        </div>

        {/* Neighbourhood trust strip */}
        <div className="mt-10">
          <p className="mb-4 text-center text-sm text-ink/40">
            Trusted by cafes in
          </p>
          <MarqueeRow speed={35} className="text-sm font-medium text-ink/50">
            {socialProof.neighbourhoods.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap rounded-full border border-espresso/8 bg-white px-4 py-1.5"
              >
                {name}
              </span>
            ))}
          </MarqueeRow>
        </div>
      </div>
    </section>
  );
}
