const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class ="fa-solid fa-check"></li>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButtton = document.createElement("button");
  deleteButtton.innerHTML = '<i class ="fa-solid fa-trash-can"></li>';
  deleteButtton.classList.add("deleteTask");
  task.appendChild(deleteButtton);

  if (inputTask.value === "") {
    alert("Please Enter Your Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButtton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
