const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {
  yesBtn.textContent = "Yay! 💕";
  noBtn.style.display = "none";
  document.body.style.background = "#ffeff2";
};

noBtn.onclick = () => {
  alert("Are you sure? 💖 Try again!");
};
