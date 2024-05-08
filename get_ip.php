<?php

$ip = $_SERVER['REMOTE_ADDR'];


$to = "yourlocalindiandev@gmail.com";
$subject = "User connected to the server with the following ip";
$message = "The user's IP address is: " . $ip;
$headers = "From: webmaster@example.com" . "\r\n" .
    "Reply-To: webmaster@example.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);


echo $ip;
?>
