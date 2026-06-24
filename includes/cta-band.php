<?php
require_once __DIR__ . '/../config/brand.php';

function render_cta_band($heading, $ctaLabel = 'Chat on WhatsApp', $ctaHref = null, $showWhatsApp = false) {
  $waUrl = 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode(WHATSAPP_MESSAGE);
  if ($ctaHref === null) $ctaHref = $waUrl;
  ?>
  <section class="bg-terracotta">
    <div class="mx-auto max-w-7xl px-6 py-16 text-center md:py-24">
      <h2 class="fade-up font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"><?= htmlspecialchars($heading) ?></h2>
      <div class="fade-up mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" data-delay="0.1">
        <a href="<?= $ctaHref === $waUrl ? $ctaHref : url($ctaHref) ?>" <?= $ctaHref === $waUrl ? 'target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="' . htmlspecialchars(WHATSAPP_MESSAGE) . '"' : '' ?> class="rounded-button bg-white px-8 py-3.5 text-sm font-semibold text-terracotta shadow-sm transition-colors hover:bg-cream"><?= htmlspecialchars($ctaLabel) ?></a>
        <?php if ($showWhatsApp): ?>
          <a href="<?= $waUrl ?>" target="_blank" rel="noopener noreferrer" class="rounded-button border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Chat with us on WhatsApp</a>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <?php
}
?>
