let tasks = [
  // { name: "Clean the desk", id: 8488949, select: false },
  // { name: "Clean the desk", id: 9082490, select: false },
];
const todo_Items = document.querySelector(".todo-items");
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
function showTasks() {
  todo_Items.innerHTML = "";
  //   tasks.forEach((item) => {});
  //   tasks.forEach(function (item) {});
  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.classList = "todo-item";
    const checkbox = document.createElement("input");
    checkbox.id = task.id;
    checkbox.type = "checkbox";
    const p = document.createElement("p");
    p.textContent = task.name;
    // create a div that containe the edit and delete button
    const actions_btn = document.createElement("div");
    actions_btn.classList = "actions-btn";
    const trashIcon = document.createElement("img");
    trashIcon.src = "./images/trash.svg";
    trashIcon.id = "trash_icon";
    trashIcon.addEventListener("click", () => {
      deleteItem(task.id);
    });

    const editIcon = document.createElement("img");
    editIcon.addEventListener("click", () => {
      layout.classList.toggle("hide");
      task_input.value = task.name;
      isEdit = true;
      editId = task.id;
    });
    editIcon.src = "./images/edit.svg";
    actions_btn.appendChild(trashIcon);
    actions_btn.appendChild(editIcon);
    const checkbox_taskName = document.createElement("div");
    checkbox_taskName.classList = "text-containe";
    const box = document.createElement("div");
    box.classList = "checkbox-container";
    const label = document.createElement("label");
    label.classList = "checkbox-mark";
    label.htmlFor = task.id;
    box.appendChild(checkbox);
    box.appendChild(label);
    checkbox_taskName.appendChild(box);
    checkbox_taskName.appendChild(p);
    item.appendChild(checkbox_taskName);
    item.appendChild(actions_btn);
    todo_Items.appendChild(item);
  });
}
showTasks();

const trash_icon = document.getElementById("trash_icon");
const apply_btn = document.querySelector(".apply");
apply_btn.addEventListener("click", () => {
  if (!isEdit) {
    let randomId = Math.random(9, 4);
    console.log(randomId);
    tasks.push({ name: task_input.value, id: randomId, select: false });
    layout.classList.toggle("hide");
    showTasks();
  } else {
    editItem(editId);
    layout.classList.toggle("hide");
    isEdit = false;
  }
});
function deleteItem(id) {
  const filterdTasks = tasks.filter((item) => {
    return item.id != id;
  });
  tasks = filterdTasks;
  showTasks();
}

function editItem(id) {
  const updatedTasks = tasks.map((item) => {
    if (item.id == id) {
      return { ...item, name: task_input.value };
    } else {
      return item;
    }
  });

  tasks = updatedTasks;
  showTasks();
}
