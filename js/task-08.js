/** @format */

const form = document.querySelector(".login-form");
const inputForm = form.querySelector("input");
const buttonSubmit = document.querySelector("button");
buttonSubmit.addEventListener("click", submit);

function submit(event) {
  event.preventDefault();

  if (inputForm.value === "") {
    alert("All fields must be filled!");
    return;
  }

  const elements = form.elements;
  const resForm = {};
  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    if (element.type !== "submit") {
      resForm[element.name] = element.value;
    }
  }
  console.log(resForm);
  form.reset();
}
