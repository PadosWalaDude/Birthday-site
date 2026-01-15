const container = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.panel');
const navItems = document.querySelectorAll('[data-target]');
const backBtn = document.getElementById('backBtn');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.dataset.target;
        const section = document.getElementById(target);
        const index = [...sections].indexOf(section);
        container.style.transform = `translateY(-${index * 100}vh)`;
    });
});

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('bgMusic');
let playing = false;

musicBtn.addEventListener('click', () => {
    if (!playing) {
        music.play();
        musicBtn.textContent = '⏸';
    } else {
        music.pause();
        musicBtn.textContent = '▶';
    }
    playing = !playing;
});

// window.addEventListener("scroll", () => {
//   const scrolled = window.scrollY;
//   const parallax = document.querySelector(".parallax-image");

//   parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
// });

const heartsContainer = document.querySelector(".hearts-container");
const emojis = ["❤️", "💗", "💖"];


function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);