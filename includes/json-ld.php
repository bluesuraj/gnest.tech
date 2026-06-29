<?php
function render_faq_schema($faqs) {
  $items = [];
  foreach ($faqs as $faq) {
    $items[] = [
      '@type' => 'Question',
      'name' => $faq['question'],
      'acceptedAnswer' => [
        '@type' => 'Answer',
        'text' => $faq['answer'],
      ],
    ];
  }
  $schema = [
    '@context' => 'https://schema.org',
    '@type' => 'FAQPage',
    'mainEntity' => $items,
  ];
  echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
}

function render_software_schema() {
  $schema = [
    '@context' => 'https://schema.org',
    '@type' => 'SoftwareApplication',
    'name' => BRAND,
    'applicationCategory' => 'BusinessApplication',
    'operatingSystem' => 'Android, iOS',
    'offers' => [
      '@type' => 'Offer',
      'price' => '0',
      'priceCurrency' => 'USD',
    ],
  ];
  echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
}

function render_org_schema() {
  $schema = [
    '@context' => 'https://schema.org',
    '@type' => 'Organization',
    'name' => BRAND,
    'url' => SITE_URL,
    'logo' => SITE_URL . '/images/Logo.png',
  ];
  echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
}
?>
