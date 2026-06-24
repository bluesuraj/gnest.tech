<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/coming-soon.php';
$currentPage = 'restaurant-pos';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';

$page = $restaurantPage;
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <?php if (isset($page['eyebrow'])): ?>
        <p class="fade-up mb-4 text-sm font-semibold uppercase tracking-wider text-terracotta"><?= htmlspecialchars($page['eyebrow']) ?></p>
      <?php endif; ?>
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($page['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($page['sub']) ?></p>
    </div>
  </section>

  <!-- ═══ PLANNED FEATURES ═══ -->
  <?php if (isset($page['features']) && !empty($page['features'])): ?>
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Features</h2>
      </div>
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($page['features'] as $feat): ?>
          <div class="stagger-item rounded-card border border-espresso/10 bg-cream p-6">
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($feat['title']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($feat['description']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
  <?php endif; ?>

  <!-- ═══ WAITLIST FORM ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-lg">
      <div class="fade-up text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Join the waitlist</h2>
        <p class="mt-4 text-sm text-espresso/60">Be the first to know when <?= BRAND ?> for restaurants launches.</p>
      </div>
      <form action="/api/waitlist" method="POST" class="fade-up mt-8 space-y-4" data-delay="0.1">
        <input type="hidden" name="type" value="restaurant">
        <div>
          <label for="business-name" class="mb-1 block text-sm font-medium text-espresso">Business name</label>
          <input type="text" id="business-name" name="business_name" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="Your restaurant name">
        </div>
        <div>
          <label for="contact-name" class="mb-1 block text-sm font-medium text-espresso">Your name</label>
          <input type="text" id="contact-name" name="contact_name" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="Full name">
        </div>
        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-espresso">Email</label>
          <input type="email" id="email" name="email" required class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="you@example.com">
        </div>
        <div>
          <label for="phone" class="mb-1 block text-sm font-medium text-espresso">Phone</label>
          <input type="tel" id="phone" name="phone" class="w-full rounded-button border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" placeholder="+91 98765 43210">
        </div>
        <button type="submit" class="w-full rounded-button bg-terracotta px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark">Join waitlist</button>
      </form>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
