const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an express app
const app = express();

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Store the CTF challenges and their valid texts
const challenges = [
  {
    id: 1,
    name: 'Challenge 1',
    description: 'Network Exploitation',
    tips: 'Save bedgeID, the long token, user:pass url & the ssh',
    validText: ['dIzW9htx1Ii5oR4qgoC12XC8bW070cxXBm7IXSTH0YwxKTZDXSlo7KGdy6qMmdL9', "AF0069", "admin", "f4k3Freak", "ssh -p 2222 worker@"]
  },
  {
    id: 2,
    name: 'Challenge 2',
    description: 'Vulnerable WebApp',
    tips: 'Use the most common sqli queries, LeakedDoc.txt its very important',
    validText: ['LeakedDoc.txt', 'sqli', 'SQLi']
  },
  {
    id: 3,
    name: 'Challenge 3',
    description: 'Use your brain',
    tips: 'Affine Cipher a & b each one has a number -> SAML -> Base64 -> MD5',
    validText: ['d41e98d1eafa6d6011d3a70f1a5b92f0', 'ZDQxZTk4ZDFlYWZhNmQ2MDExZDNhNzBmMWE1YjkyZjA=', 'BUAxCoAwDHxTxdVBubg1UBBK7wUhsXv09YVoySd24n5Hp+lsW4Ukoab/NWuXMjw++nks', 'FYEbGsEaHLbXbhZFyfk1YFFO7aYlwBz09CZscWh24r5Lt+pwA4Yosef/RAyBQna++row', 'Passw0rd']
  },
  {
    id: 4,
    name: 'Challenge 4',
    description: 'Social Engineering',
    tips: 'How do you exit vim',
    validText: [':q', 'vim', 'exit vim']
  },
  {
    id: 5,
    name: 'Challenge 5',
    description: 'Save the world',
    tips: 'I love cookies when I am an admin, Dashboard answer its in challenge 4, two long tokens and im done',
    validText: ['dIzW9htx1Ii5oR4qgoC12XC8bW070cxXBm7IXSTH0YwxKTZDXSlo7KGdy6qMmdL9', 'taSwYsvX53/HrM!eW3ir4TLPphWFHQ0kcCr=p/-k!dBkTkYeqa8T6l/BeMH/OThh', 'admin']
  }
];

// Route for getting all challenges
app.get('/challenges', (req, res) => {
  res.json(challenges);
});

// Route for checking the validity of a challenge text
app.post('/check', (req, res) => {
  const { challengeId, text, showTips } = req.body;
  const challenge = challenges.find(challenge => challenge.id === challengeId);

  if (!challenge) {
    res.status(404).json({ error: 'Challenge not found' });
    return;
  }

  // Perform validation logic
  const isValid = challenge.validText.includes(text);

  // Prepare the response object
  const response = {
    valid: isValid
  };

  if (showTips && isValid) {
    response.tips = challenge.tips;
  }

  res.json(response);
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
