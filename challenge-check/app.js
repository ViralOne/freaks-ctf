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
    tips: 'ToDO',
    validText: 'c1'
  },
  {
    id: 2,
    name: 'Challenge 2',
    description: 'Vulnerable WebApp',
    tips: 'ToDO',
    validText: 'c2'
  },
  {
    id: 3,
    name: 'Challenge 3',
    description: 'Use your brain',
    tips: 'ToDO',
    validText: 'c3'
  },
  {
    id: 4,
    name: 'Challenge 4',
    description: 'Social Engineering',
    tips: 'ToDO',
    validText: 'c4'
  },
  {
    id: 5,
    name: 'Challenge 5',
    description: 'Save the world',
    tips: 'ToDO',
    validText: 'c5'
  }
];

// Route for getting all challenges
app.get('/challenges', (req, res) => {
  res.json(challenges);
});

// Route for checking the validity of a challenge text
app.post('/check', (req, res) => {
  const { challengeId, text, showTips} = req.body;
  const challenge = challenges.find(challenge => challenge.id === challengeId);

  if (!challenge) {
    res.status(404).json({ error: 'Challenge not found' });
    return;
  }

  // Perform validation logic
  const isValid = challenge.validText === text;

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
