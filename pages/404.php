<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = '404';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <section class="flex min-h-[calc(100vh-var(--nav-height)-200px)] items-center justify-center bg-cream px-6 py-16">
    <div class="fade-up text-center">
      <p class="font-display text-[120px] font-bold leading-none tracking-tight text-espresso/10 sm:text-[180px]">404</p>
      <h1 class="mt-4 font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Page not found</h1>
      <p class="mt-4 text-lg text-espresso/60">The page you are looking for does not exist or has been moved.</p>
      <a href="<?= url('/') ?>" class="mt-8 inline-block rounded-button bg-terracotta px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark">Back to home</a>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
