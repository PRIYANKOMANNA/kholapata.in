// 🌿 KHOLA PATA - Stunning Interactive Script

// Loading Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Dynamic Greeting
const hero = document.querySelector(".hero");

const greetings = [
  "বাংলার কথা, মানুষের কথা 🌿",
  "Breaking News • Viral Stories • Culture 🔥",
  "Khola Pata — Bengal's Digital Voice 🚀",
  "News • Fashion • Identity • Future 🌍"
];

let index = 0;

function changeGreeting() {
  if (hero) {
    hero.querySelector("h2").innerText = greetings[index];
    index = (index + 1) % greetings.length;
  }
}

setInterval(changeGreeting, 3000);

// Smooth Scroll Effect
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});

// Reveal Animation on Scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});

// Cursor Glow Effect
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// News Ticker
const tickerText = [
  "🔥 Bengal Election Updates",
  "📰 Viral Political News",
  "🌿 Khola Pata Fashion Launch Soon",
  "🚀 Subscribe For Daily Bengali Updates"
];

const ticker = document.createElement("div");
ticker.className = "ticker";
document.body.prepend(ticker);

let tickerIndex = 0;

function updateTicker() {
  ticker.innerHTML = `<span>${tickerText[tickerIndex]}</span>`;
  tickerIndex = (tickerIndex + 1) % tickerText.length;
}

updateTicker();
setInterval(updateTicker, 2500);

// Floating Background Particles
for (let i = 0; i < 20; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${5 + Math.random() * 10}s`;
  particle.style.opacity = Math.random();

  document.body.appendChild(particle);
}

// Auto Dark Neon Theme Pulse
setInterval(() => {
  document.body.classList.toggle("pulse");
}, 4000);

// Live Clock
const clock = document.createElement("div");
clock.className = "live-clock";
document.body.appendChild(clock);

function updateClock() {
  const now = new Date();

  clock.innerHTML = `
    ⏰ ${now.toLocaleTimeString()}
  `;
}

setInterval(updateClock, 1000);
updateClock();

// Console Signature 😎
console.log(`
🌿 KHOLA PATA
Bengal Digital Revolution
News • Culture • Products
Built with Vision 🚀
`);