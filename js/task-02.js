/** @format */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

const mappedIngridients = ingredients.map((ingridient) => {
  const ingridientsListItem = document.createElement("li");

  ingridientsListItem.textContent = ingridient;
  ingridientsListItem.classList.add("item");
  return ingridientsListItem;
});

ulIngredients.append(...mappedIngridients);

console.log(ulIngredients);
