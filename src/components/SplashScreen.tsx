"use client";
import logo from "@/images/Logo.png";

import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "entering" | "holding" | "fadeout" | "done";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("entering");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("holding"), 900); // scale done
    const t2 = setTimeout(() => setPhase("fadeout"), 1800); // start exit
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 2500); // removed from DOM

    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Warm dark — matches your espresso/terracotta palette
        background: "#100D0A",
        opacity: phase === "fadeout" ? 0 : 1,
        transition:
          phase === "fadeout"
            ? "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        pointerEvents: phase === "fadeout" ? "none" : "all",
      }}
    >
      {/* Pulse ring — shows during "holding" phase */}
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          border: "1.5px solid rgba(201, 111, 61, 0.4)",
          animation:
            phase === "holding" || phase === "fadeout"
              ? "ringPulse 1.2s cubic-bezier(0.2, 0, 0.8, 1) forwards"
              : "none",
        }}
      />

      {/* Second ring — staggered */}
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          border: "1px solid rgba(201, 111, 61, 0.2)",
          animation:
            phase === "holding" || phase === "fadeout"
              ? "ringPulse 1.2s 0.25s cubic-bezier(0.2, 0, 0.8, 1) forwards"
              : "none",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "relative",
          animation: "logoEntrance 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <Image
          src={logo}
          alt="GNest"
          width={110}
          height={110}
          priority
          style={{ display: "block" }}
        />
      </div>

      <style>{`
        @keyframes logoEntrance {
          0% {
            transform: scale(0.2) translateY(8px);
            opacity: 0;
            filter: blur(12px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          75% {
            transform: scale(1.06) translateY(-2px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.85);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
