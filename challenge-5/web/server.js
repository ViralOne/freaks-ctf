const express = require('express');
const app = express();
const port = 6374;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.cookie('role', username);

  if (username === 'worker' && password === 'tempassw0rd') {
    res.redirect('/dashboard');
  } else {
    res.send('<script>alert("Invalid credentials."); window.location="/";</script>');
  }
});

app.get('/dashboard', (req, res) => {
  const { role } = req.cookies;

  if (role === 'admin') {
    const maliciousScript = `<script>alert(document.cookie)</script>`;
    res.render('dashboard', { maliciousScript });
  } else {
    res.send('<script>alert("Unauthorized access, admin only!"); window.location="/";</script>');
  }
});

const tokens = {
  token1: 'dIzW9htx1Ii5oR4qgoC12XC8bW070cxXBm7IXSTH0YwxKTZDXSlo7KGdy6qMmdL9',
  token2: 'taSwYsvX53/HrM!eW3ir4TLPphWFHQ0kcCr=p/-k!dBkTkYeqa8T6l/BeMH/OThh',
};

// Set the expiration date and time
const expirationDate = new Date('2023-06-18T00:00:00Z');

app.get('/power-control', (req, res) => {
  const currentTime = new Date();
  const remainingTime = Math.max(0, expirationDate - currentTime) / 1000;

  res.render('power-control', { remainingTime, ...tokens });
});

app.post('/power-token', (req, res) => {
  const { token1, token2 } = req.body;
  const currentTime = new Date();
  const remainingTime = Math.max(0, expirationDate - currentTime) / 1000;

  if (token1 === tokens.token1 && token2 === tokens.token2 || token1 === tokens.token2 && token2 === tokens.token1) {
    if (remainingTime > 0) {
      res.render('success');
    } else {
      res.render('failure');
    }
  } else {
    // Invalid tokens
    res.send('<script>alert("Invalid tokens"); window.location="/power-control";</script>');
  }
});

app.post('/check-token', (req, res) => {
  const { token } = req.body;

  if (token === 'd22fc547518b36f7ba26acc8cd2f973c') {
    res.redirect('/power-control');
  } else {
    res.send('<script>alert("Invalid token."); window.location="/dashboard";</script>');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
