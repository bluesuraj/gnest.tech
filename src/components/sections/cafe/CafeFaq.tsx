"use client";

import { FadeUp } from "@/components/motion";
import Accordion from "@/components/ui/Accordion";
import { cafeFaqs } from "@/content/cafe";

export default function CafeFaq() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Questions about the cafe POS
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Accordion items={cafeFaqs} />
        </FadeUp>
      </div>
    </section>
  );
}
