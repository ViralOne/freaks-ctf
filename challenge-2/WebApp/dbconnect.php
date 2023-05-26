<?php
// Database connection details
$host = "localhost";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

// Create a database connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
