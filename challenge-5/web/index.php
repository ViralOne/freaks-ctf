<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = base64_decode("YWRtaW4=");
  $password = base64_decode("cGFzc3dvcmQ=");

  $enteredUsername = $_POST['username'];
  $enteredPassword = $_POST['password'];

  if ($enteredUsername === $username && $enteredPassword === $password) {
    $_SESSION['logged_in'] = true;
    header("Location: main.php");
    exit;
  } else {
    $error = "Invalid username or password.";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
</head>
<body>
  <h2>Login Page</h2>
  <form method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>

    <input type="submit" value="Login">
  </form>
  
  <?php if (isset($error)) { ?>
    <p><?php echo $error; ?></p>
  <?php } ?>
</body>
</html>
