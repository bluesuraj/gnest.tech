<?php
define('BRAND', 'GNEST');
define('BRAND_DOMAIN', 'gnest.tech');
define('WHATSAPP_NUMBER', '919103370117');
define('WHATSAPP_NUMBER_IN', '919103370117');
define('WHATSAPP_NUMBER_NP', '9779825120230');
define('WHATSAPP_MESSAGE', 'Hi, I\'d like to learn more about ' . BRAND . '!');
define('SITE_URL', 'https://gnest.tech');

// Base path for URL generation — auto-detect local vs production
$host = $_SERVER['HTTP_HOST'] ?? '';
$isProduction = ($host === 'gnest.tech' || $host === 'www.gnest.tech');
define('BASE_PATH', $isProduction ? '' : '/gnest.tech');

/** Helper: prepend base path to a route */
function url(string $path = '/'): string {
    return rtrim(BASE_PATH, '/') . '/' . ltrim($path, '/');
}
