import { BRAND } from "@/lib/brand";

/* ── About page content ───────────────────────────────────── */

export const aboutHero = {
  heading: "Built in Delhi, for the chai-and-croissant economy",
  sub: `${BRAND} started with a simple question: why does a 10-table cafe need to spend ₹20,000 on billing software? We're building the POS that Indian cafes actually deserve — affordable, offline-first, and human-supported.`,
};

export const mission = {
  heading: "Our mission",
  body: "Make modern point-of-sale technology accessible to every small food business in India. No hardware lock-in, no enterprise pricing, no jargon.",
};

export const values = [
  {
    title: "Offline first",
    description:
      "Internet is unreliable in most Indian cafes. Everything we build works without it.",
  },
  {
    title: "Radically simple",
    description:
      "If a cafe owner can't figure it out in 10 minutes, we haven't built it right.",
  },
  {
    title: "Transparent pricing",
    description:
      "One flat price, published on the website. No hidden fees, no 'contact sales' nonsense.",
  },
  {
    title: "Human support",
    description:
      "Real people on WhatsApp, in Hindi and English. Not a chatbot, not a ticket system.",
  },
  {
    title: "BYOD",
    description:
      "Bring your own device. We'll never lock you into proprietary hardware.",
  },
  {
    title: "Built for India",
    description:
      "GST-first, UPI-native, optimised for mid-range Android phones and unstable connections.",
  },
];

export type RoadmapPhase = {
  label: string;
  description: string;
  status: "done" | "current" | "upcoming";
};

export const roadmap: RoadmapPhase[] = [
  {
    label: "Cafe POS",
    description: "Counter billing, KOT, UPI, GST, offline mode. Live now.",
    status: "current",
  },
  {
    label: "Restaurant POS",
    description: "Table management, KDS, split bills, multi-floor.",
    status: "upcoming",
  },
  {
    label: "Guest House POS",
    description: "Room-folio billing, check-in/out, housekeeping.",
    status: "upcoming",
  },
];
