import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LenisProvider from "@/components/providers/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Cabinet Grotesk / Clash Display are Fontshare fonts — swap in via next/font/local
   once the .woff2 files are added to public/fonts/. Space Grotesk is a close
   Google Fonts stand-in for the scaffold. */
const cabinetGrotesk = Space_Grotesk({
  variable: "--font-cabinet-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://gnest.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND} — Free POS for Indian Cafes`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes — no new hardware to buy.",
  keywords: [
    "cafe POS",
    "cafe billing software",
    "POS India",
    "GST billing",
    "free POS",
    "restaurant billing",
    "offline POS",
    "UPI POS",
    "cafe management",
  ],
  authors: [{ name: BRAND }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: BRAND,
    title: `${BRAND} — Free POS for Indian Cafes`,
    description:
      "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BRAND} — Free POS for Indian Cafes`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Free POS for Indian Cafes`,
    description:
      "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${cabinetGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
