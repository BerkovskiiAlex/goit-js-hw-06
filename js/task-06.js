/** @format */

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", inputChangeBorder);

function inputChangeBorder(event) {
  const { value, dataset, classList } = event.target;
  if (value.length === Number(dataset.length)) {
    classList.add("valid");
    classList.remove("invalid");
    return;
  }
  return classList.add("invalid");
}
