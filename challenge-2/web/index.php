<!DOCTYPE html>
<html>
<head>
    <title>XIPE Corp - Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #333;
            color: #fff;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-form {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #444;
        }

        .login-form input {
            width: 90%;
            margin-bottom: 10px;
            padding: 10px;
        }

        .login-form button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
        }

        .login-form h2 {
            margin-top: 0;
        }

        .login-form p {
            font-size: 14px;
            margin-top: 10px;
        }
    </style>
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
