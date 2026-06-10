import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-sm text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-espresso">
          Sign in to {BRAND}
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
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-espresso/50">
            Sign in coming soon
          </p>
          <p className="mt-2 text-xs text-ink/40">
            The app is under development. Join the{" "}
            <Link
              href="/cafe-pos#pilot"
              className="font-semibold text-terracotta"
            >
              pilot program
            </Link>{" "}
            for early access.
          </p>
        </div>

        <p className="mt-6 text-xs text-ink/40">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-terracotta">
            Sign up free
          </Link>
        </p>
      </div>
    </section>
  );
}
