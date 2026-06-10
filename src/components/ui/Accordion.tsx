"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-espresso/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-semibold text-espresso md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-warm text-espresso"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-ink/70 md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type AccordionProps = {
  items: { question: string; answer: string }[];
  className?: string;
};

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
