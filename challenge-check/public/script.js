// Fetch challenges from the server and populate the list
fetch('/challenges')
  .then(response => response.json())
  .then(challenges => {
    const challengeList = document.getElementById('challenge-list');
    challenges.forEach(challenge => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" class="challenge-link" data-id="${challenge.id}">${challenge.name}</a> - ${challenge.description}`;
      challengeList.appendChild(li);
    });

    // Add click event listener to each challenge link
    const challengeLinks = document.getElementsByClassName('challenge-link');
    Array.from(challengeLinks).forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        openPopup(link.dataset.id);
      });
    });
  });

// Handle form submission for checking challenge text
const checkForm = document.getElementById('check-form');
const resultDiv = document.getElementById('result');
const resultMessage = document.getElementById('result-message');
const resultTips = document.getElementById('result-tips');
const closePopupButton = document.getElementById('close-popup');
const showTipsCheckbox = document.getElementById('show-tips-checkbox');

checkForm.addEventListener('submit', event => {
  event.preventDefault();

  const challengeId = parseInt(checkForm.dataset.id);
  const text = document.getElementById('text').value;
  const showTips = showTipsCheckbox.checked; // Get the value of the checkbox
  // Send the challenge ID and text to the server for validation
  fetch('/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ challengeId, text, showTips })
  })
    .then(response => response.json())
    .then(result => {
      resultDiv.innerHTML = '';
      resultMessage.innerText = result.valid ? 'Valid answer!' : 'Invalid answer!';
      resultDiv.appendChild(resultMessage);

      if (!result.valid && showTips && result.tips) {
        const tips = document.createElement('p');
        tips.classList.add('tips');
        tips.innerText = `Tips: ${result.tips}`;
        resultDiv.appendChild(tips);
      }
      resultTips.classList.toggle('hidden', !showTips || !result.tips);
    });
});

// Open the challenge popup
function openPopup(challengeId) {
  fetch('/challenges')
    .then(response => response.json())
    .then(challenges => {
      const challenge = challenges.find(challenge => challenge.id === parseInt(challengeId));

      if (!challenge) {
        console.error('Challenge not found');
        return;
      }

      const popup = document.getElementById('challenge-popup');
      const nameElement = document.getElementById('challenge-name');
      const descriptionElement = document.getElementById('challenge-description');

      nameElement.innerText = challenge.name;
      descriptionElement.innerText = challenge.description;

      checkForm.dataset.id = challenge.id;
      document.getElementById('text').value = '';

      resultDiv.innerHTML = '';

      popup.style.display = 'block';

      if (challenge.validText) {
        checkForm.style.display = 'block';
      } else {
        checkForm.style.display = 'none';
      }
    });
}

// Close the challenge popup
closePopupButton.addEventListener('click', () => {
  const popup = document.getElementById('challenge-popup');
  popup.style.display = 'none';
});

function hidePopup() {
  const popup = document.getElementById('challenge-popup');
  popup.style.display = 'none';
}

hidePopup();