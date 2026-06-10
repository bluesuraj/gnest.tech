import Link from "next/link";

export default function BlogPostPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-ink/40">Blog post not found.</p>
        <Link
          href="/blog"
          className="mt-4 inline-flex text-sm font-semibold text-terracotta"
        >
          Back to blog
        </Link>
      </div>
    </section>
  );
}
