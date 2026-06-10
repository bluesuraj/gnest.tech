import { BRAND } from "@/lib/brand";

/* ── Hero ─────────────────────────────────────────────────── */
export const hero = {
  heading: "The free POS your cafe can start billing with today",
  sub: "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes — no new hardware to buy.",
  ctaPrimary: "Start free",
  ctaSecondary: "See it work — 2 min",
  trustStrip: ["GST invoices", "Works offline", "Free to start"],
};

/* ── Social proof ─────────────────────────────────────────── */
export const socialProof = {
  stats: [
    { label: "Cafes onboarded", value: 120, suffix: "+" },
    { label: "Bills printed", value: 45000, suffix: "+" },
    { label: "Avg. setup time", value: 30, suffix: " min", prefix: "Under " },
  ],
  neighbourhoods: [
    "Hauz Khas",
    "Shahpur Jat",
    "Gurgaon",
    "Koramangala",
    "Indiranagar",
    "Bandra",
    "Connaught Place",
    "Saket",
    "Defence Colony",
    "Vasant Kunj",
  ],
};

/* ── Feature deep-dive ────────────────────────────────────── */
export type FeatureSection = {
  id: string;
  icon: string;
  title: string;
  headline: string;
  bullets: string[];
  link: string;
  screenPlaceholder: string;
};

export const features: FeatureSection[] = [
  {
    id: "billing",
    icon: "receipt",
    title: "Billing",
    headline:
      "Take orders and print GST invoices in seconds — even when the internet drops.",
    bullets: [
      "One-tap billing for counter & table orders",
      "Auto-generate GST-compliant invoices",
      "Works fully offline — syncs when back online",
      "KOT printing to kitchen printers",
    ],
    link: "/features#billing",
    screenPlaceholder: "/screenshots/billing.png",
  },
  {
    id: "payments",
    icon: "credit-card",
    title: "Payments",
    headline:
      "UPI, cards, cash — record every payment the way your customers already pay.",
    bullets: [
      "Accept UPI, cards, and cash from one screen",
      "Split bills between customers",
      "Auto-reconcile daily totals",
      "Print UPI QR code on every receipt",
    ],
    link: "/features#payments",
    screenPlaceholder: "/screenshots/payments.png",
  },
  {
    id: "inventory",
    icon: "package",
    title: "Inventory",
    headline:
      "Know when the milk runs low before the morning rush does.",
    bullets: [
      "Real-time stock tracking by ingredient",
      "Low-stock alerts via WhatsApp",
      "Auto-deduct inventory per order",
      "Supplier purchase orders in-app",
    ],
    link: "/features#inventory",
    screenPlaceholder: "/screenshots/inventory.png",
  },
  {
    id: "reports",
    icon: "bar-chart",
    title: "Reports",
    headline: "Yesterday's sales on your phone before your first chai.",
    bullets: [
      "Daily, weekly, monthly sales dashboards",
      "Best-selling items at a glance",
      "WhatsApp day-end summary",
      "Export to Excel for your CA",
    ],
    link: "/features#reports",
    screenPlaceholder: "/screenshots/reports.png",
  },
  {
    id: "staff",
    icon: "users",
    title: "Staff",
    headline: "PINs for every barista. See who sold what.",
    bullets: [
      "Individual staff PINs for accountability",
      "Role-based access (owner, manager, cashier)",
      "Shift-wise sales tracking",
      "Clock-in / clock-out log",
    ],
    link: "/features#staff",
    screenPlaceholder: "/screenshots/staff.png",
  },
  {
    id: "customers",
    icon: "heart",
    title: "Customers",
    headline: "Remember regulars. Reward repeat visits.",
    bullets: [
      "Auto-save customer details from bills",
      "Visit history and order preferences",
      "Simple loyalty points system",
      "Birthday and anniversary reminders",
    ],
    link: "/features#customers",
    screenPlaceholder: "/screenshots/customers.png",
  },
  {
    id: "multi-outlet",
    icon: "building",
    title: "Multi-outlet",
    headline: "One account, every counter.",
    bullets: [
      "Manage multiple locations from one dashboard",
      "Per-outlet inventory and reports",
      "Centralised menu management",
      "Cross-outlet staff transfers",
    ],
    link: "/features#multi-outlet",
    screenPlaceholder: "/screenshots/multi-outlet.png",
    },
];

/* ── Built for your business ──────────────────────────────── */
export type BusinessType = {
  name: string;
  href: string;
  active: boolean;
  badge?: string;
  description: string;
};

export const businessTypes: BusinessType[] = [
  {
    name: "Cafe",
    href: "/cafe-pos",
    active: true,
    description: "Counter billing, KOT, modifiers, UPI — built for the Indian cafe workflow.",
  },
  {
    name: "Coffee shop",
    href: "/cafe-pos",
    active: true,
    description: "Quick-service billing with customisable drink modifiers and loyalty.",
  },
  {
    name: "Bakery",
    href: "/cafe-pos",
    active: true,
    description: "Weigh-and-bill, box combos, and expiry tracking for fresh goods.",
  },
  {
    name: "Cloud kitchen",
    href: "/cafe-pos",
    active: true,
    description: "Multi-brand menus, aggregator order sync, and real-time KDS.",
  },
  {
    name: "Restaurant",
    href: "/restaurant-pos",
    active: false,
    badge: "Coming soon",
    description: "Table management, KDS, split bills — launching next.",
  },
  {
    name: "Guest house",
    href: "/guesthouse-pos",
    active: false,
    badge: "Coming soon",
    description: "Room-folio billing, check-in/out, and housekeeping queues.",
  },
];

/* ── Why cafes switch ─────────────────────────────────────── */
export const whySwitch = [
  {
    heading: "No hardware lock-in",
    body: "Your phone is the POS. No proprietary tablets, no annual hardware leases. Bring the device you already own.",
  },
  {
    heading: "Flat monthly price",
    body: "No per-feature surprises, no per-transaction cuts. One plan, every feature, predictable cost.",
  },
  {
    heading: "Real humans on WhatsApp",
    body: "Message us in Hindi or English. Get a reply in minutes, not a ticket number. Support that speaks your language.",
  },
];

/* ── Testimonials ─────────────────────────────────────────── */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  cafe: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We went from pen-and-paper to printing GST bills in one afternoon. The setup was shockingly simple.",
    name: "Pilot Cafe Owner",
    role: "Owner",
    cafe: "Cafe name",
    location: "Hauz Khas, Delhi",
  },
  {
    quote:
      "The offline mode saved us during a power cut on a Saturday. Bills kept printing like nothing happened.",
    name: "Pilot Cafe Owner",
    role: "Manager",
    cafe: "Cafe name",
    location: "Koramangala, Bangalore",
  },
  {
    quote:
      "I check yesterday's sales on my phone every morning before I even get to the shop. Game changer.",
    name: "Pilot Cafe Owner",
    role: "Owner",
    cafe: "Cafe name",
    location: "Bandra, Mumbai",
  },
  {
    quote:
      "No monthly surprises. No hidden fees. I know exactly what I'm paying and what I'm getting.",
    name: "Pilot Cafe Owner",
    role: "Owner",
    cafe: "Cafe name",
    location: "Shahpur Jat, Delhi",
  },
  {
    quote:
      "WhatsApp support in Hindi. That alone is worth switching for.",
    name: "Pilot Cafe Owner",
    role: "Owner",
    cafe: "Cafe name",
    location: "Gurgaon, Haryana",
  },
];

/* ── FAQ ──────────────────────────────────────────────────── */
export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "Is it really free?",
    answer: `Yes. The free plan includes single-device billing, GST invoices, and basic reporting — forever. No credit card required, no trial period. Upgrade to Pro only when you need inventory tracking, staff management, or priority support.`,
  },
  {
    question: "Does it work offline?",
    answer:
      "Absolutely. Billing, KOT printing, and payment recording all work without internet. Data syncs automatically when you reconnect. Your cafe never stops billing.",
  },
  {
    question: "Is it GST-compliant?",
    answer: `Every invoice ${BRAND} generates includes your GSTIN, HSN/SAC codes, and tax breakdowns per CBIC guidelines. Export-ready for your chartered accountant.`,
  },
  {
    question: "What hardware do I need?",
    answer:
      "None. Any Android phone or tablet running Android 8+ works. Pair a Bluetooth thermal printer (58mm or 80mm) for receipts — most ₹2,000–3,000 printers on Amazon work. No proprietary hardware required.",
  },
  {
    question: "How fast can I start billing?",
    answer:
      "Most cafes are billing within 30 minutes. Download the app, add your menu items, connect a printer, and you're live. We'll walk you through setup on WhatsApp if you need help.",
  },
];

/* ── Final CTA ────────────────────────────────────────────── */
export const finalCta = {
  heading: "Print your first bill today.",
  ctaPrimary: "Start free",
  ctaWhatsApp: "Chat with us on WhatsApp",
};
