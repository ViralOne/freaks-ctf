// Required library: crypto-js
const CryptoJS = require('crypto-js');

// Encrypted message and key
const encryptedMessage = 'Uif!Xpsme"!Dpohsbuvmbujpot!Cjmm!uif!Dppm!tubsl!xjui!b!dpnqvufs!nvtu!';
const key = 1;

// Decrypt the message using Caesar cipher
const decryptedMessage = decryptCaesar(encryptedMessage, key);

// Display the decrypted message
console.log('Decrypted Message:', decryptedMessage);

// Caesar cipher decryption function
function decryptCaesar(message, key) {
  let decrypted = '';

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char.match(/[a-z]/i)) {
      let code = message.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }

    decrypted += char;
  }

  return decrypted;
}

