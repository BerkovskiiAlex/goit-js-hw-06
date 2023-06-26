/** @format */

const idInput = document.querySelector("#font-size-control");
idInput.addEventListener("input", changeInput);
const idSpan = document.querySelector("#text");

function changeInput(event) {
  idSpan.style.fontSize = event.target.value + "px";
}
