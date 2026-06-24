<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = 'login';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <section class="flex min-h-[calc(100vh-var(--nav-height))] items-center justify-center bg-cream px-6 py-16">
    <div class="fade-up w-full max-w-sm">
      <div class="rounded-card border border-espresso/10 bg-white p-8 text-center shadow-sm">
        <!-- Lock icon -->
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10">
          <svg class="h-8 w-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h1 class="font-display text-2xl font-bold text-espresso">Sign in</h1>
        <p class="mt-3 text-sm text-espresso/60">Authentication is coming soon. We are working on making your experience secure and seamless.</p>
        <div class="mt-6 rounded-lg border border-espresso/5 bg-cream/60 px-4 py-3">
          <p class="text-xs font-semibold uppercase tracking-wider text-espresso/30">Coming soon</p>
        </div>
        <p class="mt-6 text-sm text-espresso/50">
          Don't have an account?
          <a href="<?= url('/signup') ?>" class="font-semibold text-terracotta transition-colors hover:text-terracotta-dark">Create one</a>
        </p>
      </div>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
