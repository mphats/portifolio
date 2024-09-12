<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = "mphatsos45@gmail.com";

    // Subject and email body
    $mailSubject = "New message from: " . $name . " - " . $subject;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $mailSubject, $body, $headers)) {
        echo "Message sent successfully.";
        header("Location: index.html");
        exit();
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
