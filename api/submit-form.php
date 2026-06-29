<?php
/**
 * Form submission handler
 * Receives POST data, validates, stores to JSON, and sends email notification.
 */
require_once __DIR__ . '/../config/brand.php';

header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$formType = $_POST['form_type'] ?? '';
$validTypes = ['pilot', 'waitlist', 'contact', 'help'];

if (!in_array($formType, $validTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid form type']);
    exit;
}

// Sanitize all inputs
$data = [];
foreach ($_POST as $key => $value) {
    $data[$key] = htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
}
$data['submitted_at'] = date('Y-m-d H:i:s');
$data['ip'] = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Store to JSON file
$submissionsFile = __DIR__ . '/../storage/form-submissions.json';
$storageDir = dirname($submissionsFile);
if (!is_dir($storageDir)) {
    mkdir($storageDir, 0755, true);
}

$submissions = [];
if (file_exists($submissionsFile)) {
    $raw = file_get_contents($submissionsFile);
    $submissions = json_decode($raw, true) ?: [];
}
$submissions[] = $data;
file_put_contents($submissionsFile, json_encode($submissions, JSON_PRETTY_PRINT));

// Send email notification
$to = 'hello@gnest.tech'; // Change to your email
$subject = BRAND . ' — New ' . ucfirst($formType) . ' form submission';

$body = "New " . ucfirst($formType) . " form submission\n";
$body .= str_repeat('=', 40) . "\n\n";

foreach ($data as $key => $value) {
    if ($key === 'form_type') continue;
    $label = ucfirst(str_replace('_', ' ', $key));
    $body .= "$label: $value\n";
}

$headers = "From: noreply@" . BRAND_DOMAIN . "\r\n";
$headers .= "Reply-To: " . ($data['email'] ?? 'noreply@' . BRAND_DOMAIN) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

@mail($to, $subject, $body, $headers);

// Return success
echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
