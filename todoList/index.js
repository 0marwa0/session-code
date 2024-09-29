let data = [
  { name: "Ahmed", id: 8488949, select: false },
  { name: "Clean the desk", id: 9082490, select: false },
];
import { showTasks } from "./fun.js";
const layout = document.querySelector(".layout");
const close_btn = document.querySelector(".close");
const plus_btn = document.querySelector(".plus-btn");
const task_input = document.getElementById("task_input");
let isEdit = false;
let editId = null;
plus_btn.addEventListener("click", () => {
  layout.classList.toggle("hide");
});
close_btn.addEventListener("click", () => {
  layout.classList.toggle("hide");
});

showTasks(data);

const trash_icon = document.getElementById("trash_icon");
const apply_btn = document.querySelector(".apply");
apply_btn.addEventListener("click", () => {
  if (!isEdit) {
    let randomId = Math.random(9, 4);
    console.log(randomId);
    data.push({ name: task_input.value, id: randomId, select: false });
    layout.classList.toggle("hide");
    showTasks();
  } else {
    editItem(editId);
    layout.classList.toggle("hide");
    isEdit = false;
  }
});
export function deleteItem(id) {
  const filterdTasks = data.filter((item) => {
    return item.id != id;
  });
  // tasks = filterdTasks;
  showTasks(filterdTasks);
}

function editItem(id) {
  const updatedTasks = data.map((item) => {
    if (item.id == id) {
      return { ...item, name: task_input.value };
    } else {
      return item;
    }
  });

  // tasks = updatedTasks;
  showTasks(updatedTasks);
}

const searachinput = document.getElementById("search-input");
searachinput.addEventListener("input", (e) => {
  let updatedArray = data.filter((item) => {
    let searchValue = searachinput.value.toLowerCase();
    return item.name.toLowerCase().includes(searchValue);
  });
  showTasks(updatedArray);
});

const all_btn = document.querySelector(".all-btn");
all_btn.addEventListener("click", () => {
  showTasks(data);
});
// const searachBtn = document.getElementById("search-btn");
// search using the search button
// searachBtn.addEventListener("click", () => {
//   let updatedArray = data.filter((item) => {
//     let searchValue = searachinput.value.toLowerCase();
//     return item.name.toLowerCase().includes(searchValue);
//   });
//   // tasks = updatedArray;
//   showTasks(updatedArray);
// });

// search while typing
