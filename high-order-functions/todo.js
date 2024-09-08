let tasks = [];
// {id:1,name:"study coding"}

// have access to the add button
let addBtn = document.getElementById("add");

// add event listner to the add button
addBtn.addEventListener("click", () => {
  // have access to the input
  let text = document.getElementById("input").value;
  // inside the event listner add the text
  // you got it from the input to the tasks array
  // using push
  // genrater a random number for id
  let randomNum = Math.random(8);
  console.log(randomNum);
  tasks.push({ id: randomNum, name: text });
  showElment();
});
let list = document.getElementById("list");

// function showTsks (){

// }

function deleteItem(selectedId) {
  let filteredTaskes = tasks.filter((item) => {
    return item.id != selectedId;
  });
  tasks = filteredTaskes;
  showElment();
}
function showElment() {
  list.innerHTML = "";
  tasks.forEach((user) => {
    let div = document.createElement("div");
    div.classList = "user";
    let p = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    let selectedId = user.id;
    deleteButton.addEventListener("click", () => {
      deleteItem(selectedId);
    });
    p.textContent = user.name;
    div.appendChild(p);
    div.appendChild(deleteButton);
    list.appendChild(div);
  });
}

console.log("todo list array");
