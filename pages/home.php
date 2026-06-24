<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
require_once __DIR__ . '/../content/home.php';
require_once __DIR__ . '/../includes/accordion.php';
require_once __DIR__ . '/../includes/cta-band.php';
require_once __DIR__ . '/../includes/json-ld.php';
require_once __DIR__ . '/../includes/feature-mockups.php';
$currentPage = 'home';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';

render_faq_schema($faqs);
render_software_schema();
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="relative overflow-hidden bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Copy -->
        <div class="fade-up max-w-xl">
          <h1 class="font-display text-4xl font-bold leading-tight tracking-tight text-espresso sm:text-5xl lg:text-6xl">
            <?= htmlspecialchars($hero['heading']) ?>
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-espresso/70">
            <?= htmlspecialchars($hero['sub']) ?>
          </p>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode(WHATSAPP_MESSAGE) ?>" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="<?= htmlspecialchars(WHATSAPP_MESSAGE) ?>" class="rounded-button bg-terracotta px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark">
              <?= htmlspecialchars($hero['ctaPrimary']) ?>
            </a>
            <a href="#features" class="rounded-button border border-espresso/20 px-8 py-3.5 text-center text-sm font-semibold text-espresso transition-colors hover:bg-espresso/5">
              <?= htmlspecialchars($hero['ctaSecondary']) ?>
            </a>
          </div>
          <!-- Trust strip -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <?php foreach ($hero['trustStrip'] as $item): ?>
              <span class="flex items-center gap-1.5 text-sm text-espresso/50">
                <svg class="h-4 w-4 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <?= htmlspecialchars($item) ?>
              </span>
            <?php endforeach; ?>
          </div>
        </div>

        <!-- 3D Carousel -->
        <div class="flex w-full flex-col items-center carousel-container">
          <div class="carousel-stage relative w-full max-w-[320px]" style="perspective: 1100px">
            <div class="relative h-[460px]" style="transform-style: preserve-3d">
              <!-- Card 0: Dashboard -->
              <div class="carousel-card absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm" style="left:50%;margin-left:-140px;">
                <div class="card-accent absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta"></div>
                <div class="mb-3 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-terracotta/10 text-base">📊</div>
                    <div>
                      <p class="text-[13px] font-semibold text-espresso">Dashboard</p>
                      <p class="text-[10px] text-espresso/40">Today's overview</p>
                    </div>
                  </div>
                  <span class="rounded-full bg-leaf/10 px-2 py-0.5 text-[10px] font-semibold text-leaf">Live</span>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 mb-2">
                  <div class="mb-1 flex items-baseline justify-between">
                    <span class="text-[10px] text-espresso/40">Today's revenue</span>
                    <span class="text-[10px] font-semibold text-leaf">&#9650; 12.4%</span>
                  </div>
                  <p class="text-[22px] font-bold tracking-tight text-espresso">$8,420<span class="text-[13px] font-normal text-espresso/30">.50</span></p>
                  <div class="mt-2 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full bg-terracotta" style="width:72%"></div></div>
                  <p class="mt-1 text-[9px] text-espresso/40">72% of daily target</p>
                </div>
                <div class="mb-2 grid grid-cols-2 gap-1.5">
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 px-2.5 py-2 text-center"><p class="text-[9px] text-espresso/40">Orders</p><p class="mt-0.5 text-[15px] font-bold text-terracotta">143</p></div>
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 px-2.5 py-2 text-center"><p class="text-[9px] text-espresso/40">Success rate</p><p class="mt-0.5 text-[15px] font-bold text-leaf">98%</p></div>
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 px-2.5 py-2 text-center"><p class="text-[9px] text-espresso/40">Avg basket</p><p class="mt-0.5 text-[15px] font-bold">$58</p></div>
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 px-2.5 py-2 text-center"><p class="text-[9px] text-espresso/40">Rating</p><p class="mt-0.5 text-[15px] font-bold">5.0</p></div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5">
                  <p class="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">Recent transactions</p>
                  <div class="flex items-center justify-between border-b border-espresso/8 py-1 last:border-0"><span class="text-[11px] text-espresso/60">Espresso x2</span><span class="text-[11px] font-semibold text-leaf">+$9.00</span></div>
                  <div class="flex items-center justify-between border-b border-espresso/8 py-1 last:border-0"><span class="text-[11px] text-espresso/60">Sandwich</span><span class="text-[11px] font-semibold text-leaf">+$12.50</span></div>
                  <div class="flex items-center justify-between py-1"><span class="text-[11px] text-espresso/60">Juice combo</span><span class="text-[11px] font-semibold text-leaf">+$7.25</span></div>
                </div>
              </div>

              <!-- Card 1: Speed Checkout -->
              <div class="carousel-card absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm" style="left:50%;margin-left:-140px;">
                <div class="card-accent absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta" style="display:none"></div>
                <div class="mb-3 flex items-center gap-2">
                  <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-emerald-50 text-base">&#9889;</div>
                  <div><p class="text-[13px] font-semibold text-espresso">Speed Checkout</p><p class="text-[10px] text-espresso/40">Scan &amp; pay instantly</p></div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 mb-3">
                  <div class="flex flex-col items-center py-2">
                    <p class="mb-2 text-[9px] uppercase tracking-wider text-espresso/30">Scan to pay</p>
                    <svg width="88" height="88" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;border:1px solid rgba(0,0,0,0.08)"><rect width="90" height="90" fill="white"/><rect x="6" y="6" width="22" height="22" rx="3" fill="none" stroke="#C96F3D" stroke-width="2.5"/><rect x="11" y="11" width="12" height="12" rx="1.5" fill="#C96F3D"/><rect x="62" y="6" width="22" height="22" rx="3" fill="none" stroke="#C96F3D" stroke-width="2.5"/><rect x="67" y="11" width="12" height="12" rx="1.5" fill="#C96F3D"/><rect x="6" y="62" width="22" height="22" rx="3" fill="none" stroke="#C96F3D" stroke-width="2.5"/><rect x="11" y="67" width="12" height="12" rx="1.5" fill="#C96F3D"/><rect x="36" y="36" width="18" height="3" rx="1" fill="#C96F3D" opacity=".5"/><rect x="36" y="42" width="12" height="3" rx="1" fill="#C96F3D" opacity=".4"/><rect x="36" y="48" width="18" height="3" rx="1" fill="#C96F3D" opacity=".4"/><line x1="4" y1="45" x2="86" y2="45" stroke="#C96F3D" stroke-width="1.5" opacity="0.5" stroke-dasharray="4 2"><animate attributeName="y1" values="10;80;10" dur="2.5s" repeatCount="indefinite"/><animate attributeName="y2" values="10;80;10" dur="2.5s" repeatCount="indefinite"/></line></svg>
                    <p class="mt-1.5 text-[10px] font-semibold text-terracotta">$24.99 &middot; Awaiting scan...</p>
                  </div>
                </div>
                <p class="mb-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">Accepted payments</p>
                <div class="mb-3 flex flex-wrap gap-1.5">
                  <span class="rounded-md border border-espresso/10 bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-espresso/60">&#128179; Card</span>
                  <span class="rounded-md border border-espresso/10 bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-espresso/60">&#128241; NFC</span>
                  <span class="rounded-md border border-espresso/10 bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-espresso/60">&#127974; UPI</span>
                  <span class="rounded-md border border-espresso/10 bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-espresso/60">&#128181; Cash</span>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5">
                  <div class="flex items-center justify-between"><span class="text-[11px] text-espresso/50">Avg checkout time</span><span class="text-[18px] font-bold text-terracotta">1.8s</span></div>
                </div>
              </div>

              <!-- Card 2: Smart Inventory -->
              <div class="carousel-card absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm" style="left:50%;margin-left:-140px;">
                <div class="card-accent absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta" style="display:none"></div>
                <div class="mb-3 flex items-center gap-2">
                  <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-leaf/10 text-base">&#128230;</div>
                  <div><p class="text-[13px] font-semibold text-espresso">Smart Inventory</p><p class="text-[10px] text-espresso/40">Real-time stock alerts</p></div>
                </div>
                <div class="mb-2 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 px-2.5 py-2">
                  <span class="mt-0.5 text-[13px]">&#128276;</span>
                  <div class="flex-1"><p class="text-[10px] font-semibold text-red-700">Low stock alert</p><p class="text-[9px] text-red-500">Arabica beans — 3 units left</p></div>
                  <button class="self-start rounded-md border border-red-200 px-1.5 py-0.5 text-[9px] font-semibold text-red-600">Order</button>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 mb-2">
                  <p class="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">Stock status</p>
                  <div class="flex flex-col gap-2">
                    <div><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Oat milk</span><span class="font-semibold text-leaf">84%</span></div><div class="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full" style="width:84%;background:#1B7A4A"></div></div></div>
                    <div><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Espresso pods</span><span class="font-semibold text-amber-700">41%</span></div><div class="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full" style="width:41%;background:#B45309"></div></div></div>
                    <div><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Arabica beans</span><span class="font-semibold text-red-600">8%</span></div><div class="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full" style="width:8%;background:#DC2626"></div></div></div>
                    <div><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Paper cups</span><span class="font-semibold text-leaf">92%</span></div><div class="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full" style="width:92%;background:#1B7A4A"></div></div></div>
                  </div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5">
                  <div class="flex items-center justify-between"><div><p class="text-[11px] font-semibold text-espresso">Auto-reorder</p><p class="text-[9px] text-espresso/40">Triggers at 15% threshold</p></div><div class="relative h-[17px] w-[30px] flex-shrink-0 rounded-full bg-terracotta"><div class="absolute right-[2px] top-[2px] h-[13px] w-[13px] rounded-full bg-white"></div></div></div>
                </div>
              </div>

              <!-- Card 3: Offline Mode -->
              <div class="carousel-card absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm" style="left:50%;margin-left:-140px;">
                <div class="card-accent absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta" style="display:none"></div>
                <div class="mb-3 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-amber-50 text-base">&#128225;</div>
                    <div><p class="text-[13px] font-semibold text-espresso">Offline Mode</p><p class="text-[10px] text-espresso/40">Sell without internet</p></div>
                  </div>
                  <span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Offline</span>
                </div>
                <div class="mb-3 flex items-start gap-2 rounded-lg border border-amber-100 bg-amber-50 px-2.5 py-2">
                  <span class="mt-0.5 animate-pulse text-[13px]">&#127760;</span>
                  <div><p class="text-[10px] font-semibold text-amber-800">No connection detected</p><p class="text-[9px] text-amber-600">Offline mode is active</p></div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 mb-2">
                  <p class="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">Queued transactions</p>
                  <div class="flex items-center justify-between border-b border-espresso/8 py-1.5"><div><p class="text-[11px] font-medium text-espresso">Latte + muffin</p><p class="text-[9px] text-espresso/35">2 min ago</p></div><span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Pending</span></div>
                  <div class="flex items-center justify-between border-b border-espresso/8 py-1.5"><div><p class="text-[11px] font-medium text-espresso">Cappuccino x3</p><p class="text-[9px] text-espresso/35">5 min ago</p></div><span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Pending</span></div>
                  <div class="flex items-center justify-between py-1.5"><div><p class="text-[11px] font-medium text-espresso">Breakfast combo</p><p class="text-[9px] text-espresso/35">11 min ago</p></div><span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Pending</span></div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-[14px]">&#8635;</div>
                    <div><p class="text-[11px] font-semibold text-espresso">3 transactions saved locally</p><p class="text-[9px] text-espresso/40">Will sync when online</p></div>
                  </div>
                </div>
              </div>

              <!-- Card 4: Growth Tracker -->
              <div class="carousel-card absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm" style="left:50%;margin-left:-140px;">
                <div class="card-accent absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta" style="display:none"></div>
                <div class="mb-3 flex items-center gap-2">
                  <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-terracotta/10 text-base">&#128200;</div>
                  <div><p class="text-[13px] font-semibold text-espresso">Growth Tracker</p><p class="text-[10px] text-espresso/40">Analytics &amp; insights</p></div>
                </div>
                <div class="mb-2 grid grid-cols-2 gap-1.5">
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 p-2"><p class="text-[9px] text-espresso/40">This month</p><p class="mt-0.5 text-[17px] font-bold text-espresso">$42K</p><p class="text-[9px] font-semibold text-leaf">&#9650; 23%</p></div>
                  <div class="rounded-lg border border-espresso/8 bg-cream/60 p-2"><p class="text-[9px] text-espresso/40">Customers</p><p class="mt-0.5 text-[17px] font-bold text-espresso">1,284</p><p class="text-[9px] font-semibold text-leaf">&#9650; 18%</p></div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 mb-2">
                  <p class="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">Weekly revenue</p>
                  <div class="flex h-[64px] items-end gap-1.5">
                    <?php $bars = [['M',42,0.7],['T',52,0.75],['W',36,0.65],['T',60,1],['F',48,0.75],['S',64,1],['S',56,0.9]]; foreach ($bars as $b): ?>
                    <div class="flex flex-1 flex-col items-center gap-1"><div class="w-full rounded-t" style="height:<?= $b[1] ?>px;background:#C96F3D;opacity:<?= $b[2] ?>"></div><span class="text-[8px] text-espresso/35"><?= $b[0] ?></span></div>
                    <?php endforeach; ?>
                  </div>
                </div>
                <div class="rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5">
                  <div class="flex items-center gap-2.5">
                    <span class="text-[20px]">&#9749;</span>
                    <div class="flex-1">
                      <div class="mb-1 flex justify-between text-[11px]"><span class="font-medium text-espresso">Latte — #1 seller</span><span class="font-bold text-terracotta">$1,240</span></div>
                      <div class="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full" style="width:88%;background:#C96F3D"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Arrows -->
            <button class="carousel-prev absolute left-[-14px] top-1/2 z-20 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-espresso/20 bg-white text-espresso/60 transition-colors hover:border-espresso/40 hover:text-espresso" aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
            <button class="carousel-next absolute right-[-14px] top-1/2 z-20 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-espresso/20 bg-white text-espresso/60 transition-colors hover:border-espresso/40 hover:text-espresso" aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9,18 15,12 9,6"/></svg>
            </button>
          </div>

          <!-- Dots -->
          <div class="mt-5 flex items-center gap-1.5">
            <?php for ($i = 0; $i < 5; $i++): ?>
              <button class="carousel-dot h-1.5 rounded-full border-none transition-all duration-300 <?= $i === 0 ? 'w-5 bg-terracotta' : 'w-1.5 bg-espresso/20' ?>" aria-label="Go to card <?= $i + 1 ?>"></button>
            <?php endfor; ?>
          </div>
          <p class="mt-2.5 text-center text-[11px] text-espresso/30">Swipe or use arrows to explore</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SOCIAL PROOF ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- Receipt-styled stats card -->
      <div class="fade-up mx-auto max-w-md rounded-card border border-espresso/10 bg-cream p-6 font-mono text-sm shadow-sm">
        <p class="mb-4 text-center text-xs font-bold uppercase tracking-widest text-espresso/40">Proof of concept</p>
        <div class="space-y-3">
          <?php foreach ($socialProof['stats'] as $stat): ?>
            <div class="flex items-center justify-between border-b border-dashed border-espresso/10 pb-2">
              <span class="text-espresso/60"><?= htmlspecialchars($stat['label']) ?></span>
              <span class="text-lg font-bold text-espresso" data-count-to="<?= $stat['value'] ?>" data-prefix="<?= htmlspecialchars($stat['prefix'] ?? '') ?>" data-suffix="<?= htmlspecialchars($stat['suffix'] ?? '') ?>"><?= htmlspecialchars(($stat['prefix'] ?? '') . '0' . ($stat['suffix'] ?? '')) ?></span>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Marquee neighborhoods -->
      <div class="mt-12 marquee-container overflow-hidden">
        <div class="marquee-track" style="--marquee-speed: 25s">
          <?php foreach ($socialProof['neighbourhoods'] as $hood): ?>
            <span class="mx-4 whitespace-nowrap text-sm text-espresso/30"><?= htmlspecialchars($hood) ?></span>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <?php require_once __DIR__ . '/../includes/receipt-divider.php'; ?>

  <!-- ═══ FEATURE DEEP DIVE ═══ -->
  <section id="features" class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">One app, everything your cafe needs</h2>
      </div>
      <div class="grid gap-16 md:gap-24">
        <?php foreach ($features as $i => $feat): ?>
          <div class="fade-up grid items-center gap-8 md:grid-cols-2 <?= $i % 2 === 1 ? 'md:direction-rtl' : '' ?>" data-delay="<?= $i * 0.05 ?>">
            <div class="<?= $i % 2 === 1 ? 'md:order-2' : '' ?>">
              <h3 class="font-display text-2xl font-bold text-espresso"><?= htmlspecialchars($feat['headline']) ?></h3>
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

  <!-- ═══ BUSINESS TYPES ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Built for your business</h2>
      </div>
      <div class="stagger-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <?php foreach ($businessTypes as $biz): ?>
          <a href="<?= url($biz['href']) ?>" class="stagger-item tilt-card group rounded-card border border-espresso/10 bg-cream p-6 transition-shadow hover:shadow-md <?= !$biz['active'] ? 'opacity-60' : '' ?>">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($biz['name']) ?></h3>
              <?php if (isset($biz['badge'])): ?>
                <span class="rounded-full bg-cream-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta"><?= $biz['badge'] ?></span>
              <?php endif; ?>
            </div>
            <p class="text-sm text-espresso/60"><?= htmlspecialchars($biz['description']) ?></p>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ WHY SWITCH ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Why cafes switch</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <?php foreach ($whySwitch as $i => $reason): ?>
          <div class="fade-up rounded-card border border-espresso/10 bg-white p-8" data-delay="<?= $i * 0.1 ?>">
            <h3 class="font-display text-lg font-semibold text-espresso"><?= htmlspecialchars($reason['heading']) ?></h3>
            <p class="mt-3 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($reason['body']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="bg-white px-6 py-16 md:py-24 overflow-hidden">
    <div class="mx-auto max-w-7xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">What cafe owners say</h2>
      </div>
      <div class="marquee-container">
        <div class="marquee-track" style="--marquee-speed: 40s">
          <?php foreach ($testimonials as $t): ?>
            <div class="mx-3 w-80 flex-shrink-0 rounded-card border border-espresso/10 bg-cream p-6">
              <p class="text-sm leading-relaxed text-espresso/70">"<?= htmlspecialchars($t['quote']) ?>"</p>
              <div class="mt-4 border-t border-espresso/10 pt-4">
                <p class="text-sm font-semibold text-espresso"><?= htmlspecialchars($t['name']) ?></p>
                <p class="text-xs text-espresso/40"><?= htmlspecialchars($t['role']) ?> &middot; <?= htmlspecialchars($t['location']) ?></p>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <?php require_once __DIR__ . '/../includes/receipt-divider.php'; ?>

  <!-- ═══ FAQ ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-2xl">
      <div class="fade-up mb-12 text-center">
        <h2 class="font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">Frequently asked questions</h2>
      </div>
      <?php render_accordion($faqs); ?>
    </div>
  </section>

  <!-- ═══ FINAL CTA ═══ -->
  <?php render_cta_band($finalCta['heading'], $finalCta['ctaPrimary']); ?>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
?>
<script src="<?= url('/js/carousel.js') ?>"></script>
<?php require_once __DIR__ . '/../includes/end.php'; ?>
