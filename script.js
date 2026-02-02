const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");

// Move No button on hover or touch
["mouseover", "touchstart"].forEach(evt => {
  noBtn.addEventListener(evt, () => {
    const x = Math.random() * 250;
    const y = Math.random() * 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Yes button → dancing cat + confetti
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>💖🐱</h1>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
         style="width:260px;border-radius:20px;">
  `;
  launchConfetti();
});

// Confetti hearts
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = 20 + Math.random() * 20 + "px";
    heart.style.animation = `fall 3s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

// Floating flowers
const flowers = ["🌸","🌺","🌷","💐"];
for (let i = 0; i < 20; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 6 + Math.random() * 6 + "s";
  flower.style.fontSize = 20 + Math.random() * 20 + "px";
  document.body.appendChild(flower);
}
