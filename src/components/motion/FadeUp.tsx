"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeUpProps = HTMLMotionProps<"div"> & {
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of the animation (seconds) */
  duration?: number;
  /** Vertical offset to animate from (px) */
  y?: number;
};

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  y = 24,
  className,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
