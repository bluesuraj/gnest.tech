"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type Screen = {
  id: string;
  /** Path to the screenshot image */
  src: string;
  alt: string;
};

type ScrubScreensProps = {
  /** Array of screens to cycle through */
  screens: Screen[];
  /** Content sections that correspond to each screen (rendered beside the phone) */
  children: React.ReactNode[];
  className?: string;
};

/**
 * Phone mockup pinned in place while content sections scroll past.
 * The phone screen image swaps as each section enters.
 */
export default function ScrubScreens({
  screens,
  children,
  className,
}: ScrubScreensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const phone = phoneRef.current;
    if (!container || !phone) return;

    const sections = container.querySelectorAll<HTMLElement>("[data-scrub-section]");

    // Pin the phone column
    const pinTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top 80px",
      end: "bottom bottom",
      pin: phone,
      pinSpacing: false,
    });

    // Create a trigger for each section
    const sectionTriggers = Array.from(sections).map((section, i) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      })
    );

    return () => {
      pinTrigger.kill();
      sectionTriggers.forEach((t) => t.kill());
    };
  }, [screens.length]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Phone mockup — pinned on desktop */}
        <div
          ref={phoneRef}
          className="flex items-start justify-center lg:sticky lg:top-20"
        >
          <div className="relative mx-auto w-[260px] overflow-hidden rounded-[2rem] border-4 border-espresso/20 bg-ink shadow-2xl sm:w-[280px]">
            {/* Status bar accent */}
            <div className="h-6 w-full bg-ink" />
            {/* Screen area */}
            <div className="relative aspect-[9/16] w-full bg-white">
              {screens.map((screen, i) => (
                <div
                  key={screen.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              ))}
              {/* Fallback if no screens */}
              {screens.length === 0 && (
                <div className="flex h-full items-center justify-center text-sm text-ink/30">
                  App screenshot
                </div>
              )}
            </div>
            {/* Home indicator */}
            <div className="flex h-8 items-center justify-center bg-ink">
              <div className="h-1 w-24 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-0">
          {Array.isArray(children) &&
            children.map((child, i) => (
              <div
                key={i}
                data-scrub-section
                className={`min-h-[50vh] py-12 transition-opacity duration-300 lg:py-20 ${
                  i === activeIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                {child}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
