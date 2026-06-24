<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = 'terms';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">Terms of Service</h1>
      <p class="fade-up mt-4 text-sm text-espresso/40" data-delay="0.1">Last updated: <?= date('F j, Y') ?></p>

      <div class="fade-up mt-10 space-y-8 text-sm leading-relaxed text-espresso/70" data-delay="0.2">

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">1. Acceptance of Terms</h2>
          <p class="mt-3">By accessing or using the <?= BRAND ?> point-of-sale application, website, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">2. Description of Service</h2>
          <p class="mt-3"><?= BRAND ?> provides a mobile point-of-sale (POS) application for cafes, restaurants, guest houses, and similar food and hospitality businesses. The Service includes billing, invoicing, inventory management, staff management, customer loyalty, and reporting features as described on our website.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">3. Account Registration</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You are responsible for all activities that occur under your account, including actions by staff members you authorise.</li>
            <li>You must be at least 18 years old and have the legal authority to operate a business to use the Service.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">4. Subscription and Payments</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li><strong>Free plan:</strong> The free plan includes core billing features as described on our pricing page. We reserve the right to modify free plan features with reasonable notice.</li>
            <li><strong>Paid plans:</strong> Paid subscriptions are billed monthly or annually. Prices are listed on our website and are subject to applicable taxes (including GST).</li>
            <li><strong>No per-transaction fees:</strong> We do not charge per-bill or per-transaction fees on any plan.</li>
            <li><strong>Upgrades and downgrades:</strong> You may upgrade your plan at any time (prorated). Downgrades take effect at the next billing cycle.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Access continues until the end of your current billing period. No refunds for partial periods.</li>
            <li><strong>Payment failure:</strong> If payment fails, we will attempt to notify you. Continued failure may result in a downgrade to the free plan.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">5. Acceptable Use</h2>
          <p class="mt-3">You agree not to:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
            <li>Generate fraudulent invoices, tax documents, or financial records.</li>
            <li>Attempt to reverse-engineer, decompile, or disassemble the application.</li>
            <li>Share, resell, or sublicense your account to third parties.</li>
            <li>Interfere with or disrupt the Service or its infrastructure.</li>
            <li>Upload malicious code, viruses, or any harmful content.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">6. Your Data</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li><strong>Ownership:</strong> You retain full ownership of all business data you enter into the Service (menu items, transactions, customer records, etc.).</li>
            <li><strong>Export:</strong> You may export your data at any time in standard formats (CSV, Excel).</li>
            <li><strong>Backup:</strong> While we maintain backups of synced data, you are encouraged to regularly export and maintain your own backups.</li>
            <li><strong>Offline data:</strong> Data created while offline is stored on your device. We are not responsible for data loss due to device damage, loss, or failure before sync is completed.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">7. Invoicing and Tax Compliance</h2>
          <p class="mt-3">The Service generates invoices based on information you provide (GSTIN, HSN/SAC codes, tax rates). You are solely responsible for:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li>Ensuring the accuracy of your tax registration details and tax rates.</li>
            <li>Compliance with applicable tax laws and filing requirements.</li>
            <li>Maintaining proper records as required by tax authorities.</li>
          </ul>
          <p class="mt-2"><?= BRAND ?> is a billing tool and does not provide tax, legal, or financial advice.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">8. Intellectual Property</h2>
          <p class="mt-3">The Service, including its design, code, features, branding, and documentation, is the intellectual property of <?= BRAND ?>. These Terms do not grant you any rights to our trademarks, logos, or brand assets beyond normal use of the Service.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">9. Service Availability</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li>We strive to maintain high availability but do not guarantee uninterrupted service.</li>
            <li>The offline billing feature ensures core functionality continues without internet connectivity.</li>
            <li>Scheduled maintenance will be communicated in advance when possible.</li>
            <li>We are not liable for disruptions caused by factors beyond our control (internet outages, device failures, third-party services).</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">10. Limitation of Liability</h2>
          <p class="mt-3">To the maximum extent permitted by law:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><?= BRAND ?> is provided "as is" without warranties of any kind, express or implied.</li>
            <li>We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</li>
            <li>Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim.</li>
            <li>We are not responsible for losses resulting from incorrect tax configuration, data entry errors, or device failures.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">11. Termination</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li>You may terminate your account at any time by contacting us.</li>
            <li>We may suspend or terminate your account for violation of these Terms, with notice when practicable.</li>
            <li>Upon termination, you may export your data within 30 days. After that period, data will be deleted per our Privacy Policy.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">12. Changes to Terms</h2>
          <p class="mt-3">We may update these Terms from time to time. Material changes will be communicated via the app or website. Continued use of the Service after changes constitutes acceptance. If you disagree with updated Terms, you may terminate your account.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">13. Governing Law</h2>
          <p class="mt-3">These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or the Service shall be resolved through good-faith negotiation first, and if unresolved, through the appropriate legal channels.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">14. Contact</h2>
          <p class="mt-3">For questions about these Terms, contact us:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>WhatsApp:</strong> Message us via the chat icon on this website</li>
            <li><strong>Website:</strong> <?= SITE_URL ?></li>
          </ul>
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
