<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = 'blog';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <section class="flex min-h-[calc(100vh-var(--nav-height)-200px)] items-center justify-center bg-cream px-6 py-16">
    <div class="fade-up text-center">
      <h1 class="font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">Blog</h1>
      <p class="mt-6 text-lg text-espresso/60">Stories, tips, and insights for cafe owners. Coming soon.</p>
      <div class="mt-8 rounded-lg border border-espresso/5 bg-white px-6 py-4 inline-block">
        <p class="text-xs font-semibold uppercase tracking-wider text-espresso/30">Coming soon</p>
      </div>
      <p class="mt-8">
        <a href="<?= url('/') ?>" class="text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark">&larr; Back to home</a>
      </p>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
