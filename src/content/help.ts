/* ── Help page content ─────────────────────────────────────── */

export const helpHero = {
  heading: "How can we help?",
  sub: "Search for answers or browse by category below.",
};

export type HelpCategory = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export const helpCategories: HelpCategory[] = [
  {
    title: "Getting started",
    description: "Download, setup, first bill — step by step.",
    icon: "rocket",
    href: "/help#getting-started",
  },
  {
    title: "Billing",
    description: "Orders, KOT, receipts, and offline mode.",
    icon: "receipt",
    href: "/help#billing",
  },
  {
    title: "GST & invoices",
    description: "GSTIN, HSN codes, tax reports, and exports.",
    icon: "file-text",
    href: "/help#gst",
  },
  {
    title: "Printers",
    description: "Connecting, troubleshooting, and recommended models.",
    icon: "printer",
    href: "/help#printers",
  },
  {
    title: "Account",
    description: "Profile, plans, billing, and team members.",
    icon: "user",
    href: "/help#account",
  },
];

export const whatsappSupport = {
  heading: "Message us, get a reply in minutes",
  sub: "Our team is on WhatsApp, Monday to Saturday, 9 AM — 9 PM IST. Real humans, not bots.",
  hours: "Mon–Sat, 9 AM — 9 PM IST",
};
