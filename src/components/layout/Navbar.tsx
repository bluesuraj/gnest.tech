"use client";
import Image from "next/image";
import logo from "@/images/Logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import * as Icons from "lucide-react";

import { mainNav, type NavItem } from "@/content/navigation";

function NavIcon({ name, className }: { name?: string; className?: string }) {
  if (!name) return null;

  // Check if the string name actually exists as a exported key in lucide-react
  if (!(name in Icons)) {
    console.warn(`Icon "${name}" does not exist in lucide-react`);
    return null;
  }

  // Safely index the object using the typed key
  const Icon = Icons[name as keyof typeof Icons] as Icons.LucideIcon;

  return <Icon className={className} strokeWidth={1.8} />;
}

/**
 * Desktop nav chip: icon on top, label below, with a circle that
 * expands from the center on hover/focus, covering both icon and label.
 */
function NavChip({
  item,
  active,
  onOpenChildren,
}: {
  item: NavItem;
  active: boolean;
  onOpenChildren?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isOn = hovered || active;

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onOpenChildren}
      className="relative flex flex-col items-center gap-1 rounded-card px-4 py-2 text-ink/70"
    >
      {/* expanding circle */}
      <motion.span
        className="absolute left-1/2 top-1/2 -z-0 rounded-full bg-terracotta"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={false}
        animate={
          isOn
            ? { width: 90, height: 90, opacity: 1 }
            : { width: 8, height: 8, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />

      <motion.span
        className="relative z-10"
        animate={
          isOn
            ? { y: -2, color: "#FFFFFF" }
            : { y: 0, color: "var(--color-ink, #2c2c2a)" }
        }
        transition={{ duration: 0.25 }}
      >
        <NavIcon name={item.icon} className="h-5 w-5" />
      </motion.span>

      <motion.span
        className="relative z-10 text-xs font-medium"
        animate={
          isOn ? { color: "#FFFFFF" } : { color: "var(--color-ink, #2c2c2a)" }
        }
        transition={{ duration: 0.25 }}
      >
        {item.label}
      </motion.span>

      {item.children && (
        <svg
          className={`relative z-10 h-3 w-3 transition-transform ${hovered ? "rotate-180" : ""}`}
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
      )}
    </button>
  );
}

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
      <div className="rounded-card overflow-hidden border border-cream-warm bg-white shadow-lg">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-sm text-ink transition-colors hover:bg-cream"
          >
            <NavIcon name={item.icon} className="h-4 w-4 text-terracotta" />
            <span className="flex-1">{item.label}</span>
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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
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
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-espresso/50">
                    <NavIcon name={item.icon} className="h-3.5 w-3.5" />
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
                        <NavIcon name={child.icon} className="h-4 w-4" />
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
                  className="flex items-center gap-2 py-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
                >
                  <NavIcon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </Link>
              ),
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
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

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
        scrolled ? "bg-white/80 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? "px-4 py-2" : "px-6 py-4"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Brand Logo"
            width={35}
            height={30}
            className="w-10 h-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavChip item={item} active={false} />
                <DropdownMenu items={item.children} />
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                <NavChip item={item} active={false} />
              </Link>
            ),
          )}
        </nav>

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
