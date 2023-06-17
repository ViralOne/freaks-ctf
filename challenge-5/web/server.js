const express = require('express');
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Parse JSON request bodies
app.use(express.json());

// Login route
app.get('/', (req, res) => {
  res.render('login');
});

// Maintenance menu route
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Here, you can implement your login logic
  // For simplicity, let's just check if the username and password are both "admin"

  if (username === 'admin' && password === 'admin') {
    res.render('dashboard');
  } else {
    res.send('<script>alert("Invalid credentials."); window.location="/";</script>');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
