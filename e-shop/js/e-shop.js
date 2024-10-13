import { products, products_2 } from "./data.js";

import { deleteItem } from "./fun.js";
let cards_container = document.getElementById("items1");
let cards_container_other_product = document.getElementById("items3");
let cards_container_earphones = document.getElementById("items4");
console.log(products);

showItems(products, cards_container);
showItems(products_2, cards_container_earphones);

import { showItems } from "./fun.js";
console.log(products);
const cart_icon = document.getElementById("cart_icon");
const layout = document.querySelector(".layout");
const content = document.querySelector(".content");
const model_content = document.querySelector(".content");
const total_price = document.querySelector("#total_price");

const cart = [];
cart_icon.addEventListener("click", () => {
  layout.classList.toggle("hide");
  showCartItems(cart);
});

layout.addEventListener("click", () => {
  layout.classList.toggle("hide");
});

content.addEventListener("click", (e) => {
  e.stopPropagation();
});
async function getProducts() {
  try {
    let products = await fetch("https://fakestoreapi.com/products");
    let data = await products.json();
    console.log(data, "product from api");
    showItems(data, cards_container_other_product);
    // showItems(data.slice(0, 4)), showItems(data.slice(5, 9));
  } catch (error) {
    // showError("Something wrong happen in the api call");
  }
}

export function addToCart(item) {
  let product_in_Cart = cart.find((product) => product.id == item.id);
  console.log(product_in_Cart, "aleardy exist element");
  if (product_in_Cart) {
    // update the qu

    let updatedCart = cart.map((item) => {
      if (product_in_Cart.id == item.id) {
        console.log(item, "find the item");
        return { ...item, qu: item.qu++ };
      } else {
        return item;
      }
    });
    // cart = updatedCart;
    console.log(cart, "cart");
    showCartItems(updatedCart);
    // update the price
    // alert("Aleardy exist");
  } else {
    item.qu = 1;
    cart.push(item);
  }
  console.log(cart);
}

export function showCartItems(cart) {
  let price = 0;
  let qu = 1;
  let cart_itmes = document.getElementById("cart-itmes");
  cart_itmes.innerHTML = "";
  cart.forEach((element) => {
    price += element.price;

    let cart_item = document.createElement("div");
    cart_item.id = "cart_item";
    let title = document.createElement("p");
    let product_qu = document.createElement("p");

    // cart_item.textContent = element.title;
    title.textContent = element.title;
    // <div>
    //   <p>title</p>
    //   <img />
    // </div>;
    // create img
    const product_img = document.createElement("img");
    product_img.src = element.image;
    product_img.id = "product_img_cart";
    // create delete btn
    const trashIcon = document.createElement("img");
    trashIcon.src = "./images/trash.svg";
    trashIcon.id = "trash_icon";
    trashIcon.addEventListener("click", () => {
      let filterdData = deleteItem(element.id, cart);
      console.log(filterdData, "after delete an item");

      price = price - element.price;
      total_price.textContent = price;
      showCartItems(filterdData);
    });

    let btn_container = document.createElement("div");
    let increasBtn = document.createElement("button");
    increasBtn.textContent = "+";
    let decreasBtn = document.createElement("button");
    decreasBtn.textContent = "-";
    btn_container.appendChild(increasBtn);
    btn_container.appendChild(decreasBtn);
    increasBtn.addEventListener("click", () => {
      price = price + element.price;
      qu = qu + 1;
      total_price.textContent = price;
      element.qu = qu;
      product_qu.textContent = qu;
    });
    decreasBtn.addEventListener("click", () => {
      price = price - element.price;

      qu = qu - 1;
      element.qu = qu;

      total_price.textContent = price;
      product_qu.textContent = qu;
    });
    product_qu.textContent = element.qu;
    cart_item.appendChild(product_img);
    cart_item.appendChild(title);
    cart_item.appendChild(product_qu);
    cart_item.appendChild(btn_container);
    cart_item.appendChild(trashIcon);
    cart_itmes.appendChild(cart_item);
    total_price.textContent = price;
    console.log(cart, "with qu added ");
    model_content.appendChild(cart_itmes);
  });
}
// const trash_icon = document.getElementById("trash_icon");
// const apply_btn = document.querySelector(".apply");
// apply_btn.addEventListener("click", () => {
//   if (!isEdit) {
//     let randomId = Math.random(9, 4);
//     console.log(randomId);
//     data.push({ name: task_input.value, id: randomId, select: false });
//     layout.classList.toggle("hide");
//     showTasks();
//   } else {
//     editItem(editId);
//     layout.classList.toggle("hide");
//     isEdit = false;
//   }
// });
// export function deleteItem(id) {
//   const filterdTasks = data.filter((item) => {
//     return item.id != id;
//   });
//   // tasks = filterdTasks;
//   showTasks(filterdTasks);
// }
const color_select = document.getElementById("color_select");
color_select.addEventListener("change", (e) => {
  let selectedColor = e.target.value;

  filterProduct(selectedColor.toLowerCase());
});
function filterProduct(color) {
  let filterdData = products.filter((item) => {
    return item.color == color;
  });

  showItems(filterdData, cards_container);
  console.log(filterdData, color, "all item with color black");
}

getProducts();
