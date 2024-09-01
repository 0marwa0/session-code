// function showInput() {
//   let input = document.getElementById("username").value;
//   let output = document.getElementById("output");
//   output.innerHTML = `<p id='output'>${input}</p>`;
// }
// function showInfo() {
//   let name = document.getElementById("name");
//   let password = document.getElementById("password");
//   let output = document.getElementById("output");
//   console.log(name.value, password.value);
//   output.innerHTML = `<div>
//     <p>name: ${name.value}</p>
//     <p>password: ${password.value}</p>
//     </div>`;
//   return false;
// }
// let btn = document.getElementById("btn");
// function showalert(event) {
//   console.log(event);
// }
// btn.addEventListener("click", showalert);

try {
  // let result = getResult();
} catch (error) {
  // console.log("name: " + error.name, "msg: " + error.message);
  // alert("msg: " + error.message);
} finally {
  console.log("shows all the time");
}

let ob = { name: "Ahmed" };

function changeName(x) {
  x.name = "new name";
  return x;
}

console.log(changeName(ob));
console.log(ob, "the same obg");

let y = 10;

function multi(x) {
  let res = x * x;
  return res;
}

console.log(multi(y), "vlaue of multi function");
console.log(y, "value of y");

let checkbox = document.getElementById("mod-theme");
function changeStyle() {
  if (checkbox.checked) {
    // change the style
    document.body.style.color = "black";
    document.documentElement.style.setProperty("--main-color", "white");
  } else {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("--main-color", "#071e2e");
  }
}
checkbox.addEventListener("change", changeStyle);
