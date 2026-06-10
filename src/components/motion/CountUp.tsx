"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";

type CountUpProps = {
  /** Target number to count up to */
  to: number;
  /** Starting number (default 0) */
  from?: number;
  /** Duration-like spring config */
  springConfig?: SpringOptions;
  /** Format the number (e.g. add commas, prefix, suffix) */
  formatter?: (value: number) => string;
  className?: string;
};

const defaultFormatter = (value: number) =>
  Math.round(value).toLocaleString("en-IN");

export default function CountUp({
  to,
  from = 0,
  springConfig = { damping: 40, stiffness: 100 },
  formatter = defaultFormatter,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, springConfig);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatter(latest);
      }
    });
    return unsubscribe;
  }, [spring, formatter]);

  return (
    <span ref={ref} className={className}>
      {formatter(from)}
    </span>
  );
}
