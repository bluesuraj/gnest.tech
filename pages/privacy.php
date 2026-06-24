<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';
$currentPage = 'privacy';
require_once __DIR__ . '/../includes/head.php';
require_once __DIR__ . '/../includes/splash-screen.php';
require_once __DIR__ . '/../includes/navbar.php';
?>
<main class="flex-1" style="padding-top: var(--nav-height)">

  <section class="bg-cream px-6 py-16 md:py-24">
    <div class="mx-auto max-w-3xl">
      <h1 class="fade-up font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">Privacy Policy</h1>
      <p class="fade-up mt-4 text-sm text-espresso/40" data-delay="0.1">Last updated: <?= date('F j, Y') ?></p>

      <div class="fade-up mt-10 space-y-8 text-sm leading-relaxed text-espresso/70" data-delay="0.2">

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">1. Introduction</h2>
          <p class="mt-3"><?= BRAND ?> ("we", "our", or "us") operates the <?= BRAND ?> point-of-sale application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">2. Information We Collect</h2>
          <h3 class="mt-3 font-semibold text-espresso/80">2.1 Information You Provide</h3>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>Account information:</strong> Business name, owner name, email address, phone number, and business address when you register.</li>
            <li><strong>Business data:</strong> Menu items, pricing, inventory records, staff details (names and roles), and customer records that you enter into the POS system.</li>
            <li><strong>Transaction data:</strong> Sales records, invoices, payment method types (cash, UPI, card), and billing history generated through the app.</li>
            <li><strong>Support communications:</strong> Messages and information you share when contacting us via WhatsApp or other channels.</li>
          </ul>

          <h3 class="mt-4 font-semibold text-espresso/80">2.2 Information Collected Automatically</h3>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>Device information:</strong> Device model, operating system version, unique device identifiers, and app version.</li>
            <li><strong>Usage data:</strong> Features used, session duration, and interaction patterns to improve our product.</li>
            <li><strong>Location data:</strong> Approximate location based on IP address (used only for regional settings and support routing).</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">3. How We Use Your Information</h2>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li>Provide, operate, and maintain the POS application and related services.</li>
            <li>Generate GST-compliant invoices and tax reports on your behalf.</li>
            <li>Send day-end summaries, low-stock alerts, and other operational notifications.</li>
            <li>Process your subscription payments and manage your account.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Improve our products, develop new features, and fix bugs.</li>
            <li>Comply with legal obligations, including tax and financial regulations.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">4. Data Storage and Security</h2>
          <p class="mt-3">Your transaction data is stored locally on your device and synced to our secure cloud servers when an internet connection is available. We use industry-standard encryption (TLS 1.2+) for data in transit and AES-256 encryption for data at rest.</p>
          <p class="mt-2">Offline data remains on your device until sync is completed. We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, or destruction.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">5. Data Sharing</h2>
          <p class="mt-3">We do not sell your personal or business data. We may share information only in the following circumstances:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>Service providers:</strong> Cloud hosting, payment processing, and analytics services that help us operate the platform (under strict data processing agreements).</li>
            <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process.</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (with prior notice).</li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">6. Cookies and Tracking</h2>
          <p class="mt-3">Our website uses essential cookies for site functionality. We may use analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">7. Your Rights</h2>
          <p class="mt-3">You have the right to:</p>
          <ul class="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data.</li>
            <li><strong>Export:</strong> Export your business data in standard formats (CSV/Excel).</li>
            <li><strong>Objection:</strong> Object to processing of your data for specific purposes.</li>
          </ul>
          <p class="mt-2">To exercise any of these rights, contact us at the details below.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">8. Data Retention</h2>
          <p class="mt-3">We retain your data for as long as your account is active or as needed to provide services. Transaction records are retained for the period required by applicable tax and financial regulations. Upon account deletion, we remove your data within 90 days, except where retention is required by law.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">9. Children's Privacy</h2>
          <p class="mt-3">Our services are designed for businesses and are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">10. Changes to This Policy</h2>
          <p class="mt-3">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-espresso">11. Contact Us</h2>
          <p class="mt-3">If you have questions about this Privacy Policy or our data practices, contact us:</p>
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
