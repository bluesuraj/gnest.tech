<?php
require_once __DIR__ . '/../config/brand.php';

$aboutHero = [
    'heading' => 'Built for the chai-and-croissant economy',
    'sub' => BRAND . ' started with a simple question: why does a 10-table cafe need to spend a fortune on billing software? We\'re building the POS that cafes actually deserve — affordable, offline-first, and human-supported.',
];

$mission = [
    'heading' => 'Our mission',
    'body' => 'Make modern point-of-sale technology accessible to every small food business. No hardware lock-in, no enterprise pricing, no jargon.',
];

$values = [
    ['title' => 'Offline first', 'description' => 'Internet is unreliable in most cafes. Everything we build works without it.'],
    ['title' => 'Radically simple', 'description' => 'If a cafe owner can\'t figure it out in 10 minutes, we haven\'t built it right.'],
    ['title' => 'Transparent pricing', 'description' => 'One flat price, published on the website. No hidden fees, no \'contact sales\' nonsense.'],
    ['title' => 'Human support', 'description' => 'Real people on WhatsApp, in Hindi and English. Not a chatbot, not a ticket system.'],
    ['title' => 'BYOD', 'description' => 'Bring your own device. We\'ll never lock you into proprietary hardware.'],
    ['title' => 'Built for real conditions', 'description' => 'GST-first, UPI-native, optimised for Android and iOS devices and unstable connections.'],
];

$roadmap = [
    ['label' => 'Cafe POS', 'description' => 'Counter billing, KOT, UPI, GST, offline mode. Live now.', 'status' => 'current'],
    ['label' => 'Restaurant POS', 'description' => 'Table management, KDS, split bills, multi-floor.', 'status' => 'upcoming'],
    ['label' => 'Guest House POS', 'description' => 'Room-folio billing, check-in/out, housekeeping.', 'status' => 'upcoming'],
];
