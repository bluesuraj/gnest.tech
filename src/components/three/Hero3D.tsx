"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CarouselCard from "./CarouselCard";

const CARDS = [
  { id: 0, label: "Dashboard" },
  { id: 1, label: "Speed Checkout" },
  { id: 2, label: "Smart Inventory" },
  { id: 3, label: "Offline Mode" },
  { id: 4, label: "Growth Tracker" },
];

const TOTAL = CARDS.length;

function getPos(cardIndex: number, front: number) {
  return (((cardIndex - front) % TOTAL) + TOTAL) % TOTAL;
}

export default function Hero3D() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + TOTAL) % TOTAL),
    [],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hovered) next();
    }, 3800);
  }, [hovered, next]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!hovered) next();
    }, 3800);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, next]);

  const handleArrow = (dir: "next" | "prev") => {
    dir === "next" ? next() : prev();
    resetTimer();
  };

  const handleDot = (i: number) => {
    setCurrent(i);
    resetTimer();
  };

  const handleCardClick = (i: number, pos: number) => {
    if (pos !== 0) {
      setCurrent(i);
      resetTimer();
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* Scene */}
      <div
        className="relative w-full max-w-[320px]"
        style={{ perspective: "1100px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) {
            dx < 0 ? next() : prev();
            resetTimer();
          }
        }}
      >
        {/* Stage */}
        <div
          className="relative h-[460px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => {
            const pos = getPos(i, current);
            return (
              <CarouselCard
                key={card.id}
                cardIndex={i}
                pos={pos}
                label={card.label}
                onClick={() => handleCardClick(i, pos)}
              />
            );
          })}
        </div>

        {/* Arrows */}
        <button
          onClick={() => handleArrow("prev")}
          aria-label="Previous"
          className="carousel-arrow absolute left-[-14px] top-1/2 z-20 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-espresso/20 bg-white text-espresso/60 transition-colors hover:border-espresso/40 hover:text-espresso"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <button
          onClick={() => handleArrow("next")}
          aria-label="Next"
          className="carousel-arrow absolute right-[-14px] top-1/2 z-20 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-espresso/20 bg-white text-espresso/60 transition-colors hover:border-espresso/40 hover:text-espresso"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center gap-1.5">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to card ${i + 1}`}
            className={`h-1.5 rounded-full border-none transition-all duration-300 ${
              i === current ? "w-5 bg-terracotta" : "w-1.5 bg-espresso/20"
            }`}
          />
        ))}
      </div>

      <p className="mt-2.5 text-center text-[11px] text-espresso/30">
        Swipe or use arrows to explore
      </p>
    </div>
  );
}
