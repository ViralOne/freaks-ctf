const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static file serving from the public directory
app.use(express.static('public'));

const correctBadge = 'AF0069';
const correctPassword = 'Passw0rd';

let messageCount = 0;

// Define the messages array
const messages = [
  "We have strict security measures in place to protect the nuclear facility. I mean, we even have a bouncer at the entrance. He checks IDs and dance moves.",
  "The nuclear reactor is operating at full capacity. It's like the Energizer Bunny on steroids, just keeps going and going.",
  "Somebody needs to clean the reactor, who is in line? I swear, it's like trying to assign chores to a bunch of teenagers. Good luck with that!",
  "I heard that the facility is equipped with state-of-the-art radiation detectors. I mean, they probably have a Geiger counter that doubles as a disco ball. Safety first, but let's party!",
  "All personnel must undergo thorough background checks before entering the facility and that's so yesterday... I guess it's time to dig up those old embarrassing photos from college, huh?",
  "They said that there are regular drills to ensure preparedness in case of emergencies. But I don't believe so. Last time, it was like watching a group of penguins try to do synchronized swimming.",
  "The cooling system is critical for maintaining the stability of the nuclear reactor or Chernobyl will happen again... Let's just hope it's not a 'hot' topic of conversation at the next company picnic.",
  "Our most experienced member is the janitor... Yep, you heard that right. Forget about years of specialized training, it's all about mopping skills in this place.",
  "Access to the control room is restricted to authorized personnel only. It's like trying to get into a secret club where the password is 'I promise not to blow anything up.'",
  "The nuclear facility complies with all regulatory guidelines and standards. Well, except for that one time when we accidentally turned a conference room into a makeshift karaoke bar. It was a blast!",
  "Proper handling and disposal of radioactive waste is of utmost importance. We're like the Marie Kondos of the nuclear world - we always make sure everything sparks joy... or at least doesn't cause mutations.",
  "Emergency shutdown procedures are in place to prevent any accidents. It's like the nuclear version of the 'Stop, Drop, and Roll' rule. Except here, it's more like 'Panic, Scream, and Pray.'",
  "We follow strict protocols for the transportation of nuclear materials. It's like a secret mission, only instead of spies, we have highly trained delivery drivers. Don't mess with the nuclear pizza delivery guy!",
  "The facility has multiple layers of physical and digital security systems. It's like trying to break into Fort Knox, but with extra radioactive glow. Good luck to any would-be thieves!",
  "Continuous training is provided to employees to enhance safety awareness. We take it to the extreme, like those intense workout videos, but instead of abs, we're building muscles to handle radioactive situations.",
  "The nuclear facility plays a crucial role in generating clean energy. We're like the superheroes of electricity, fighting climate change one radioactive atom at a time. It's a dirty job, but someone's gotta do it!",
  "We have a zero-tolerance policy for any safety violations within the facility. So, if you even think about sneezing without covering your mouth, you'll have to face the wrath of the radioactive safety police.",
  "Regular maintenance and inspections are carried out to ensure equipment reliability. It's like giving your car a regular oil change, except here we're dealing with machines that have a little more 'boom' potential.",
  "Our team is prepared to respond to any potential nuclear incidents. It's like a high-stakes game of Whack-a-Mole, except instead of moles, we're dealing with radioactive leaks. Fun times, right?",
  "We work closely with regulatory agencies to maintain the highest safety standards. It's like having an overbearing parent who constantly checks if you've brushed your teeth. Except in this case, it's all about preventing meltdowns."
];

// Handle the authentication request
app.post('/authenticate', (req, res) => {
  const { name, password } = req.body;

  // Perform password verification
  if (password === correctPassword && name === correctBadge) {
    // Return a success response with a session token or any other necessary data
    res.json({ success: true, message: 'Authentication successful' });
    messageCount = 0; // reset to 0, in case they missed the token
  } else {
    // Return an error response
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Generate a random message from the messages array
const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

// Handle the chat request
app.get('/chat', (req, res) => {
  const { message } = req.query;

  if (messageCount === 0) {
    // Send the desired response for the first message
    res.send("d22fc547518b36f7ba26acc8cd2f973c - don't mind me, I'm testing random stuff");
    messageCount++;
  } else {
    // Check if the message matches specific conditions
    if (message.includes(':q') || message.includes(':wq')) {
      res.send("Oooooooh, that was it? It's been 2 weeks since I opened the window, thanks! By the way, check this URL that I found http://192.168.0.248:6374 when looking through files, I think it's the nuclear reactor control interface.");
    } else if (message.includes('help')) {
      res.send("I don't know if that helps you, but you could pay attention to the status from the XIPE Corp Nuclear Plant website");
    } else if (message.includes('vim')) {
      res.send("How do I do that?");
    } else {
      const randomMessage = getRandomMessage();
      res.send(randomMessage);
    }
  }
});

// Start the server
const port = 8085;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
