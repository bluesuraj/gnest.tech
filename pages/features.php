<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/features.php';
require_once __DIR__ . '/../includes/cta-band.php';
require_once __DIR__ . '/../includes/feature-mockups.php';
$currentPage = 'features';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">
  <!-- Hero -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($featuresHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($featuresHero['sub']) ?></p>
    </div>
  </section>

  <!-- Features -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-16 md:gap-24">
        <?php foreach ($featureDetails as $i => $feat): ?>
          <div id="<?= $feat['id'] ?>" class="fade-up grid items-center gap-8 md:grid-cols-2" data-delay="0">
            <div class="<?= $i % 2 === 1 ? 'md:order-2' : '' ?>">
              <h2 class="font-display text-2xl font-bold text-espresso"><?= htmlspecialchars($feat['title']) ?></h2>
              <p class="mt-2 text-lg font-medium text-terracotta"><?= htmlspecialchars($feat['headline']) ?></p>
              <p class="mt-4 text-sm leading-relaxed text-espresso/70"><?= htmlspecialchars($feat['description']) ?></p>
              <ul class="mt-4 space-y-2">
                <?php foreach ($feat['bullets'] as $bullet): ?>
                  <li class="flex items-start gap-2 text-sm text-espresso/70">
                    <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <?= htmlspecialchars($bullet) ?>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
            <div class="<?= $i % 2 === 1 ? 'md:order-1' : '' ?> flex items-center justify-center">
              <?php render_feature_mockup($feat['id']); ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Comparison table -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl">
      <h2 class="fade-up mb-8 text-center font-display text-3xl font-bold text-espresso">Free vs Pro</h2>
      <div class="fade-up overflow-hidden rounded-card border border-espresso/10 bg-white" data-delay="0.1">
        <table class="w-full text-sm">
          <thead><tr class="border-b border-espresso/10 bg-cream/50"><th class="px-4 py-3 text-left font-semibold text-espresso">Feature</th><th class="px-4 py-3 text-center font-semibold text-espresso">Free</th><th class="px-4 py-3 text-center font-semibold text-terracotta">Pro</th></tr></thead>
          <tbody>
            <?php foreach ($comparisonRows as $row): ?>
              <tr class="border-b border-espresso/5">
                <td class="px-4 py-3 text-espresso/70"><?= htmlspecialchars($row['feature']) ?></td>
                <td class="px-4 py-3 text-center">
                  <?php if ($row['free'] === true): ?>
                    <svg class="inline h-5 w-5 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <?php elseif ($row['free'] === false): ?>
                    <span class="text-espresso/20">&mdash;</span>
                  <?php else: ?>
                    <span class="text-espresso/60"><?= htmlspecialchars($row['free']) ?></span>
                  <?php endif; ?>
                </td>
                <td class="px-4 py-3 text-center">
                  <?php if ($row['pro'] === true): ?>
                    <svg class="inline h-5 w-5 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <?php else: ?>
                    <span class="text-espresso/60"><?= htmlspecialchars($row['pro']) ?></span>
                  <?php endif; ?>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <?php render_cta_band('See it in action. Start billing today.'); ?>
</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
