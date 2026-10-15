const heartLayer = document.getElementById("floatingHearts");
const forgiveButton = document.getElementById("forgiveButton");
const heartButton = document.getElementById("heartButton");
const response = document.getElementById("response");

function makeFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heart.style.animationDuration = `${8 + Math.random() * 8}s`;
  heartLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}
for (let i = 0; i < 18; i++) {
  setTimeout(makeFloatingHeart, i * 350);
}
setInterval(makeFloatingHeart, 850);

function heartBurst(x, y, amount = 24) {
  const symbols = ["♥", "♡", "💗", "💕"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${15 + Math.random() * 18}px`;
    heart.style.color = ["#ed5d91", "#c93670", "#ff9fbe", "#e6a1d1"][Math.floor(Math.random() * 4)];
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 300}px`);
    heart.style.setProperty("--y", `${-60 - Math.random() * 220}px`);
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

forgiveButton.addEventListener("click", () => {
  const rect = forgiveButton.getBoundingClientRect();
  heartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 32);
  response.textContent = "A virtual hug, just for you, Lina. No pressure—take your time. 💗";
  forgiveButton.textContent = "Sending you a warm hug 🤗";
});

heartButton.addEventListener("click", () => {
  heartBurst(window.innerWidth / 2, window.innerHeight * 0.68, 22);
  response.textContent = "One little heart to remind you: you matter. ♡";
});
