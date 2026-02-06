const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {
  // Confetti burst 🎉
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });

  // Cute response
  yesBtn.textContent = "Yay!! 💖🥰";
  noBtn.style.display = "none";
};

noBtn.onclick = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
};
