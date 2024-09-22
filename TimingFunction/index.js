function printMsg() {
  console.log("print msg after 4s");
}

// calling printMsg after 8s
//setInterval(printMsg, 8000);

// calling printMsg every 3s

//setInterval(printMsg, 3000);

// callback
let showInfo = () => {
  document.write("This is the main page");
};

function loadData(x) {
  x();
}

//loadData(showInfo);

function showErrorMsg() {
  alert("Something wrong happen!!");
}
function showResultMsg() {
  document.write("Data is here!!!");
}
function getData(errorMsg, resultMsg) {
  let data = undefined;
  if (data) {
    resultMsg();
  } else {
    errorMsg();
  }
}
//getData(showErrorMsg, showResultMsg);

// craete cal function that teke three params :a,b and opration
function calculate(a, b, opration) {
  let result = opration(a, b);
  return result;
}

// create add function that take x and y and apply the sum opration
function add(x, y) {
  return x + y;
}

calculate(5, 5, add);
///
function SyncJsMsg() {
  let n = 100000;
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}

//////////////////////// Async Js
console.log("Hello");
setTimeout(() => {
  console.log("Async JS");
}, 10000);
console.log("world");

/////////////////////////// Sync Js
console.log("Hello");
SyncJsMsg();
console.log("world");
