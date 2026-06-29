<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/help.php';
require_once __DIR__ . '/../includes/accordion.php';
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
    </div>
  </section>

  <!-- ═══ HELP CATEGORIES ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="stagger-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($helpCategories as $cat): ?>
          <a href="#<?= htmlspecialchars($cat['id']) ?>" class="stagger-item tilt-card block rounded-card border border-espresso/10 bg-cream p-6 transition-shadow hover:shadow-md">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta/10 text-xl"><?= $cat['icon'] ?></div>
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($cat['title']) ?></h3>
            <p class="mt-2 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($cat['description']) ?></p>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ FAQ SECTIONS PER CATEGORY ═══ -->
  <?php foreach ($helpCategories as $cat): ?>
    <?php if (!empty($cat['articles'])): ?>
    <section id="<?= htmlspecialchars($cat['id']) ?>" class="border-t border-espresso/5 px-6 py-12 md:py-16">
      <div class="mx-auto max-w-2xl">
        <div class="fade-up mb-8 flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-xl"><?= $cat['icon'] ?></span>
          <h2 class="font-display text-2xl font-bold text-espresso sm:text-3xl"><?= htmlspecialchars($cat['title']) ?></h2>
        </div>
        <div class="fade-up" data-delay="0.1">
          <?php render_accordion($cat['articles']); ?>
        </div>
      </div>
    </section>
    <?php endif; ?>
  <?php endforeach; ?>

  <!-- ═══ WHATSAPP SUPPORT BLOCK ═══ -->
  <section class="bg-espresso px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <div class="fade-up">
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <svg class="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <h2 class="font-display text-2xl font-bold text-white sm:text-3xl"><?= htmlspecialchars($whatsappSupport['heading']) ?></h2>
        <p class="mt-4 text-sm text-white/60"><?= htmlspecialchars($whatsappSupport['sub']) ?></p>
        <p class="mt-2 font-mono text-xs text-white/40"><?= htmlspecialchars($whatsappSupport['hours']) ?></p>
        <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode('Hi, I need help with my POS setup.') ?>" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-button bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]">
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
