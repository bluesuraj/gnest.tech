<?php
$hardwareHero = [
    'heading' => 'Bring the device you already own',
    'sub' => 'No proprietary tablets. No hardware leases. Your phone is the POS. Add a Bluetooth printer when you\'re ready.',
];

$devices = [
    ['name' => 'Android phone', 'description' => 'Any phone running Android 8+ works. Your daily phone or a dedicated counter device.', 'icon' => 'phone', 'compatible' => ['Samsung Galaxy A series', 'Redmi Note series', 'Realme Narzo series', 'OnePlus Nord series', 'Any Android 8+ phone']],
    ['name' => 'Android tablet', 'description' => 'Bigger screen for a dedicated counter setup. Perfect for dine-in cafes.', 'icon' => 'tablet', 'compatible' => ['Samsung Galaxy Tab A', 'Lenovo Tab M10', 'Realme Pad', 'Any Android 8+ tablet']],
    ['name' => 'iPad', 'description' => 'Use your iPad as a dedicated counter POS. Great for larger displays.', 'icon' => 'tablet', 'compatible' => ['iPad Air', 'iPad Pro', 'iPad mini', 'Any iPad with iOS 15+']],
    ['name' => 'Bluetooth thermal printer', 'description' => '58mm or 80mm receipt printers. Most Bluetooth models on Amazon work out of the box.', 'icon' => 'printer', 'compatible' => ['58mm Bluetooth printers', '80mm Bluetooth printers', 'Epson TM series (Bluetooth)', 'Generic ESC/POS printers']],
    ['name' => 'Barcode scanner', 'description' => 'Optional. Handy for packaged goods or inventory check-in.', 'icon' => 'scanner', 'compatible' => ['Any Bluetooth barcode scanner', 'USB barcode scanners (with OTG)']],
    ['name' => 'Cash drawer', 'description' => 'Optional. Connects via the thermal printer\'s kick port.', 'icon' => 'drawer', 'compatible' => ['Any RJ11 cash drawer', 'Connects via printer kick port']],
];

$starterSetup = [
    'heading' => 'Recommended starter setup',
    'sub' => 'Everything you need to start billing, under $60.',
    'items' => [
        ['name' => 'Your phone', 'price' => 'Already own'],
        ['name' => '58mm Bluetooth thermal printer', 'price' => '$25–40'],
        ['name' => 'Printer paper rolls (pack of 10)', 'price' => '$3–5'],
    ],
    'total' => 'Under $45 total',
];
