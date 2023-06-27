/** @format */

const form = document.querySelector(".login-form");
const inputForm = form.querySelector("input");
const buttonSubmit = document.querySelector("button");
form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  console.dir(event.target.elements);
  const { email, password } = event.target.elements;
  if (email.value === "") {
    alert("All fields must be filled!");
    return;
  }
  if (password.value === "") {
    alert("All fields must be filled!");
    return;
  }

  const resForm = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(resForm);
  form.reset();
}
