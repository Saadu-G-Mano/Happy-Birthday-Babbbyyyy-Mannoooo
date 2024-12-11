// Music Play/Pause
const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

// Set the volume to 50%
music.volume = 0.3;


musicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicButton.textContent = 'Pause Music';
  } else {
    music.pause();
    musicButton.textContent = 'Play Music';
  }
});

// Hearts Animation
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

// Function to create static hearts in a checkered pattern
function createCheckeredHearts() {
  const heart = document.createElement('div');
  heart.classList.add('static-heart');

  // Checkered pattern: Set fixed grid positions
  const rows = 10;  // Number of rows in the checkered grid
  const cols = 10;  // Number of columns in the checkered grid
  const spacing = 10;  // Spacing between the hearts

  // Loop through the grid and place hearts in alternating positions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {  // Alternates the hearts (checkered effect)
        const xOffset = j * spacing;  // Horizontal offset
        const yOffset = i * spacing;  // Vertical offset

        // Create heart and position it
        const newHeart = document.createElement('div');
        newHeart.classList.add('static-heart');
        newHeart.style.left = `${xOffset}%`;
        newHeart.style.top = `${yOffset}%`;

        // Append the heart to the container
        document.getElementById('heart-container').appendChild(newHeart);
      }
    }
  }
}
// Call the function to create static hearts when the page loads
window.onload = createCheckeredHearts;
const messages = [
  "I Love You MANO 💝",
  "I Love You Meri Mano ❤️",
  "I Love You Meri Jaan 💕",
  "I Love You Meri Janu 💖",
  "I Love You Meri JaneMun 💗",
  "I Love You Meri Wifey 💘",
  "I Love You Meri Wife 💝",
  "I Love You Meri Romantic Wifey ❤️‍🔥",
  "I Love You My Honey 💓",
  "I Love You Meri Senorita 💞",
  // Add more messages as needed
];

let messageIndex = 0;

function showMessage() {
  if (messageIndex < messages.length) {
    const messageText = messages[messageIndex];
    messageIndex++;

    const messageElement = document.createElement("div");
    messageElement.classList.add("ghost-message");
    messageElement.textContent = messageText;

    // Random position for the message
    const randomX = Math.floor(Math.random() * (window.innerWidth - 200)); // Random X position
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Random Y position

    messageElement.style.left = `${randomX}px`;
    messageElement.style.top = `${randomY}px`;

    // Append the message to the body
    document.body.appendChild(messageElement);

    // Remove the message after animation ends (4s)
    setTimeout(() => {
      messageElement.remove();
    }, 4000); // Matches the animation duration
  }
}

// Show a new message every 5 seconds
setInterval(showMessage, 5000);

// Ghost-like Messages
const ghostMessages = [
  "I Love You MANO 💝",
      "I Love You Meri Mano ❤️",
      "I Love You Meri Jaan 💕",
      "I Love You Meri Janu 💖",
      "I Love You Meri JaneMun 💗",
      "I Love You Meri Wifey 💘",
      "I Love You Meri Wife 💝",
      "I Love You Meri Romantic Wifey ❤️‍🔥",
      "I Love You My Honey 💓",
      "I Love You Meri Senorita 💞",
      "I Love You My Life 💖",
      "I Love You My Love ❤️",
      "I Love You My Sweet Heart 💕",
      "I Love You My Dream 💗",
      "I Love You My Crush 💘",
      "I Love You Meri Mama Baba Ki Bahu 💝",
      "I Love You Meri Behen Bhai Bhabhi ❤️‍🔥",
      "I Love You Meri Sasu Ma Ki Beti 💓",
      "I Love You Meray Sasur Ki Beti 💞",
      "I Love You Meray Salay Ki Behen 💖",
      "I Love You Meri Menna ❤️",
      "I Love You Meri Shahzadi Maryam 💕",
      "I Love You Meri Maryam Tufail 💗",
      "I Love You Meri Mrs Saadullah 💘",
      "I Love You Meray Bachon Ki Mama 💝",
      "I Love You Meri Mommy ❤️‍🔥",
      "I Love You Mera Subh Kuch 💓",
      "I Love You Mera Wajood 💞",
      "I Love You Mera Kundha 💖",
      "I Love You Mera Ishq ❤️",
      "I Love You Meray Jigar Ka Tukkrra 💕",
      "I Love You Mera Jaan Ka Tota 💗",
      "I Love You Meri Himat 💘",
      "I Love You Meri Umeed 💝",
      "I Love You Meri Listener ❤️‍🔥",
      "I Love You Meri Sathi 💓",
      "I Love You Meri Humsafar 💞",
      "I Love You Meri Partner 💖",
      "I Love You Meri Life Partner ❤️",
      "I Love You Meri Soulmate 💝",
      "I Love You Meri Soul Partener ❤️‍🔥",
      "I Love You Meri Qainaat 💓",
      "I Love You Mera Phoolll 💞",
      "I Love You Mera Phulll 💖",
      "I Love You Meri Qaatil Haseena ❤️",
      "I Love You Meri Maah Rani 💕",
      "I Love You Mera Nasha 💗",
      "I Love You Mera Drug 💘",
      "I Love You Munji Sugar Ji Waja 💝",
      "I Love You Munji Sweetie ❤️‍🔥",
      "I Love You Munji Cutie 💓",
      "I Love You Munji Cutie Pie 💞",
      "I Love You Munji Mithri 💖",
      "I Love You Meri Addiction ❤️",
      "I Love You Munji Baby Girl 💘",
      "I Love You Munji Oxytocin 💝",
      "I Love You Munji Pride ❤️‍🔥",
      "I Love You Munji Shaan 💓",
      "I Love You Munji Malika-e-Qalb 💞",
      "I Love You Munji Noor-e-Kamar 💖",
      "I Love You Munji Ziyyaa-e-Shams ❤️",
      "I Love You Munji Jaan-e-Wafa 💕",
      "I Love You Munji Manzil-e-Qarar 💗",
      "I Love You Munji Rafiqa-e-Hayaat 💘",
      "I Love You Munji Rahat-e-Ziist 💝",
      "I Love You Munji Gul Badan ❤️‍🔥",
      "I Love You Munji Nosh-e-Jaan 💓",
      "I Love You Munji Mata-e-Jaan 💞",
      "I Love You Munji Zua-Fishaan 💖",
      "I Love You Munji Jaan-e-Sukhan ❤️",
      "I Love You Munji Husan Parri 💕",
      "I Love You Munji Hoor Parri 💗",
      "I Love You Munji Ranri 💘",
      "I Love You Munji Dear 💝",
      "I Love You Munji Darling ❤️‍🔥",
      "I Love You Munji Mohabat 💓",
      "I Love You Munji Cheese Cake 💞",
      "I Love You Munji Favorite Desert 💖",
      "I Love You Munji Maiiiiiii ❤️",
      "I Love You Munji Chuzziiiii 💕",
      "I Love You Munji Teddy Bear 💗",
      "I Love You Munji Bubu 💘",
      "I Love You Munji Bhallu 💝",
      "I Love You Munji Billie ❤️‍🔥",
      "I Love You Munji Mano Billie 💓",
      "I Love You Munji Meow Meow Billie 💞",
      "I Love You Munji Pookie 💖",
      "I Love You Munji Dumbo ❤️",
      "I LOVE YOU ❤️"
];

// Function to create a ghost message
function createGhostMessage() {
  const messageText = ghostMessages[Math.floor(Math.random() * ghostMessages.length)];
  const messageElement = document.createElement('div');
  messageElement.classList.add('ghost-message');
  messageElement.textContent = messageText;

  // Random position
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  messageElement.style.left = `${randomX}px`;
  messageElement.style.top = `${randomY}px`;

  document.getElementById('ghost-messages-container').appendChild(messageElement);

  // Remove message after animation ends
  setTimeout(() => {
    messageElement.remove();
  }, 4000); // Matches the duration of the animation (4s)
}

// Trigger ghost messages every 4-6 seconds
setInterval(createGhostMessage, 1000 + Math.random() * 1000);