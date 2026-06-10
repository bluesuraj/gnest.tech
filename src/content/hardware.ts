/* ── Hardware page content ─────────────────────────────────── */

export const hardwareHero = {
  heading: "Bring the device you already own",
  sub: "No proprietary tablets. No hardware leases. Your Android phone is the POS. Add a Bluetooth printer when you're ready.",
};

export type DeviceCard = {
  name: string;
  description: string;
  icon: string;
  compatible: string[];
};

export const devices: DeviceCard[] = [
  {
    name: "Android phone",
    description: "Any phone running Android 8+ works. Your daily phone or a dedicated counter device.",
    icon: "phone",
    compatible: [
      "Samsung Galaxy A series",
      "Redmi Note series",
      "Realme Narzo series",
      "OnePlus Nord series",
      "Any Android 8+ phone",
    ],
  },
  {
    name: "Android tablet",
    description: "Bigger screen for a dedicated counter setup. Perfect for dine-in cafes.",
    icon: "tablet",
    compatible: [
      "Samsung Galaxy Tab A",
      "Lenovo Tab M10",
      "Realme Pad",
      "Any Android 8+ tablet",
    ],
  },
  {
    name: "iPad",
    description: "iOS support coming soon. Register for early access.",
    icon: "tablet",
    compatible: ["iPad (iOS support coming soon)"],
  },
  {
    name: "Bluetooth thermal printer",
    description: "58mm or 80mm receipt printers. Most Bluetooth models on Amazon work out of the box.",
    icon: "printer",
    compatible: [
      "58mm Bluetooth printers",
      "80mm Bluetooth printers",
      "Epson TM series (Bluetooth)",
      "Generic ESC/POS printers",
    ],
  },
  {
    name: "Barcode scanner",
    description: "Optional. Handy for packaged goods or inventory check-in.",
    icon: "scanner",
    compatible: [
      "Any Bluetooth barcode scanner",
      "USB barcode scanners (with OTG)",
    ],
  },
  {
    name: "Cash drawer",
    description: "Optional. Connects via the thermal printer's kick port.",
    icon: "drawer",
    compatible: [
      "Any RJ11 cash drawer",
      "Connects via printer kick port",
    ],
  },
];

export const starterSetup = {
  heading: "Recommended starter setup",
  sub: "Everything you need to start billing, under ₹5,000.",
  items: [
    { name: "Your Android phone", price: "Already own" },
    { name: "58mm Bluetooth thermal printer", price: "₹2,000–3,000" },
    { name: "Printer paper rolls (pack of 10)", price: "₹200–300" },
  ],
  total: "Under ₹3,500 total",
};
