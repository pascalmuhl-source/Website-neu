<?php
declare(strict_types=1);

$recipient = 'pascal@pascal-webdesign.de';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Honeypot: befülltes verstecktes Feld heißt Bot. Stiller Erfolg, keine Mail.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

function fieldOrFail(string $key): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    if ($value === '') {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => "missing_$key"]);
        exit;
    }
    // Header-Injection verhindern: keine Zeilenumbrüche in Einzelfeldern.
    return str_replace(["\r", "\n"], '', $value);
}

$name = fieldOrFail('name');
$emailRaw = fieldOrFail('email');
$message = trim((string) ($_POST['message'] ?? ''));

if (!filter_var($emailRaw, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_email']);
    exit;
}

if ($message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'missing_message']);
    exit;
}

$subject = 'Neue Anfrage über die Website';
$body = "Name: $name\nE-Mail: $emailRaw\n\nNachricht:\n$message\n";
$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n"
    . "Reply-To: $emailRaw\r\n"
    . "Content-Type: text/plain; charset=UTF-8";

$sent = mail($recipient, $subject, $body, $headers);

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
