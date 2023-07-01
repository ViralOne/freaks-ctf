document.getElementById('checkButton').addEventListener('click', async () => {
  await handleSubmit();
});

// Add event listener to input box for keypress event
document.getElementById('answerInput').addEventListener('keypress', async (event) => {
  if (event.key === 'Enter') {
    await handleSubmit();
  }
});

// Handle form submission
async function handleSubmit() {
  const answer = document.getElementById('answerInput').value;

  const response = await fetch('/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer, "tips": false })
  });

  const result = await response.json();
  document.getElementById('result').innerText = result.message;
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('answerInput').value = '';
}
