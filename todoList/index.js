let tasks = [
  { name: "Clean the desk", id: 8488949, select: false },
  { name: "Clean the desk", id: 9082490, select: false },
];
const todo_Items = document.querySelector(".todo-items");

function showTasks() {
  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.classList = "todo-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const p = document.createElement("p");
    p.textContent = task.name;
    // create a div that containe the edit and delete button
    const actions_btn = document.createElement("div");
    actions_btn.classList = "actions-btn";
    const trashIcon = document.createElement("img");
    trashIcon.src = "./images/trash.svg";
    const editIcon = document.createElement("img");
    editIcon.src = "./images/edit.svg";
    actions_btn.appendChild(trashIcon);
    actions_btn.appendChild(editIcon);
    const checkbox_taskName = document.createElement("div");
    checkbox_taskName.classList = "text-containe";
    checkbox_taskName.appendChild(checkbox);
    checkbox_taskName.appendChild(p);
    item.appendChild(checkbox_taskName);
    item.appendChild(actions_btn);
    todo_Items.appendChild(item);
  });
}
showTasks();
