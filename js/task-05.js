/** @format */

function changeInput() {
  const idNameInput = document.querySelector("#name-input");
  idNameInput.addEventListener("input", changeSpan);
  const idSpan = document.querySelector("#name-output");
  function changeSpan({ target: { value } }) {
    if (value !== "") {
      idSpan.textContent = value;
    } else idSpan.textContent = "Anonymous";
  }
}

changeInput();
