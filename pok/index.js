let pok_items = document.querySelector(".pok-items");
import { getData } from "./apiCalls.js";
let fakeData = [{ name: "pok1" }, { name: "pok2" }];
async function showItems() {
  let data = await getData();

  data.forEach(async (item) => {
    let singlePokUrl = item.url;
    // console.log(singlePokUrl);
    let divItem = document.createElement("div");
    divItem.textContent = item.name;
    await fetch(singlePokUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));

    pok_items.appendChild(divItem);
  });

  // console.log(data, "data from api");
}

showItems();
