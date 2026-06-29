<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = 'contact';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <!-- ═══ HERO ═══ -->
  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">Get in touch</h1>
      <p class="fade-up mt-6 text-lg text-espresso/70" data-delay="0.1">Have a question, need a demo, or want to partner with us? We'd love to hear from you.</p>
    </div>
  </section>

  <!-- ═══ CONTACT INFO + FORM ═══ -->
  <section class="bg-white px-6 py-16 md:py-24">
    <div class="mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-5">

        <!-- Left: contact info -->
        <div class="lg:col-span-2">
          <div class="fade-up space-y-6">
            <!-- WhatsApp -->
            <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode("Hi, I'd like to know more about " . BRAND . ".") ?>" target="_blank" rel="noopener noreferrer" class="group block rounded-card border border-espresso/10 bg-cream p-6 transition-shadow hover:shadow-lg">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.726-1.404A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.7-6.04-1.893l-.42-.297-2.791.829.737-2.723-.323-.452A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </div>
              <h3 class="font-display text-lg font-semibold text-espresso">WhatsApp</h3>
              <p class="mt-1 text-sm text-espresso/50">Fastest way to reach us. Mon–Sat, 9 AM – 9 PM.</p>
            </a>

            <!-- Email -->
            <div class="rounded-card border border-espresso/10 bg-cream p-6">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
              </div>
              <h3 class="font-display text-lg font-semibold text-espresso">Email</h3>
              <p class="mt-1 font-mono text-sm text-terracotta">hello@gnest.tech</p>
              <p class="mt-1 text-sm text-espresso/50">For partnerships, press, or detailed queries.</p>
            </div>

            <!-- Office -->
            <div class="rounded-card border border-espresso/10 bg-cream p-6">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
              </div>
              <h3 class="font-display text-lg font-semibold text-espresso">Office</h3>
              <p class="mt-1 text-sm text-espresso/70">Remote-first team</p>
              <p class="mt-1 text-sm text-espresso/50">By appointment only.</p>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="lg:col-span-3">
          <div class="fade-up rounded-card border border-espresso/10 bg-cream p-8" data-delay="0.1">
            <form action="<?= url('/api/submit-form') ?>" method="POST" data-ajax-form class="space-y-5">
              <input type="hidden" name="form_type" value="contact">
              <h3 class="font-display text-xl font-bold text-espresso">Send us a message</h3>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="name" class="mb-1 block text-xs font-medium text-espresso/50">Your name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" class="w-full rounded-button border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta">
                </div>
                <div>
                  <label for="contact-email" class="mb-1 block text-xs font-medium text-espresso/50">Email address *</label>
                  <input type="email" id="contact-email" name="email" required placeholder="you@example.com" class="w-full rounded-button border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta">
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="contact-phone" class="mb-1 block text-xs font-medium text-espresso/50">Phone / WhatsApp</label>
                  <input type="tel" id="contact-phone" name="phone" placeholder="+1 234 567 8900" class="w-full rounded-button border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta">
                </div>
                <div>
                  <label for="subject" class="mb-1 block text-xs font-medium text-espresso/50">Subject *</label>
                  <select id="subject" name="subject" required class="w-full rounded-button border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso outline-none transition-colors focus:border-terracotta">
                    <option value="" disabled selected>Select a topic</option>
                    <option value="demo">Request a demo</option>
                    <option value="support">Technical support</option>
                    <option value="partnership">Partnership</option>
                    <option value="pricing">Pricing question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="mb-1 block text-xs font-medium text-espresso/50">Message *</label>
                <textarea id="message" name="message" required rows="5" placeholder="Tell us how we can help..." class="w-full resize-none rounded-button border border-espresso/10 bg-white px-4 py-3 text-sm text-espresso placeholder-espresso/30 outline-none transition-colors focus:border-terracotta"></textarea>
              </div>

              <button type="submit" class="min-h-[44px] w-full rounded-button bg-terracotta px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark sm:w-auto">Send message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

</main>
<?php
require_once __DIR__ . '/../includes/footer.php';
require_once __DIR__ . '/../includes/whatsapp-button.php';
require_once __DIR__ . '/../includes/end.php';
?>
