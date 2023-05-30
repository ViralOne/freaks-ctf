<?php
// Database connection details
$servername = "localhost";
$username = "admindb";
$password = "Passw0rd";
$dbname = "workers";

// Retrieve the submitted username and password
$submittedUsername = $_POST['username'];
$submittedPassword = $_POST['password'];

// Create a new database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to retrieve the user's information
$query = "SELECT * FROM users WHERE username = '$submittedUsername' AND password = '$submittedPassword'";
$result = mysqli_query($conn, $query);

// Check if the query returned any rows
if (mysqli_num_rows($result) == 1) {
    // User exists, retrieve the user's information
    $row = mysqli_fetch_assoc($result);
    $status = $row['status'];

    // Display the user's status
    echo "<h1>Status: $status</h1>";
} else {
    // User does not exist, display an error message
    echo "<h1>Invalid username or password.</h1>";
}

// Close the database connection
$conn->close();
?>
