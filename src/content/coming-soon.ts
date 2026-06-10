/* ── Coming-soon page content ──────────────────────────────── */

export type ComingSoonPage = {
  eyebrow: string;
  heading: string;
  sub: string;
  plannedFeatures: { title: string; description: string }[];
};

export const restaurantPage: ComingSoonPage = {
  eyebrow: "Restaurant POS",
  heading: "Restaurant POS — coming soon",
  sub: "Table management, kitchen display system, split bills, and multi-floor layouts. Built for the way Indian restaurants work.",
  plannedFeatures: [
    {
      title: "Kitchen Display System",
      description:
        "Real-time order display for the kitchen. No more lost KOTs or miscommunication.",
    },
    {
      title: "Table management",
      description:
        "Visual floor plan, table status, merge/split tables, and waitlist.",
    },
    {
      title: "Multi-floor support",
      description:
        "Manage ground floor, terrace, and private dining from one dashboard.",
    },
  ],
};

export const guesthousePage: ComingSoonPage = {
  eyebrow: "Guest House POS",
  heading: "Guest house billing — coming soon",
  sub: "Room-folio billing, check-in/out, housekeeping queues, and mini-bar tracking. Designed for small hotels and guest houses.",
  plannedFeatures: [
    {
      title: "Room-folio billing",
      description:
        "Track charges per room — restaurant, laundry, mini-bar — and settle on checkout.",
    },
    {
      title: "Check-in / check-out",
      description:
        "Digital guest registration, ID capture, and automated billing on checkout.",
    },
    {
      title: "Housekeeping queues",
      description:
        "Room status tracking and housekeeping task assignment in real time.",
    },
  ],
};
