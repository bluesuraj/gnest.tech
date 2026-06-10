"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { mainNav, type NavItem } from "@/content/navigation";

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 min-w-[180px] -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
      <div className="rounded-card overflow-hidden border border-cream-warm bg-white shadow-lg">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-3 text-sm text-ink transition-colors hover:bg-cream"
          >
            {item.label}
            {item.badge && (
              <span className="rounded-full bg-cream-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute inset-x-0 top-full border-b border-cream-warm bg-white/95 backdrop-blur-md lg:hidden"
    >
      <nav className="flex flex-col px-6 py-4">
        {mainNav.map((item) =>
          item.children ? (
            <div key={item.label} className="py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-espresso/50">
                {item.label}
              </span>
              <div className="mt-1 flex flex-col pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="flex items-center gap-2 py-2 text-sm text-ink transition-colors hover:text-terracotta"
                  >
                    {child.label}
                    {child.badge && (
                      <span className="rounded-full bg-cream-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                        {child.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          )
        )}
        <hr className="my-3 border-cream-warm" />
        <Link
          href="/login"
          onClick={onClose}
          className="py-2 text-sm font-medium text-ink"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          onClick={onClose}
          className="mt-2 inline-flex items-center justify-center rounded-button bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
        >
          Start free
        </Link>
      </nav>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? "px-4 py-2" : "px-6 py-4"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-espresso"
        >
          {BRAND}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-cream hover:text-ink">
                  {item.label}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <DropdownMenu items={item.children} />
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-cream hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-button bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark"
          >
            Start free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-cream lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
