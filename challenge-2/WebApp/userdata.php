<?php
require_once "dbconnect.php";

// Fetch user data from the database
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Username: " . $row["username"] . "<br>";
        echo "Email: " . $row["email"] . "<br><br>";
    }
} else {
    echo "No user data found.";
}

$conn->close();
?>
