const texts = [
  "30 Oyun.",
  "JavaScript Challenge.",
  "2D & 3D Games.",
  "Every Day. No Excuses."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  const speed = isDeleting ? 50 : 90;
  setTimeout(typeLoop, speed);
}

typeLoop();


