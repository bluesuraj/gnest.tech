import { BRAND } from "@/lib/brand";

/* ── Hero ─────────────────────────────────────────────────── */
export const pricingHero = {
  heading: "One flat price. Every feature. No per-bill cuts.",
  sub: "Know exactly what you're paying. No hidden fees, no per-transaction charges, no surprises.",
};

/* ── Pricing tiers ────────────────────────────────────────── */
export type PricingTier = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
};

export const tiers: PricingTier[] = [
  {
    name: "Free",
    description: "Everything you need to start billing today.",
    monthlyPrice: 0,
    annualPrice: 0,
    ctaLabel: "Start free",
    ctaHref: "/signup",
    highlighted: false,
    features: [
      "Single device",
      "Unlimited bills",
      "GST invoices",
      "Offline billing",
      "UPI + cash recording",
      "Basic daily reports",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For cafes ready to grow and optimise.",
    monthlyPrice: 799,
    annualPrice: 649,
    ctaLabel: "Start free trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Everything in Free",
      "Up to 5 devices",
      "Inventory tracking",
      "Staff PINs & roles",
      "Advanced reports & exports",
      "Customer loyalty",
      "WhatsApp day-end summary",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "Multi-outlet",
    description: "One dashboard for every location.",
    monthlyPrice: null,
    annualPrice: null,
    ctaLabel: "Talk to us",
    ctaHref: "#",
    highlighted: false,
    badge: "Coming soon",
    features: [
      "Everything in Pro",
      "Unlimited devices",
      "Multi-location dashboard",
      "Centralised menu management",
      "Per-outlet reports",
      "Cross-outlet staff transfers",
      "Dedicated account manager",
    ],
  },
];

/* ── Always free ──────────────────────────────────────────── */
export const alwaysFree = [
  "Unlimited bills — no per-transaction fees, ever",
  "GST-compliant invoices with GSTIN & HSN",
  "Offline billing — works without internet",
  "UPI, cards, and cash payment recording",
  "Basic daily sales reports",
  "Receipt printing via Bluetooth",
  "Android phone or tablet — BYOD",
];

/* ── FAQ ──────────────────────────────────────────────────── */
export const pricingFaqs = [
  {
    question: "Are there any contracts or lock-in periods?",
    answer:
      "No. All plans are month-to-month. Cancel anytime from your account settings. Annual plans are discounted but you can switch to monthly at renewal.",
  },
  {
    question: "Do you charge per transaction or per bill?",
    answer:
      "Never. You pay a flat monthly fee regardless of how many bills you print. Zero per-transaction charges.",
  },
  {
    question: "What hardware do I need to buy?",
    answer:
      "None, if you have an Android phone or tablet. For receipt printing, a Bluetooth thermal printer (₹2,000–3,000) is optional but recommended. No proprietary hardware required.",
  },
  {
    question: "Is GST charged on the subscription?",
    answer: `Yes, 18% GST is added to the subscription price as required by Indian tax law. The prices shown above are before GST. You'll receive a GST invoice from ${BRAND} for your records.`,
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes. Upgrade instantly and the price difference is prorated. Downgrade takes effect at the next billing cycle — you keep Pro features until then.",
  },
];
