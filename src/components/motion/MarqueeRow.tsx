"use client";

type MarqueeRowProps = {
  children: React.ReactNode;
  /** Speed in seconds for one full loop (default 30) */
  speed?: number;
  /** Scroll direction */
  direction?: "left" | "right";
  /** Pause on hover */
  pauseOnHover?: boolean;
  className?: string;
};

export default function MarqueeRow({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeRowProps) {
  const animDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`group overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-6 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: animDirection,
        }}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
