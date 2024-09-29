import { products } from "./data.js";
import { showItems } from "./fun.js";
console.log(products);
const cart_icon = document.getElementById("cart_icon");
const layout = document.querySelector(".layout");
const model_content = document.querySelector(".content");
const total_price = document.querySelector("#total_price");

const cart = [];
cart_icon.addEventListener("click", () => {
  layout.classList.toggle("hide");
  showCartItems(cart);
});
async function getProducts() {
  try {
    let products = await fetch("https://fakestoreapi.com/products");
    let data = await products.json();
    console.log(data, "product from api");
    showItems(data.slice(0, 3));
  } catch (error) {
    // showError("Something wrong happen in the api call");
  }
}

export function addToCart(item) {
  cart.push(item);
  console.log(cart);
}

function showCartItems(cart) {
  let price = 0;

  cart.forEach((element) => {
    price += element.price;
    let cart_item = document.createElement("div");
    cart_item.textContent = element.title;
    model_content.appendChild(cart_item);
    total_price.textContent = price;
    // create img
    // create delete btn
  });
}

getProducts();
