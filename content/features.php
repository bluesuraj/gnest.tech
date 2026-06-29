<?php
$featuresHero = [
    'heading' => 'Everything a cafe needs. Nothing it doesn\'t.',
    'sub' => 'Built from the ground up for cafes. Every feature solves a real problem — no bloat, no features you\'ll never use.',
];

$featureDetails = [
    ['id' => 'billing', 'title' => 'Billing & KOT', 'headline' => 'Take orders and print bills in seconds — even offline.', 'description' => 'One-tap counter billing designed for the speed of a morning rush. Kitchen order tickets print the moment a bill is placed, so your barista and kitchen are always in sync.', 'bullets' => ['One-tap item selection with smart search', 'Auto-generate KOTs to kitchen printers', 'Table numbers for dine-in, tokens for takeaway', 'Split bills between customers', 'Hold and recall orders']],
    ['id' => 'offline', 'title' => 'Offline mode', 'headline' => 'Your cafe never stops billing.', 'description' => 'Internet drops during a power cut or a bad connection day. Bills keep printing, KOTs keep flowing, payments keep recording. Everything syncs automatically when you reconnect.', 'bullets' => ['Full billing capability without internet', 'KOT printing works offline', 'Payment recording continues', 'Auto-sync when connection returns', 'Zero data loss — guaranteed']],
    ['id' => 'gst', 'title' => 'GST invoicing', 'headline' => 'Every bill is tax-ready.', 'description' => 'Invoices include your GSTIN, HSN/SAC codes, and tax breakdowns per applicable guidelines. Export to Excel for your accountant at the end of each month.', 'bullets' => ['GSTIN & HSN/SAC codes on every invoice', 'Automatic tax calculation and breakup', 'GST summary reports by period', 'Export to Excel / CSV', 'Compliant with latest tax guidelines']],
    ['id' => 'payments', 'title' => 'Payments', 'headline' => 'UPI, cards, cash — all in one place.', 'description' => 'Record every payment method your customers use. UPI QR codes print on receipts so customers can scan and pay. Daily reconciliation happens automatically.', 'bullets' => ['UPI, card, and cash payment tracking', 'UPI QR code on every printed receipt', 'Auto-reconcile daily totals', 'Split payments across methods', 'Payment method breakdown in reports']],
    ['id' => 'inventory', 'title' => 'Inventory', 'headline' => 'Know when supplies run low — before they run out.', 'description' => 'Track raw materials and finished goods in real time. Get low-stock alerts on WhatsApp so you can reorder before it affects service.', 'bullets' => ['Real-time stock tracking by ingredient', 'Auto-deduct inventory with every order', 'Low-stock alerts via WhatsApp', 'Supplier purchase orders in-app', 'Wastage tracking and reports']],
    ['id' => 'reports', 'title' => 'Reports', 'headline' => 'Yesterday\'s sales before your first chai.', 'description' => 'Clean dashboards on your phone. See daily, weekly, and monthly sales. Know your best sellers, peak hours, and trends at a glance.', 'bullets' => ['Daily, weekly, monthly sales dashboards', 'Best-selling items and categories', 'Peak hours analysis', 'WhatsApp day-end summary', 'Export to Excel for your CA']],
    ['id' => 'staff', 'title' => 'Staff management', 'headline' => 'PINs for every barista. See who sold what.', 'description' => 'Give each team member their own PIN. Control what they can access based on their role. Track shift-wise performance without micromanaging.', 'bullets' => ['Individual PINs for each staff member', 'Role-based access control', 'Shift-wise sales tracking', 'Clock-in / clock-out log', 'Performance reports per staff']],
    ['id' => 'loyalty', 'title' => 'Customer loyalty', 'headline' => 'Remember regulars. Reward repeat visits.', 'description' => 'Automatically save customer details from bills. Track visit history, preferences, and reward loyalty with a simple points system.', 'bullets' => ['Auto-save customer details from bills', 'Visit history and order preferences', 'Points-based loyalty program', 'Birthday and anniversary reminders', 'Customer segments for targeted offers']],
];

$comparisonRows = [
    ['feature' => 'Unlimited bills', 'free' => true, 'pro' => true],
    ['feature' => 'GST invoices', 'free' => true, 'pro' => true],
    ['feature' => 'Offline billing', 'free' => true, 'pro' => true],
    ['feature' => 'UPI + cash recording', 'free' => true, 'pro' => true],
    ['feature' => 'Receipt printing', 'free' => true, 'pro' => true],
    ['feature' => 'Basic daily reports', 'free' => true, 'pro' => true],
    ['feature' => 'Devices', 'free' => '1', 'pro' => 'Up to 5'],
    ['feature' => 'Inventory tracking', 'free' => false, 'pro' => true],
    ['feature' => 'Staff PINs & roles', 'free' => false, 'pro' => true],
    ['feature' => 'Advanced reports & exports', 'free' => false, 'pro' => true],
    ['feature' => 'Customer loyalty', 'free' => false, 'pro' => true],
    ['feature' => 'WhatsApp day-end summary', 'free' => false, 'pro' => true],
    ['feature' => 'Priority support', 'free' => false, 'pro' => true],
];
