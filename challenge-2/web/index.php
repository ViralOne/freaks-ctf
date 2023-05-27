<?php

// Get user input from a form
$username = $_POST['username'];
$password = $_POST['password'];

// Connect to the database
$db = mysqli_connect("localhost", "root", "password", "my_database");

// Construct the query (with SQLi vulnerability)
$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

// Execute the query
$result = mysqli_query($db, $query);

// Check if the query returned any rows
if (mysqli_num_rows($result) == 1) {
    // User exists, display a welcome message
    $row = mysqli_fetch_assoc($result);
    echo "Welcome, " . $row['message'] . "!";
} else {
    // User does not exist, display an error message
    echo "Invalid username or password.";
}

// Close the database connection
mysqli_close($db);

?>
