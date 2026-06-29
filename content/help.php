<?php
$helpHero = [
    'heading' => 'How can we help?',
    'sub' => 'Search for answers or browse by category below.',
];

$helpCategories = [
    [
        'title' => 'Getting started',
        'description' => 'Download, setup, first bill — step by step.',
        'icon' => '🚀',
        'id' => 'getting-started',
        'articles' => [
            ['question' => 'How do I download the app?', 'answer' => 'Search for the app on the Google Play Store, install it, and sign up with your phone number. The app works on any Android 8+ device.'],
            ['question' => 'How do I set up my first menu?', 'answer' => 'After signing up, go to Menu > Add Category (e.g., Hot Drinks, Snacks). Then add items with name, price, and optional modifiers like "oat milk" or "extra shot". You can start billing immediately.'],
            ['question' => 'How long does setup take?', 'answer' => 'Most cafes are billing within 30 minutes. Add your menu, connect a printer (optional), and you\'re ready. No training needed.'],
            ['question' => 'Do I need special hardware?', 'answer' => 'No. Any Android phone or tablet works. If you want printed receipts, pair a Bluetooth thermal printer ($25–45). See our Hardware page for recommendations.'],
        ],
    ],
    [
        'title' => 'Billing',
        'description' => 'Orders, KOT, receipts, and offline mode.',
        'icon' => '🧾',
        'id' => 'billing',
        'articles' => [
            ['question' => 'How do I create a new order?', 'answer' => 'Tap items from your menu, adjust quantities, add modifiers, and tap "Bill". The receipt is generated instantly. You can print, share on WhatsApp, or email it.'],
            ['question' => 'Does billing work without internet?', 'answer' => 'Yes. Offline mode stores all transactions locally and syncs automatically when connectivity returns. You never miss a sale.'],
            ['question' => 'How does KOT (Kitchen Order Ticket) work?', 'answer' => 'When you create an order, a KOT is sent to your kitchen printer automatically. The kitchen sees the order details, table/token number, and any special instructions.'],
            ['question' => 'Can I split a bill?', 'answer' => 'Yes. On the bill screen, tap "Split" to divide by items or by equal amounts among guests.'],
        ],
    ],
    [
        'title' => 'GST & invoices',
        'description' => 'GSTIN, HSN codes, tax reports, and exports.',
        'icon' => '📄',
        'id' => 'gst',
        'articles' => [
            ['question' => 'How do I add my GSTIN?', 'answer' => 'Go to Settings > Business Details > GSTIN. Enter your 15-digit GSTIN and it will appear on all invoices automatically. HSN codes can be set per item.'],
            ['question' => 'Are the invoices GST-compliant?', 'answer' => 'Yes. Invoices include GSTIN, HSN/SAC codes, tax breakup, and sequential invoice numbers as required by GST regulations.'],
            ['question' => 'Can I export GST reports?', 'answer' => 'Yes. Go to Reports > GST Summary to view tax collected. Export as Excel or PDF for your accountant. Data matches the format needed for tax filing.'],
            ['question' => 'What if my cafe is not GST-registered?', 'answer' => 'No problem. You can still use the app for billing. Just skip the GSTIN field in settings and invoices will be generated without GST details.'],
        ],
    ],
    [
        'title' => 'Printers',
        'description' => 'Connecting, troubleshooting, and recommended models.',
        'icon' => '🖨️',
        'id' => 'printers',
        'articles' => [
            ['question' => 'Which printers are supported?', 'answer' => 'Any Bluetooth or USB thermal printer (58mm or 80mm width). Popular models: Epson TM-T20, TVS RP 3160, Generic 58mm Bluetooth printers. See our Hardware page for the full list.'],
            ['question' => 'How do I connect a Bluetooth printer?', 'answer' => 'Turn on the printer, enable Bluetooth on your phone, pair the printer from phone settings. Then in the app, go to Settings > Printer > Select your paired printer. Test with a sample print.'],
            ['question' => 'The printer is not printing. What do I do?', 'answer' => 'Check: 1) Is the printer turned on and paper loaded? 2) Is Bluetooth paired in phone settings? 3) Is the correct printer selected in app settings? 4) Try restarting both the printer and the app. If it persists, message us on WhatsApp.'],
            ['question' => 'Can I use the app without a printer?', 'answer' => 'Absolutely. You can share digital receipts via WhatsApp or email. A printer is optional and only needed if you want paper receipts.'],
        ],
    ],
    [
        'title' => 'Account',
        'description' => 'Profile, plans, billing, and team members.',
        'icon' => '👤',
        'id' => 'account',
        'articles' => [
            ['question' => 'How do I change my plan?', 'answer' => 'Go to Settings > Subscription. You can upgrade from Free to Pro anytime. Downgrading is available at the end of your billing cycle.'],
            ['question' => 'How do I add staff members?', 'answer' => 'Go to Settings > Staff. Add members with their name and assign a PIN. Each staff member logs in with their PIN so you can track who created which orders.'],
            ['question' => 'Can I use the app on multiple devices?', 'answer' => 'On the Free plan, one device is supported. Pro plan supports multiple devices syncing to the same account. All data stays in sync in real time.'],
            ['question' => 'How do I reset my password?', 'answer' => 'On the login screen, tap "Forgot password" and enter your registered phone number or email. You\'ll receive an OTP to set a new password.'],
        ],
    ],
];

$whatsappSupport = [
    'heading' => 'Message us, get a reply in minutes',
    'sub' => 'Our team is on WhatsApp, Monday to Saturday, 9 AM — 9 PM. Real humans, not bots.',
    'hours' => 'Mon–Sat, 9 AM — 9 PM',
];
