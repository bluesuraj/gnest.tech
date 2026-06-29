<?php
require_once __DIR__ . '/../config/brand.php';

$pricingHero = [
    'heading' => 'One flat price. Every feature. No per-bill cuts.',
    'sub' => 'Know exactly what you\'re paying. No hidden fees, no per-transaction charges, no surprises.',
];

$tiers = [
    [
        'name' => 'Free', 'description' => 'Everything you need to start billing today.',
        'monthlyPrice' => 0, 'annualPrice' => 0,
        'ctaLabel' => 'Get started', 'ctaHref' => 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode(WHATSAPP_MESSAGE), 'highlighted' => false, 'external' => true,
        'features' => ['Single device', 'Unlimited bills', 'GST invoices', 'Offline billing', 'UPI + cash recording', 'Basic daily reports', 'Community support'],
    ],
    [
        'name' => 'Pro', 'description' => 'For cafes ready to grow and optimise.',
        'monthlyPrice' => 799, 'annualPrice' => 649,
        'ctaLabel' => 'Get Pro', 'ctaHref' => 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode('Hi, I\'d like to start a Pro plan for ' . BRAND . '!'), 'highlighted' => true, 'badge' => 'Most popular', 'external' => true,
        'features' => ['Everything in Free', 'Up to 5 devices', 'Inventory tracking', 'Staff PINs & roles', 'Advanced reports & exports', 'Customer loyalty', 'WhatsApp day-end summary', 'Priority WhatsApp support'],
    ],
    [
        'name' => 'Multi-outlet', 'description' => 'One dashboard for every location.',
        'monthlyPrice' => null, 'annualPrice' => null,
        'ctaLabel' => 'Talk to us', 'ctaHref' => 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode('Hi, I\'d like to learn about the Multi-outlet plan for ' . BRAND . '!'), 'highlighted' => false, 'external' => true,
        'features' => ['Everything in Pro', 'Unlimited devices', 'Multi-location dashboard', 'Centralised menu management', 'Per-outlet reports', 'Cross-outlet staff transfers', 'Dedicated account manager'],
    ],
];

$alwaysFree = [
    'Unlimited bills — no per-transaction fees, ever',
    'GST-compliant invoices with GSTIN & HSN',
    'Offline billing — works without internet',
    'UPI, cards, and cash payment recording',
    'Basic daily sales reports',
    'Receipt printing via Bluetooth',
    'Phone or tablet — BYOD',
];

$pricingFaqs = [
    ['question' => 'Are there any contracts or lock-in periods?', 'answer' => 'No. All plans are month-to-month. Cancel anytime from your account settings. Annual plans are discounted but you can switch to monthly at renewal.'],
    ['question' => 'Do you charge per transaction or per bill?', 'answer' => 'Never. You pay a flat monthly fee regardless of how many bills you print. Zero per-transaction charges.'],
    ['question' => 'What hardware do I need to buy?', 'answer' => 'None, if you have an Android phone or tablet. For receipt printing, a Bluetooth thermal printer ($25–40) is optional but recommended. No proprietary hardware required.'],
    ['question' => 'Is GST charged on the subscription?', 'answer' => 'Yes, 18% GST is added to the subscription price as required by applicable tax law. The prices shown above are before GST. You\'ll receive a GST invoice from ' . BRAND . ' for your records.'],
    ['question' => 'Can I upgrade or downgrade anytime?', 'answer' => 'Yes. Upgrade instantly and the price difference is prorated. Downgrade takes effect at the next billing cycle — you keep Pro features until then.'],
];
