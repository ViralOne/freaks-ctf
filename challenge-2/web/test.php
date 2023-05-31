<?php
// Database connection details
$servername = "127.0.0.1";
$username = "root";
$password = "Passw0rd";
$dbname = "workers";

// Create a new database connection
$conn = new mysqli($servername, $username, $password, $dbname, 0, '/var/run/mysqld/mysqld.sock');

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to retrieve all data from the users table
$query = "SELECT * FROM users";
$result = $conn->query($query);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Output the data for each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . "<br>";
        echo "Username: " . $row["username"] . "<br>";
        echo "Status: " . $row["status"] . "<br>";
        echo "<br>";
    }
} else {
    echo "No users found.";
}

// Close the database connection
$conn->close();
?>
