<button onclick="history.back()">Go Back</button>
<?php
// Database connection details
$servername = "172.19.0.1"; // Docker network IP
$username = "admindb";
$password = "Passw0rd";
$dbname = "workers";

// Retrieve the submitted username and password
$submittedUsername = isset($_POST['username']) ? $_POST['username'] : '';
$submittedPassword = isset($_POST['password']) ? $_POST['password'] : '';

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
if (mysqli_num_rows($result) >= 1) {
    // User exists, retrieve and display all users' information
    echo "<h1>Account Details:</h1>";

    while ($row = mysqli_fetch_assoc($result)) {
        $username = $row['username'];
        $password = $row['password'];
        $status = $row['status'];

        echo "<p>Username: $username | Password: $password | Status: $status</p>";
    }
} else {
    // User does not exist, display an error message
    echo "<h1>Invalid username or password.</h1>";
}
// Close the database connection
$conn->close();
?>
