<?php
require_once __DIR__ . '/../config/brand.php';
require_once __DIR__ . '/../config/meta.php';

$meta = isset($pageMeta[$currentPage]) ? $pageMeta[$currentPage] : $pageMeta['home'];
$pageTitle = $meta['title'];
$pageDescription = $meta['description'];
?>
<!DOCTYPE html>
<html lang="en" class="h-full antialiased">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($pageTitle) ?></title>
  <meta name="description" content="<?= htmlspecialchars($pageDescription) ?>">
  <meta name="keywords" content="cafe POS, cafe billing software, GST billing, free POS, restaurant billing, offline POS, UPI POS, cafe management">
  <meta name="author" content="<?= BRAND ?>">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en">
  <meta property="og:url" content="<?= SITE_URL ?>">
  <meta property="og:site_name" content="<?= BRAND ?>">
  <meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta property="og:description" content="<?= htmlspecialchars($pageDescription) ?>">
  <meta property="og:image" content="<?= SITE_URL ?>/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta name="twitter:description" content="<?= htmlspecialchars($pageDescription) ?>">
  <meta name="twitter:image" content="<?= SITE_URL ?>/images/og-image.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            espresso: { DEFAULT: '#2B1D16', light: '#3D2E25' },
            cream: { DEFAULT: '#FAF6EF', warm: '#F5EDE0' },
            terracotta: { DEFAULT: '#C96F3D', light: '#D4885A', dark: '#A85A2E' },
            leaf: { DEFAULT: '#3E7C59', light: '#4E9B6F', dark: '#2D5C42' },
            ink: '#1A1A1A',
          },
          fontFamily: {
            display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
          },
          borderRadius: {
            card: '1rem',
            button: '0.75rem',
          },
        }
      }
    }
  </script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="<?= url('/css/globals.css') ?>">
  <link rel="stylesheet" href="<?= url('/css/animations.css') ?>">
  <link rel="stylesheet" href="<?= url('/css/components.css') ?>">
</head>
<body class="flex min-h-full flex-col bg-cream text-ink font-sans">
