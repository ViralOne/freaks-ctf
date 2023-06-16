const express = require('express');
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Login route
app.get('/', (req, res) => {
  res.render('login');
});

// Maintenance menu route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform password verification
  if (password === "todo" && username === "todo") {
    res.render('dashboard');
  } else {
    // Return an error response
    res.send('<script>alert("Invalid credentials."); window.location="/";</script>');  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
