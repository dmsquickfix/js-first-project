// Counter
let count = 100;

// When page loads, display starting number
window.onload = function () {
  document.getElementById("count").innerText = count;
};
function increase() {
  count = count + 100;
  document.getElementById("count").innerText = count;
  if (count >= 500) {
    document.body.style.backgroundColor = "lightgreen";
  }
}
function decrease() {
  count = count - 1;
  document.getElementById("count").innerText = count;
}
function resetCount() {
  count = 100;
  document.getElementById("count").innerText = count;
  document.body.style.backgroundColor = "white";
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

  // Click task to cross it out
  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
