/** @format */

let counterValue = 0;

const idCounter = document.querySelector("#counter");
const idValue = document.querySelector("#value");
const buttons = idCounter.querySelectorAll("button");

const buttonClick = ({ target }) => {
  if (target.dataset.action === "decrement") {
    counterValue = counterValue - 1;
  }
  if (target.dataset.action === "increment") {
    counterValue = counterValue + 1;
  }
  idValue.textContent = counterValue;
};

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});
