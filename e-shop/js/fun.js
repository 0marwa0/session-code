import { addToCart, showCartItems } from "./e-shop.js";
// import { products } from "./data.js";

// let cards_container = document.getElementById("items3");
export function showItems(data, cards_container) {
  cards_container.innerHTML = "";
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
    pPrice.textContent = item.price + " $";
    pTitle.textContent = item.title;

    btn.textContent = "ADD IN CART";

    btn.addEventListener("click", () => {
      addToCart(item);
    });
    card_item.appendChild(pTitle);
    pTitle.classList = "item-title";
    card_item.appendChild(pDiv);

    stars.appendChild(starImage);
    card_item.appendChild(btn);

    img_container.appendChild(img_warrper);
    // img.classList.add("card-img");
    pDiv.classList = "itme-info";
    pDiv.prepend(pPrice);
    pDiv.appendChild(stars);
    card_item.prepend(img_container);
    cards_container.appendChild(card_item);
  });
}

export function deleteItem(id, data) {
  let filterdData = data.filter((item) => item.id != id);

  return filterdData;
  // data = filterdData;
  // console.log(filterdData, "after delete one item");
  // showCartItems(data);
}
let websiteTitle;
let websiteTitle_en = "Geschäft";
let websiteTitle_ar = "متجر الكترنيـه";
// let lang = "en";

let title = document.getElementById("title");
let select_lang = document.getElementById("lang-select");
title.textContent = websiteTitle_en;
select_lang.addEventListener("change", (e) => {
  let selected_lang = e.target.value;
  console.log(selected_lang, "language selected");
  switch (selected_lang) {
    case "en":
      title.textContent = websiteTitle_en;
      break;
    case "ar":
      title.textContent = websiteTitle_ar;
      break;
    default:
      break;
  }
});
