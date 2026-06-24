<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/help.php';
$currentPage = 'help';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl"><?= htmlspecialchars($helpHero['heading']) ?></h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1"><?= htmlspecialchars($helpHero['sub']) ?></p>
      <!-- Search input (visual only) -->
      <div class="fade-up mx-auto mt-8 max-w-md" data-delay="0.2">
        <div class="relative">
          <svg class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-espresso/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search help articles..." class="w-full rounded-button border border-espresso/20 bg-white py-3.5 pl-12 pr-4 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta" disabled>
        </div>
        <p class="mt-2 text-xs text-espresso/30">Search coming soon</p>
      </div>
    </div>
  </section>

  <!-- ═══ HELP CATEGORIES ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($helpCategories as $cat): ?>
          <div class="stagger-item tilt-card rounded-card border border-espresso/10 bg-cream p-6 transition-shadow hover:shadow-md">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta/10 text-xl"><?= $cat['icon'] ?></div>
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($cat['title']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($cat['description']) ?></p>
            <?php if (isset($cat['articles']) && !empty($cat['articles'])): ?>
              <ul class="mt-4 space-y-1.5">
                <?php foreach ($cat['articles'] as $article): ?>
                  <li>
                    <a href="<?= url($article['href'] ?? '#') ?>" class="flex items-center gap-1.5 text-sm text-terracotta transition-colors hover:text-terracotta-dark">
                      <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                      <?= htmlspecialchars($article['title']) ?>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ WHATSAPP SUPPORT BLOCK ═══ -->
  <section class="bg-espresso px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <div class="fade-up">
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <svg class="h-8 w-8 text-leaf" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.726-1.404A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.7-6.04-1.893l-.42-.297-2.791.829.737-2.723-.323-.452A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        </div>
        <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">Need help right now?</h2>
        <p class="mt-4 text-sm text-white/60">Our support team is available on WhatsApp. We typically respond within minutes.</p>
        <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode(WHATSAPP_MESSAGE) ?>" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="<?= htmlspecialchars(WHATSAPP_MESSAGE) ?>" class="mt-6 inline-flex items-center gap-2 rounded-button bg-leaf px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf/90">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
