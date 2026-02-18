// Counter
let count = 0;

function increase() {
  count = count + 1;
  document.getElementById("count").innerText = count;
}

function decrease() {
  count = count - 1;
  document.getElementById("count").innerText = count;
}

function resetCount() {
  count = 0;
  document.getElementById("count").innerText = count;
}

// Task List
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
