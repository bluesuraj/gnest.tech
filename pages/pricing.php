<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/pricing.php';
require_once __DIR__ . '/../includes/accordion.php';
require_once __DIR__ . '/../includes/cta-band.php';
$currentPage = 'pricing';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($pricingHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($pricingHero['sub']) ?></p>
    </div>
  </section>

  <!-- Pricing tiers -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-5xl">
      <div class="stagger-grid grid gap-6 md:grid-cols-3">
        <?php foreach ($tiers as $tier): ?>
          <div class="stagger-item tilt-card rounded-card border <?= $tier['highlighted'] ? 'border-terracotta shadow-lg' : 'border-espresso/10' ?> bg-cream p-6 relative">
            <?php if (isset($tier['badge'])): ?>
              <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"><?= $tier['badge'] ?></span>
            <?php endif; ?>
            <h3 class="font-display text-xl font-bold text-espresso"><?= $tier['name'] ?></h3>
            <p class="mt-1 text-sm text-espresso/60"><?= htmlspecialchars($tier['description']) ?></p>
            <div class="mt-4">
              <?php if ($tier['monthlyPrice'] !== null): ?>
                <p class="price-monthly text-3xl font-bold text-espresso"><?= number_format($tier['monthlyPrice']) ?><span class="text-base font-normal text-espresso/40">/mo</span></p>
                <p class="price-annual text-3xl font-bold text-espresso" style="display:none"><?= number_format($tier['annualPrice']) ?><span class="text-base font-normal text-espresso/40">/mo</span></p>
              <?php else: ?>
                <p class="text-3xl font-bold text-espresso">Custom</p>
              <?php endif; ?>
            </div>
            <a href="<?= !empty($tier['external']) ? $tier['ctaHref'] : url($tier['ctaHref']) ?>" <?= !empty($tier['external']) ? 'target="_blank" rel="noopener noreferrer" data-whatsapp-link' : '' ?> class="mt-6 block rounded-button py-3 text-center text-sm font-semibold transition-colors <?= $tier['highlighted'] ? 'bg-terracotta text-white hover:bg-terracotta-dark' : 'border border-espresso/20 text-espresso hover:bg-espresso/5' ?>"><?= $tier['ctaLabel'] ?></a>
            <ul class="mt-6 space-y-2">
              <?php foreach ($tier['features'] as $feat): ?>
                <li class="flex items-start gap-2 text-sm text-espresso/70">
                  <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <?= htmlspecialchars($feat) ?>
                </li>
              <?php endforeach; ?>
            </ul>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Always free -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <h2 class="fade-up mb-8 text-center font-display text-3xl font-bold text-espresso">Always free. Always.</h2>
      <div class="fade-up space-y-3" data-delay="0.1">
        <?php foreach ($alwaysFree as $item): ?>
          <div class="flex items-start gap-3 rounded-card bg-white p-4">
            <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span class="text-sm text-espresso/70"><?= htmlspecialchars($item) ?></span>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Pricing FAQ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <h2 class="fade-up mb-8 text-center font-display text-3xl font-bold text-espresso">Pricing FAQ</h2>
      <?php render_accordion($pricingFaqs); ?>
    </div>
  </section>

  <?php render_cta_band('Start free today. Upgrade when you\'re ready.'); ?>
</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
?>
<script src="<?= url('/js/pricing.js') ?>"></script>
<?php require_once __DIR__ . '/../includes/end.php'; ?>
