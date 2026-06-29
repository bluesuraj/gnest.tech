<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../content/navigation.php';
?>
<header class="navbar fixed inset-x-0 top-0 z-40 bg-transparent">
  <div class="nav-inner mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-300">
    <!-- Logo -->
    <a href="<?= url('/') ?>" class="flex items-center">
      <img src="<?= url('/images/Logo.png') ?>" alt="<?= BRAND ?> Logo" width="72" height="62" class="w-[4.5rem] h-auto" loading="eager">
    </a>

    <!-- Desktop nav -->
    <nav class="hidden items-center gap-1 lg:flex">
      <?php foreach ($mainNav as $item): ?>
        <?php if (isset($item['children'])): ?>
          <div class="nav-parent relative group">
            <div class="nav-chip" tabindex="0">
              <span class="nav-chip-icon h-5 w-5 text-ink/70">
                <?= get_nav_icon($item['icon']) ?>
              </span>
              <span class="nav-chip-label text-xs font-medium text-ink/70"><?= $item['label'] ?></span>
              <svg class="nav-chevron h-3 w-3 text-ink/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <!-- Dropdown -->
            <div class="nav-dropdown absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 pt-2">
              <div class="rounded-card overflow-hidden border border-cream-warm bg-white shadow-lg">
                <?php foreach ($item['children'] as $child): ?>
                  <a href="<?= url($child['href']) ?>" class="flex min-h-[44px] items-center gap-3 px-4 py-3 text-sm text-ink transition-colors hover:bg-cream">
                    <span class="h-4 w-4 text-terracotta"><?= get_nav_icon($child['icon']) ?></span>
                    <span class="flex-1"><?= $child['label'] ?></span>
                    <?php if (isset($child['badge'])): ?>
                      <span class="rounded-full bg-cream-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta"><?= $child['badge'] ?></span>
                    <?php endif; ?>
                  </a>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        <?php else: ?>
          <a href="<?= url($item['href']) ?>">
            <div class="nav-chip">
              <span class="nav-chip-icon h-5 w-5 text-ink/70">
                <?= get_nav_icon($item['icon']) ?>
              </span>
              <span class="nav-chip-label text-xs font-medium text-ink/70"><?= $item['label'] ?></span>
            </div>
          </a>
        <?php endif; ?>
      <?php endforeach; ?>
    </nav>

    <!-- Mobile hamburger -->
    <button id="mobile-menu-btn" class="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-cream lg:hidden" aria-label="Toggle menu" aria-expanded="false">
      <svg class="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg class="icon-close h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="mobile-menu border-b border-cream-warm bg-white/95 backdrop-blur-md lg:hidden">
    <nav class="flex flex-col px-6 py-4">
      <?php foreach ($mainNav as $item): ?>
        <?php if (isset($item['children'])): ?>
          <div class="py-2">
            <span class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-espresso/50">
              <span class="h-3.5 w-3.5"><?= get_nav_icon($item['icon']) ?></span>
              <?= $item['label'] ?>
            </span>
            <div class="mt-1 flex flex-col pl-3">
              <?php foreach ($item['children'] as $child): ?>
                <a href="<?= url($child['href']) ?>" class="flex min-h-[44px] items-center gap-2 py-2 text-sm text-ink transition-colors hover:text-terracotta">
                  <span class="h-4 w-4"><?= get_nav_icon($child['icon']) ?></span>
                  <?= $child['label'] ?>
                  <?php if (isset($child['badge'])): ?>
                    <span class="rounded-full bg-cream-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta"><?= $child['badge'] ?></span>
                  <?php endif; ?>
                </a>
              <?php endforeach; ?>
            </div>
          </div>
        <?php else: ?>
          <a href="<?= url($item['href']) ?>" class="flex min-h-[44px] items-center gap-2 py-2 text-sm font-medium text-ink transition-colors hover:text-terracotta">
            <span class="h-4 w-4"><?= get_nav_icon($item['icon']) ?></span>
            <?= $item['label'] ?>
          </a>
        <?php endif; ?>
      <?php endforeach; ?>
    </nav>
  </div>
</header>

<?php
function get_nav_icon($name) {
  $icons = [
    'home' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>',
    'sparkles' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/></svg>',
    'tag' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>',
    'store' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z"/></svg>',
    'coffee' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>',
    'utensils' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z"/></svg>',
    'bed' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>',
    'help-circle' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/></svg>',
    'mail' => '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>',
  ];
  return isset($icons[$name]) ? $icons[$name] : '';
}
?>
