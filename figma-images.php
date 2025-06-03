<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$key = require __DIR__ . '/keys.php';
$token = $key['FIGMA_TOKEN']; // Replace with your Figma token
$fileKey = 'yt5bIIAFtxVtpBHHCkarUB'; // Replace with your file key

// https://api.figma.com/v1/images/$fileKey


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.figma.com/v1/files/$fileKey/images");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Figma-Token: $token"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch); // ✨ move this BEFORE any output

if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
    exit;
}

if ($httpCode >= 400) {
    echo "HTTP error $httpCode: $response";
    exit;
}

header('Content-Type: application/json');

echo $response;
