/** @format */

const ulCategories = document.querySelector("#categories");
const liCategories = ulCategories.querySelectorAll(".item");

console.log(`Number of categories: ${liCategories.length}`);

liCategories.forEach((category) => {
  const header = category.querySelector("h2");
  const listOfElements = category.querySelector("ul").querySelectorAll("li");
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${listOfElements.length}`);
});
