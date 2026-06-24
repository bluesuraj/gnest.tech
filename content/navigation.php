<?php
$mainNav = [
    ['label' => 'Home', 'href' => '/', 'icon' => 'home'],
    ['label' => 'Features', 'href' => '/features', 'icon' => 'sparkles'],
    ['label' => 'Pricing', 'href' => '/pricing', 'icon' => 'tag'],
    [
        'label' => 'Business Types',
        'href' => '#',
        'icon' => 'store',
        'children' => [
            ['label' => 'Cafe', 'href' => '/cafe-pos', 'icon' => 'coffee'],
            ['label' => 'Restaurant', 'href' => '/restaurant-pos', 'icon' => 'utensils'],
            ['label' => 'Guest House', 'href' => '/guesthouse-pos', 'icon' => 'bed'],
        ],
    ],
    ['label' => 'Help', 'href' => '/help', 'icon' => 'help-circle'],
];

$footerSections = [
    [
        'title' => 'Product',
        'links' => [
            ['label' => 'Features', 'href' => '/features'],
            ['label' => 'Pricing', 'href' => '/pricing'],
            ['label' => 'Hardware', 'href' => '/hardware'],
        ],
    ],
    [
        'title' => 'Business Types',
        'links' => [
            ['label' => 'Cafe POS', 'href' => '/cafe-pos'],
            ['label' => 'Restaurant POS', 'href' => '/restaurant-pos'],
            ['label' => 'Guest House POS', 'href' => '/guesthouse-pos'],
        ],
    ],
    [
        'title' => 'Resources',
        'links' => [
            ['label' => 'Blog', 'href' => '/blog'],
            ['label' => 'Help Center', 'href' => '/help'],
            ['label' => 'API Docs', 'href' => '#'],
        ],
    ],
    [
        'title' => 'Legal',
        'links' => [
            ['label' => 'Privacy Policy', 'href' => '/privacy'],
            ['label' => 'Terms of Service', 'href' => '/terms'],
        ],
    ],
];
