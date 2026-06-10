export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-espresso/10 border-t-terracotta" />
        <p className="text-sm text-ink/30">Loading...</p>
      </div>
    </div>
  );
}
