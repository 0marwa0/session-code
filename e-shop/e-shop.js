import { products } from "./assets/data.js";
let cards_container = document.getElementById("cards-container");
console.log(products);
products.forEach((item) => {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let pTitle = document.createElement("p");

  img.src = item.image;
  pTitle.textContent = item.title;
  card.appendChild(img);
  card.appendChild(pTitle);
  cards_container.appendChild(card);
});
