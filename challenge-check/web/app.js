const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Sample valid texts
const challenges = [
  {
    id: 1,
    description: 'Network Exploitation',
    tips: 'Save bedgeID, the long token, user:pass URL & the SSH',
    validText: [
      'dIzW9htx1Ii5oR4qgoC12XC8bW070cxXBm7IXSTH0YwxKTZDXSlo7KGdy6qMmdL9', 'AF0069', 'YWRtaW4=', 'ZjRrM0ZyZWFr', 'admin', 'f4k3Freak'
    ]
  },
  {
    id: 2,
    description: 'Vulnerable WebApp',
    tips: 'Use the most common SQLi queries, LeakedDoc.txt is very important',
    validText: [
      'LeakedDoc.txt', 'sqli', 'buliver', 'modchat', 'M0r3Lor3'
    ]
  },
  {
    id: 3,
    description: 'Use your brain',
    tips: 'Affine Cipher a & b each one has a number -> SAML -> Base64 -> MD5',
    validText: [
      'd41e98d1eafa6d6011d3a70f1a5b92f0', 'ZDQxZTk4ZDFlYWZhNmQ2MDExZDNhNzBmMWE1YjkyZjA=', 'BUAxCoAwDHxTxdVBubg1UBBK7wUhsXv09YVoySd24n5Hp+lsW4Ukoab/NWuXMjw++nks', 'FYEbGsEaHLbXbhZFyfk1YFFO7aYlwBz09CZscWh24r5Lt+pwA4Yosef/RAyBQna++row', 'Passw0rd'
    ]
  },
  {
    id: 4,
    description: 'Social Engineering',
    tips: 'How do you exit Vim?',
    validText: [
      ':q', ':wq', 'vim', 'exit Vim', 'AF0069', 'Passw0rd', 'd22fc547518b36f7ba26acc8cd2f973c'
    ]
  },
  {
    id: 5,
    description: 'Save the world',
    tips: 'I love cookies when I am an admin. Dashboard answer is in challenge 4. Two long tokens, and I\'m done',
    validText: [
      'dIzW9htx1Ii5oR4qgoC12XC8bW070cxXBm7IXSTH0YwxKTZDXSlo7KGdy6qMmdL9', 'admin', 'd22fc547518b36f7ba26acc8cd2f973c', 'taSwYsvX53/HrM!eW3ir4TLPphWFHQ0kcCr=p/-k!dBkTkYeqa8T6l/BeMH/OThh', 'cookie', 'worker', 'tempassw0rd'
    ]
  },
  {
    id: 6,
    description: 'Last token',
    tips: 'Try different directories & see what you can do with: ; cat',
    validText: [
      'taSwYsvX53/HrM!eW3ir4TLPphWFHQ0kcCr=p/-k!dBkTkYeqa8T6l/BeMH/OThh'
    ]
  }
];

// Handle the answer validation
app.post('/check', (req, res) => {
  const answer = req.body.answer;
  const showTips = req.body.tips === true;

  const validChallenges = [];

  for (const challenge of challenges) {
    const validTextIndex = challenge.validText.findIndex(
      validText => validText.toLowerCase() === answer.toLowerCase()
    );

    if (validTextIndex !== -1) {
      const validChallenge = {
        id: challenge.id,
        description: challenge.description
      };

      if (showTips) {
        validChallenge.tips = challenge.tips;
      }

      validChallenges.push(validChallenge);
    }
  }

  if (validChallenges.length === 1) {
    const response = {
      message: `Congratulations! Your answer "${answer}" is valid for challenge ${validChallenges[0].id}: "${validChallenges[0].description}".`
    };

    if (showTips && validChallenges[0].tips) {
      response.tips = validChallenges[0].tips;
    }

    res.json(response);
  } else if (validChallenges.length > 1) {
    const challengeMessage = validChallenges
      .map(challenge => `${challenge.id} - ${challenge.description}`)
      .join(', ');

    const response = {
      message: `Congratulations! Your answer "${answer}" is valid and was found in multiple challenges: ${challengeMessage}.`
    };

    if (showTips) {
      const tips = validChallenges
        .map(challenge => challenge.tips)
        .filter(tips => !!tips);

      if (tips.length > 0) {
        response.tips = tips;
      }
    }

    res.json(response);
  } else {
    res.json({
      message: 'Sorry, your answer is not valid.'
    });
  }
});

// Render the index.ejs template
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
