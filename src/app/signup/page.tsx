import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your free account and start billing today.",
};

export default function SignupPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-sm text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-espresso">
          Start free with {BRAND}
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          This page will redirect to the app once launched.
        </p>

        <div className="mt-8 rounded-card border border-dashed border-espresso/15 bg-white p-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/10">
            <svg
              className="h-7 w-7 text-terracotta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-espresso/50">
            Sign up coming soon
          </p>
          <p className="mt-2 text-xs text-ink/40">
            Meanwhile, join the{" "}
            <Link
              href="/cafe-pos#pilot"
              className="font-semibold text-terracotta"
            >
              pilot program
            </Link>{" "}
            to get early access.
          </p>
        </div>

        <p className="mt-6 text-xs text-ink/40">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-terracotta">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
