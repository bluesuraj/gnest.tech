<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/cafe.php';
require_once __DIR__ . '/../includes/accordion.php';
require_once __DIR__ . '/../includes/cta-band.php';
require_once __DIR__ . '/../includes/json-ld.php';
$currentPage = 'cafe-pos';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <?php if (isset($cafeHero['eyebrow'])): ?>
        <p class="fade-up mb-4 text-sm font-semibold uppercase tracking-wider text-terracotta"><?= htmlspecialchars($cafeHero['eyebrow']) ?></p>
      <?php endif; ?>
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($cafeHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($cafeHero['sub']) ?></p>
      <div class="fade-up mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" data-delay="0.2">
        <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode(WHATSAPP_MESSAGE) ?>" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="<?= htmlspecialchars(WHATSAPP_MESSAGE) ?>" class="rounded-button bg-terracotta px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark">
          <?= htmlspecialchars($cafeHero['ctaPrimary'] ?? 'Get started') ?>
        </a>
        <a href="#how-it-works" class="rounded-button border border-espresso/20 px-8 py-3.5 text-center text-sm font-semibold text-espresso transition-colors hover:bg-espresso/5">
          <?= htmlspecialchars($cafeHero['ctaSecondary'] ?? 'See how it works') ?>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══ HORIZONTAL TIMELINE ═══ -->
  <section id="how-it-works" class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">How it works</h2>
      </div>
      <div class="fade-up overflow-x-auto pb-4" data-delay="0.1">
        <div class="flex min-w-max gap-6 px-4">
          <?php foreach ($morningTimeline as $i => $step): ?>
            <div class="relative flex w-64 flex-shrink-0 flex-col items-center text-center">
              <!-- Connector line -->
              <?php if ($i < count($morningTimeline) - 1): ?>
                <div class="absolute left-[calc(50%+24px)] top-6 h-[2px] w-[calc(100%-48px+24px)] bg-espresso/10"></div>
              <?php endif; ?>
              <!-- Step circle -->
              <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-terracotta bg-cream text-lg font-bold text-terracotta">
                <?= $i + 1 ?>
              </div>
              <p class="mt-1 text-[10px] font-semibold uppercase tracking-wider text-terracotta"><?= htmlspecialchars($step['time']) ?></p>
              <h3 class="mt-2 font-display text-base font-semibold text-espresso"><?= htmlspecialchars($step['title']) ?></h3>
              <p class="mt-2 text-sm text-espresso/60"><?= htmlspecialchars($step['description']) ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ FEATURE GRID ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Everything your cafe needs</h2>
      </div>
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($cafeFeatures as $feat): ?>
          <div class="stagger-item tilt-card rounded-card border border-espresso/10 bg-white p-6">
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($feat['title']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($feat['description']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIAL ═══ -->
  <?php if (isset($cafeTestimonial)): ?>
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <div class="fade-up rounded-card border border-espresso/10 bg-cream p-8">
        <p class="text-lg leading-relaxed text-espresso/70">"<?= htmlspecialchars($cafeTestimonial['quote']) ?>"</p>
        <div class="mt-6">
          <p class="text-sm font-semibold text-espresso"><?= htmlspecialchars($cafeTestimonial['name']) ?></p>
          <p class="text-xs text-espresso/40"><?= htmlspecialchars($cafeTestimonial['role']) ?> &middot; <?= htmlspecialchars($cafeTestimonial['location']) ?></p>
        </div>
      </div>
    </div>
  </section>
  <?php endif; ?>

  <!-- ═══ PILOT FORM ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-lg">
      <div class="fade-up text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Join the pilot program</h2>
        <p class="mt-4 text-sm text-espresso/60">Be among the first cafes to try <?= BRAND ?> free.</p>
      </div>
      <form action="/api/pilot" method="POST" class="fade-up mt-8 space-y-4" data-delay="0.1">
        <div>
          <label for="cafe-name" class="mb-1 block text-sm font-medium text-espresso">Cafe name</label>
          <input type="text" id="cafe-name" name="cafe_name" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="e.g. Blue Tokai">
        </div>
        <div>
          <label for="owner-name" class="mb-1 block text-sm font-medium text-espresso">Owner name</label>
          <input type="text" id="owner-name" name="owner_name" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="Your full name">
        </div>
        <div>
          <label for="phone" class="mb-1 block text-sm font-medium text-espresso">Phone</label>
          <input type="tel" id="phone" name="phone" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="+91 98765 43210">
        </div>
        <div>
          <label for="city" class="mb-1 block text-sm font-medium text-espresso">City</label>
          <input type="text" id="city" name="city" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="e.g. Bangalore">
        </div>
        <button type="submit" class="w-full rounded-button bg-terracotta px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark">Request early access</button>
      </form>
    </div>
  </section>

  <!-- ═══ FAQ ═══ -->
  <?php if (isset($cafeFaqs) && !empty($cafeFaqs)): ?>
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <h2 class="fade-up mb-8 text-center font-display text-3xl font-bold text-espresso">Cafe POS FAQ</h2>
      <?php render_accordion($cafeFaqs); ?>
    </div>
  </section>
  <?php endif; ?>

  <!-- ═══ CTA ═══ -->
  <?php render_cta_band('Ready to modernise your cafe?'); ?>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
