/** @format */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = body.querySelector("span");
body.addEventListener("click", changeColor);
const onButton = body.querySelector("span");

function changeColor(event) {
  const changedColor = getRandomHexColor();
  span.textContent = changedColor;
  body.style.backgroundColor = changedColor;
}
