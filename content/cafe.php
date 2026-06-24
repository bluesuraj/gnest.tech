<?php
require_once __DIR__ . '/../config/brand.php';

$cafeHero = [
    'eyebrow' => 'Cafe POS',
    'heading' => 'The POS made for cafes',
    'sub' => 'Counter billing, KOT, UPI, GST — everything your cafe needs to run from open to close. Works on the phone in your pocket.',
    'ctaPrimary' => 'Start free',
    'ctaSecondary' => 'Join founding cafes',
];

$morningTimeline = [
    ['time' => '7:00 AM', 'title' => 'Opening up', 'description' => 'Unlock the app, check yesterday\'s summary, set today\'s specials. Your cafe is ready before the first customer walks in.', 'icon' => 'sunrise'],
    ['time' => '8:30 AM', 'title' => 'Morning rush — offline', 'description' => 'The internet drops mid-rush. Bills keep printing, KOTs keep flowing to the kitchen. Zero interruption.', 'icon' => 'wifi-off'],
    ['time' => '10:00 AM', 'title' => 'UPI payment recorded', 'description' => 'Customer scans the QR on the receipt. Payment auto-logs. No fumbling with a separate UPI app.', 'icon' => 'qr-code'],
    ['time' => '11:30 AM', 'title' => 'Low stock alert', 'description' => 'WhatsApp ping: \'Oat milk below 2 litres.\' You message the supplier before the lunch crowd hits.', 'icon' => 'alert'],
    ['time' => '2:00 PM', 'title' => 'Loyalty points added', 'description' => 'Regular customer\'s 10th visit. Points added automatically. She gets a free cookie next time.', 'icon' => 'heart'],
    ['time' => '6:00 PM', 'title' => 'Shift handover', 'description' => 'Evening barista clocks in with their PIN. Shift-wise sales split cleanly for accountability.', 'icon' => 'users'],
    ['time' => '10:00 PM', 'title' => 'Day-end report', 'description' => 'Daily summary on your phone before you lock up. Sales, top items, GST collected — all in one screen.', 'icon' => 'bar-chart'],
];

$cafeFeatures = [
    ['title' => 'Menu with modifiers', 'description' => 'Oat milk +₹40, extra shot +₹30 — modifiers that match how your barista actually takes orders.'],
    ['title' => 'Table & token numbers', 'description' => 'Assign tables for dine-in or token numbers for takeaway. Flexible for any cafe layout.'],
    ['title' => 'KOT printing', 'description' => 'Kitchen order tickets print automatically to your kitchen printer the moment a bill is placed.'],
    ['title' => 'UPI QR on receipt', 'description' => 'Every printed receipt includes a UPI QR code. Customers scan and pay — no separate app needed.'],
    ['title' => 'Day-end summary on WhatsApp', 'description' => 'Get a clean summary of the day\'s sales, top items, and GST collected on WhatsApp every night.'],
    ['title' => 'GST-ready invoices', 'description' => 'Every bill includes GSTIN, HSN codes, and tax breakdowns. Export-ready for your CA.'],
];

$pilotProgram = [
    'heading' => 'Be one of our founding cafes',
    'sub' => 'Join our early partner program. Get priority support, direct input on features, and a founding-member rate locked forever.',
    'perks' => [
        'Free Pro plan during the pilot period',
        'Direct WhatsApp line to the founding team',
        'Your feature requests built first',
        'Founding-member pricing locked for life',
        'Your logo on our website as a launch partner',
    ],
];

$cafeTestimonial = [
    'quote' => 'We went from a register notebook to printing GST bills in one afternoon. The offline mode saved us during a power cut on our busiest Saturday. I check sales on my phone every morning now.',
    'name' => 'Founding Cafe Partner',
    'role' => 'Owner',
    'cafe' => 'Cafe name',
    'location' => 'Delhi NCR',
];

$cafeFaqs = [
    ['question' => 'Can I customise my cafe\'s menu with modifiers?', 'answer' => 'Yes. Add unlimited modifiers (extra shot, oat milk, sugar level) with custom pricing to any item. Group modifiers into categories like \'Milk type\' or \'Size\'.'],
    ['question' => 'Does it support both dine-in and takeaway?', 'answer' => 'Absolutely. Assign table numbers for dine-in or auto-generate token numbers for takeaway orders. Switch between modes in one tap.'],
    ['question' => 'What printers work with it?', 'answer' => 'Any 58mm or 80mm Bluetooth thermal printer. Most affordable Bluetooth thermal printers work out of the box.'],
    ['question' => 'Can my baristas have separate logins?', 'answer' => 'Yes. Each staff member gets a unique PIN. You can see who billed what, and restrict access based on role (owner, manager, cashier).'],
    ['question' => 'How does the pilot program work?', 'answer' => 'Sign up through the form on this page. We\'ll set you up on a WhatsApp group with the ' . BRAND . ' founding team. You get the Pro plan free during the pilot, and your feedback shapes what we build next.'],
];
