/** @format */

function changeInput() {
  const idNameInput = document.querySelector("#name-input");
  idNameInput.addEventListener("input", changeSpan);
  const idSpan = document.querySelector("#name-output");
  function changeSpan({ target }) {
    if (target.value !== "") {
      idSpan.textContent = target.value;
    } else idSpan.textContent = "Anonymous"; // ! У меня вопрос почему работает некорректно если без else а просто idSpan.textContent = "Anonymous"?
  }
}

changeInput();
