"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees (default 8) */
  maxTilt?: number;
  /** Perspective value (default 800) */
  perspective?: number;
};

export default function TiltCard({
  children,
  className,
  maxTilt = 8,
  perspective = 800,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), {
    damping: 20,
    stiffness: 200,
  });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
