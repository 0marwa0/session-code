// module:export&import
import print from "./lib.js";

// event onclick

navigator.geolocation.getCurrentPosition((current) => {
  console.log(current, "wow");
});
const sendbtn = document.getElementById("input");
sendbtn.onchange = (e) => {
  // console.log(e.target.value);
  // document.write(e.target.value);
};
sendbtn.addEventListener("", (event) => {
  console.log(event);
});
window.addEventListener("keydown", (e) => {});

// localstorage

let users = [{ name: "Ahmed", age: 99 }];
localStorage.setItem("data", JSON.stringify(users));
let x = localStorage.getItem("data");
console.log(JSON.parse(x));
let theme = "light";

let bgColor = theme == "light" ? "white" : "black";
if (theme == "light") {
  bgColor = "white";
} else {
  bgColor = "black";
}

let num = "123";
let convertedNum = Number(num);
console.log(typeof num);
console.log(typeof convertedNum);
