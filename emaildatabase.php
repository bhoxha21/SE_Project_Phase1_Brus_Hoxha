<?php
// Connect to the database
$servername = "localhost";
$username = "brus";
$password = "123";
$dbname = "newsletter_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the INSERT statement
$stmt = $conn->prepare("INSERT INTO newsletter_emails (email) VALUES (?)");
$stmt->bind_param("s", $email);

// Get the email from the form submission
$email = $_POST['email'];

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
