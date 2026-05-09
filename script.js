// MOBILE MENU

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// TYPING EFFECT

const texts = [
  "Frontend Developer",
  "Angular Developer",
  "UI Designer",
  "Web Developer"
];

let speed = 100;

const textElements = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {

  if (charIndex < texts[textIndex].length) {

    textElements.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  } else {

    setTimeout(eraseText, 1500);

  }
}

function eraseText() {

  if (textElements.textContent.length > 0) {

    textElements.textContent =
      textElements.textContent.slice(0, -1);

    setTimeout(eraseText, 50);

  } else {

    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;