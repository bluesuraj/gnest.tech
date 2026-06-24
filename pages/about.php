<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/about.php';
require_once __DIR__ . '/../includes/cta-band.php';
$currentPage = 'about';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($aboutHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($aboutHero['sub']) ?></p>
    </div>
  </section>

  <!-- ═══ MISSION ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <div class="fade-up rounded-card border border-espresso/10 bg-cream p-8 text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-terracotta"><?= htmlspecialchars($mission['heading']) ?></p>
        <p class="font-display text-xl font-bold leading-relaxed text-espresso"><?= htmlspecialchars($mission['body']) ?></p>
      </div>
    </div>
  </section>

  <!-- ═══ VALUES ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">What we believe</h2>
      </div>
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($values as $value): ?>
          <div class="stagger-item tilt-card rounded-card border border-espresso/10 bg-white p-6">
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($value['title']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($value['description']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ ROADMAP ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Roadmap</h2>
      </div>
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 top-0 h-full w-[2px] bg-espresso/10 md:left-1/2 md:-translate-x-[1px]"></div>
        <div class="space-y-12">
          <?php foreach ($roadmap as $i => $milestone): ?>
            <div class="fade-up relative pl-12 md:pl-0 <?= $i % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]' ?>" data-delay="<?= $i * 0.1 ?>">
              <!-- Dot indicator -->
              <div class="absolute left-[10px] top-1 h-3 w-3 rounded-full border-2 <?= ($milestone['status'] ?? '') === 'current' ? 'border-leaf bg-leaf' : 'border-terracotta bg-cream' ?> md:left-1/2 md:-translate-x-1/2"></div>
              <p class="text-xs font-semibold uppercase tracking-wider <?= ($milestone['status'] ?? '') === 'current' ? 'text-leaf' : 'text-terracotta' ?>"><?= htmlspecialchars($milestone['status'] ?? 'upcoming') ?></p>
              <h3 class="mt-1 font-display text-base font-semibold text-espresso"><?= htmlspecialchars($milestone['label']) ?></h3>
              <p class="mt-1 text-sm text-espresso/60"><?= htmlspecialchars($milestone['description']) ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <?php render_cta_band('Join us on the journey.', 'Get started free', 'bg-espresso'); ?>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
