import { addToCart } from "./e-shop.js";

let cards_container = document.getElementById("items3");
export function showItems(data) {
  data.forEach((item) => {
    let card_item = document.createElement("div");
    card_item.classList.add("item");
    let img_container = document.createElement("div");
    img_container.classList.add("card");
    let img = document.createElement("img");
    let img_warrper = document.createElement("div");
    img_warrper.appendChild(img);
    img_container.classList = "img-card-container";
    let pDiv = document.createElement("div");
    pDiv.classList.add("product-info");
    let stars = document.createElement("div");
    stars.classList.add("stars");
    let starImage = document.createElement("img");
    starImage.classList.add("star");
    let pPrice = document.createElement("p");
    pPrice.classList.add("price");
    let pTitle = document.createElement("p");
    pTitle.classList.add("product-name");
    let btn = document.createElement("button");
    btn.classList.add("add-cart");
    img.src = item.image;
    starImage.src = "./images/Star.png";
    pPrice.textContent = item.price;
    pTitle.textContent = item.title;

    btn.textContent = "ADD IN CART";

    btn.addEventListener("click", () => {
      addToCart(item);
    });
    card_item.appendChild(btn);
    stars.appendChild(starImage);
    card_item.appendChild(stars);

    img_container.appendChild(img_warrper);
    // img.classList.add("card-img");
    card_item.appendChild(pDiv);
    pDiv.prepend(pPrice);
    pDiv.appendChild(pTitle);
    card_item.prepend(img_container);
    cards_container.appendChild(card_item);
  });
}
