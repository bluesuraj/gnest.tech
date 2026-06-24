<?php
$route = isset($_GET['route']) ? trim($_GET['route'], '/') : '';

$routes = [
    ''                => 'pages/home.php',
    'features'        => 'pages/features.php',
    'pricing'         => 'pages/pricing.php',
    'cafe-pos'        => 'pages/cafe-pos.php',
    'about'           => 'pages/about.php',
    'hardware'        => 'pages/hardware.php',
    'help'            => 'pages/help.php',
    'blog'            => 'pages/blog.php',
    'restaurant-pos'  => 'pages/restaurant-pos.php',
    'guesthouse-pos'  => 'pages/guesthouse-pos.php',
    'privacy'         => 'pages/privacy.php',
    'terms'           => 'pages/terms.php',
];

if (array_key_exists($route, $routes)) {
    $currentPage = $route ?: 'home';
    require __DIR__ . '/' . $routes[$route];
} elseif (preg_match('#^blog/([a-z0-9\-]+)$#', $route, $matches)) {
    $blogSlug = $matches[1];
    $currentPage = 'blog-post';
    require __DIR__ . '/pages/blog-post.php';
} else {
    http_response_code(404);
    $currentPage = '404';
    require __DIR__ . '/pages/404.php';
}
