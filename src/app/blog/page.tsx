import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights, guides, and tips for cafe owners from the ${BRAND} team.`,
};

export default function BlogPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-espresso md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-ink/60">
          Guides, tips, and insights for Indian cafe owners.
        </p>

        <div className="mt-16 rounded-card border border-dashed border-espresso/15 bg-white p-12">
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <p className="text-lg font-medium text-espresso/50">
            Posts coming soon
          </p>
          <p className="mt-2 text-sm text-ink/40">
            We're working on guides like "GST rules for cafe billing" and
            "Setting up your first POS". Check back soon.
          </p>
        </div>

        <p className="mt-8 text-sm text-ink/40">
          Want to be notified?{" "}
          <Link
            href="/cafe-pos#pilot"
            className="font-semibold text-terracotta"
          >
            Join the pilot program
          </Link>{" "}
          and we'll keep you updated.
        </p>
      </div>
    </section>
  );
}
