<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/hardware.php';
require_once __DIR__ . '/../includes/cta-band.php';
$currentPage = 'hardware';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($hardwareHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($hardwareHero['sub']) ?></p>
    </div>
  </section>

  <!-- ═══ DEVICE CARDS ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($devices as $device): ?>
          <div class="stagger-item tilt-card rounded-card border border-espresso/10 bg-cream p-6">
            <!-- Device icon placeholder -->
            <div class="mb-4 flex h-32 items-center justify-center rounded-xl border border-espresso/5 bg-white text-4xl">
              <?= $device['icon'] ?>
            </div>
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($device['name']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($device['description']) ?></p>

            <?php if (isset($device['compatible']) && !empty($device['compatible'])): ?>
              <details class="mt-4 group">
                <summary class="flex cursor-pointer items-center gap-2 text-sm font-medium text-terracotta transition-colors hover:text-terracotta-dark">
                  <svg class="h-4 w-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  Compatible devices
                </summary>
                <ul class="mt-2 space-y-1 pl-6">
                  <?php foreach ($device['compatible'] as $item): ?>
                    <li class="text-sm text-espresso/50"><?= htmlspecialchars($item) ?></li>
                  <?php endforeach; ?>
                </ul>
              </details>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ STARTER SETUP (Receipt card) ═══ -->
  <?php if (isset($starterSetup)): ?>
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-md">
      <div class="fade-up rounded-card border border-espresso/10 bg-white p-6 font-mono text-sm shadow-sm">
        <p class="mb-4 text-center text-xs font-bold uppercase tracking-widest text-espresso/40">Starter setup</p>
        <div class="space-y-3">
          <?php foreach ($starterSetup['items'] as $item): ?>
            <div class="flex items-center justify-between border-b border-dashed border-espresso/10 pb-2">
              <span class="text-espresso/60"><?= htmlspecialchars($item['name']) ?></span>
              <span class="font-semibold text-espresso"><?= htmlspecialchars($item['price']) ?></span>
            </div>
          <?php endforeach; ?>
        </div>
        <div class="mt-4 flex items-center justify-between border-t-2 border-espresso/20 pt-3">
          <span class="font-bold text-espresso">Total</span>
          <span class="text-lg font-bold text-terracotta"><?= htmlspecialchars($starterSetup['total']) ?></span>
        </div>
        <?php if (isset($starterSetup['note'])): ?>
          <p class="mt-3 text-center text-[11px] text-espresso/40"><?= htmlspecialchars($starterSetup['note']) ?></p>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <?php endif; ?>

  <!-- ═══ CTA ═══ -->
  <?php render_cta_band('Need help choosing hardware?'); ?>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
