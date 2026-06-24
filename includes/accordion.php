<?php
function render_accordion($items) {
  foreach ($items as $i => $item): ?>
    <div class="border-b border-espresso/10" data-accordion-item>
      <button onclick="toggleAccordion(this)" class="flex w-full items-center justify-between py-5 text-left" aria-expanded="false">
        <span class="pr-4 text-base font-semibold text-espresso"><?= htmlspecialchars($item['question']) ?></span>
        <span class="accordion-icon flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-espresso/20 text-espresso/60">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14"/>
          </svg>
        </span>
      </button>
      <div class="accordion-content">
        <p class="pb-5 pr-12 text-sm leading-relaxed text-espresso/60"><?= htmlspecialchars($item['answer']) ?></p>
      </div>
    </div>
  <?php endforeach;
}
?>
