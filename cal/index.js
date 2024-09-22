let input = document.getElementById("input");
let mathText = "";
function getValue(x) {
  mathText += x;
  input.value = mathText;
}
function showResult() {
  let result = eval(mathText);
  input.value = result;
}

function clearText() {
  input.value = "";
}
