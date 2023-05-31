<?php
include(dirname(__FILE__) . '/login.php');
?>
<!DOCTYPE html>
<html>
<head>
    <title>XIPE Corp - Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="login-form">
            <h2>XIPE Corp Nuclear Plant</h2>
            <p>Workers Status Login</p>
            <form method="post" action="login.php">
                <input type="text" name="username" placeholder="Username" required><br>
                <input type="password" name="password" placeholder="Password" required><br>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</body>
</html>
