import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/brand";

export const runtime = "edge";

export const alt = `${BRAND} — Free POS for Indian Cafes`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF6EF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#C96F3D",
          }}
        />

        {/* Brand */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#2B1D16",
            letterSpacing: "-2px",
          }}
        >
          {BRAND}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#1A1A1A",
            opacity: 0.7,
            marginTop: 16,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          The free POS your cafe can start billing with today
        </div>

        {/* Trust strip */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            fontSize: 20,
            color: "#3E7C59",
            fontWeight: 600,
          }}
        >
          <span>GST invoices</span>
          <span>Works offline</span>
          <span>Free to start</span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#1A1A1A",
            opacity: 0.3,
          }}
        >
          gnest.tech
        </div>
      </div>
    ),
    { ...size }
  );
}
