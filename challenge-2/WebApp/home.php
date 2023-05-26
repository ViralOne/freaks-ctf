<!DOCTYPE html>
<html>
<head>
  <title>Main Page</title>
  <script>
    function getUserData() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var userData = xhr.responseText;
          document.getElementById("user-data").innerHTML = userData;
        }
      };
      xhr.open("GET", "userdata.php", true);
      xhr.send();
    }
  </script>
</head>
<body>
  <h1>Login Successful!</h1>
  <p>Welcome to the main page. Your login was successful.</p>

  <button onclick="getUserData()">Get User Data</button>
  <div id="user-data"></div>
</body>
</html>
