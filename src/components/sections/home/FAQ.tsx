"use client";

import { FadeUp } from "@/components/motion";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/content/home";

export default function FAQ() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-espresso md:text-4xl">
            Frequently asked questions
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Accordion items={faqs} />
        </FadeUp>
      </div>
    </section>
  );
}
