import { BRAND } from "@/lib/brand";

export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  icon?: string; // lucide-react icon name, e.g. "Sparkles"
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Features", href: "/features", icon: "Sparkles" },
  { label: "Pricing", href: "/pricing", icon: "Tag" },
  {
    label: "Business Types",
    href: "#",
    icon: "Store",
    children: [
      { label: "Cafe", href: "/cafe-pos", icon: "Coffee" },
      {
        label: "Restaurant",
        href: "/restaurant-pos",
        badge: "Soon",
        icon: "UtensilsCrossed",
      },
      {
        label: "Guest House",
        href: "/guesthouse-pos",
        badge: "Soon",
        icon: "BedDouble",
      },
    ],
  },
  { label: "Help", href: "/help", icon: "HelpCircle" },
];

export const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Hardware", href: "/hardware" },
    ],
  },
  {
    title: "Business Types",
    links: [
      { label: "Cafe POS", href: "/cafe-pos" },
      { label: "Restaurant POS", href: "/restaurant-pos" },
      { label: "Guest House POS", href: "/guesthouse-pos" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "API Docs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
