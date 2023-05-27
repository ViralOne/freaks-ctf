<?php
session_start();

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
  header("Location: index.php");
  exit;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>XIPE Corp - Nuclear Research</title>
  <style>
    body {
      background-color: #111;
      color: #fff;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }

    h1 {
      color: #f00;
    }

    p {
      margin-bottom: 20px;
    }

    .input-box {
      margin-bottom: 10px;
      text-align: center;
    }

    input {
      background-color: #333;
      color: #fff;
      padding: 5px 10px;
      border: none;
    }

    button {
      background-color: #f00;
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }

    .countdown {
      color: #f00;
      font-weight: bold;
      font-size: 24px;
    }
  </style>
  <script>
    function startTimer(endDate, display) {
      var timer = setInterval(function () {
        var now = new Date().getTime();
        var distance = endDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (distance <= 0) {
          clearInterval(timer);
          alert("Nuclear explosion imminent!");
        }
      }, 1000);
    }

    window.onload = function () {
      var endDate = new Date("2023-06-28T00:00:00Z").getTime(); // Set end date for the timer
      var display = document.querySelector(".countdown");
      startTimer(endDate, display);
    };
  </script>
</head>
<body>
  <h1>XIPE Corp</h1>
  <p>Please enter the security keys to start the procedure of cooling the reactor:</p>
  <div class="input-box">
    <input type="text" id="key1" placeholder="Enter key 1">
  </div>
  <div class="input-box">
    <input type="text" id="key2" placeholder="Enter key 2">
  </div>
  <button onclick="validateKeys()">Submit</button>
  <p class="countdown"></p>
</body>
</html>