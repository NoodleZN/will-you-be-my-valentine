const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClicks = 0;

const noTexts = [
  "No 😢",
  "Are you sure?",
  "Kasar",
  "Really sure??",
  "Please reconsider 🥺",
  "I’ll cry 😭",
  "Last chance 💔",
  "No",
  "Please Mommy",
  "Yk you want to say yes MAMACITA",
  "PLEASEEEEEE SAY YES",
  "Stop being stubborn",
  "I see...",
  "YOU HATE MEEEE",
  "WOW :(",
  "No >:("
];

yesBtn.onclick = () => {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });

  yesBtn.textContent = "YAYYY 💖🥰";
  noBtn.style.display = "none";
};

noBtn.onclick = () => {
  noClicks++;

  // Change No text
  if (noClicks < noTexts.length) {
    noBtn.textContent = noTexts[noClicks];
  }

  // Make Yes button bigger
  const scale = 1 + noClicks * 0.2;
  yesBtn.style.transform = `scale(${scale})`;
};
