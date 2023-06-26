/** @format */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = body.querySelector("span");
const onButton = body.querySelector("button");
onButton.addEventListener("click", changeColor);

function changeColor(event) {
  const changedColor = getRandomHexColor();
  span.textContent = changedColor;
  body.style.backgroundColor = changedColor;
}
