const todo_Items = document.querySelector(".todo-items");
import { deleteItem } from "./index.js";
export function showTasks(tasks) {
  todo_Items.innerHTML = "";
  //   tasks.forEach((item) => {});
  //   tasks.forEach(function (item) {});
  if (tasks.length == 0) {
    const empty_tasks_img = document.createElement("img");
    empty_tasks_img.src = "./images/Empty-Tasks.svg";
    todo_Items.appendChild(empty_tasks_img);
  } else {
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
}
