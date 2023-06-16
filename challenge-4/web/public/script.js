const authenticationContainer = document.getElementById('authenticationContainer');
const chatContainer = document.getElementById('chatContainer');
const chatBox = document.getElementById('chatBox');
const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const authenticateButton = document.getElementById('authenticateButton');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatOutput = document.getElementById('chatOutput');

// Function to add a message to the chat output
const addMessageToChat = (sender, message) => {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.classList.add(sender === 'You' ? 'sent' : 'received');

    const messageContent = document.createElement('div');
    messageContent.classList.add('content');
    messageContent.textContent = message;

    messageContainer.appendChild(messageContent);
    chatOutput.appendChild(messageContainer);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the latest message
};

const addDelayedMessageToChat = (sender, message, delay) => {
    setTimeout(() => {
    addMessageToChat(sender, message);
    }, delay);
};

// Function to authenticate the user and show the chat
const authenticateUser = () => {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    // Send the authentication request to the server
    axios.post('/authenticate', { name, password })
    .then((response) => {
        const { success, message } = response.data;

        if (success) {
        authenticationContainer.classList.add('hidden');
        authenticationContainer.remove();
        chatContainer.classList.remove('hidden');
        chatBox.classList.remove('hidden');
        } else {
        alert("Secret key is incorrect!");
        }
    })
    .catch((error) => {
        alert("Invalid credentials!");
        console.error(error);
    });
};

// Event listener for the authenticate button
authenticateButton.addEventListener('click', () => {
    authenticateUser();
});

document.getElementById('passwordInput').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      authenticateUser();
      return false;
    }
  }

// Event listener for the send button and Enter key press
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();

  if (message !== '') {
    // Send the message to the server
    axios
      .get('/chat', { params: { message } })
      .then((response) => {
        const receivedMessage = response.data;

        // Generate a random delay between 0.5 and 2 seconds
        const minDelay = 500; // in milliseconds
        const maxDelay = 2000; // in milliseconds
        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

        addMessageToChat('You', message);
        addDelayedMessageToChat('John', receivedMessage, delay);
      })
      .catch((error) => {
        console.error(error);
      });

    // Clear the input field
    messageInput.value = '';
  }
}
