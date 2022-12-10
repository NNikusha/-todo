const input = document.getElementById("add_details");
const submit = document.getElementById("submit_button");
const write_tasks = document.querySelector("#write_tasks");
const results = document.getElementById("results");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
let paragraph = document.querySelector("p");




write_tasks.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value != 0) {
    const tasks = document.createElement("div");
    tasks.setAttribute("class", "task");

    tasks.addEventListener("click", () => {
      label.style.textDecoration = "line-through";
    });

    const onlyTask = document.createElement("input");
    onlyTask.setAttribute("type", "checkbox");
    onlyTask.setAttribute("value", input.value);
    onlyTask.setAttribute("id", input.value);

    var label = document.createElement("label");
    label.textContent = input.value;
    label.setAttribute("for", input.value);

    results.appendChild(tasks);
    tasks.appendChild(onlyTask);
    tasks.appendChild(label);

    onlyTask.innerHTML = event.target[0].value;
    input.value = "";

    onlyTask.addEventListener("click", () => {
      if (onlyTask.checked) {
        label.style.textDecoration = "line-through";
        onlyTask.value = false;
      } else {
        onlyTask.value = true;
        label.style.textDecoration = "none";
      }
    });
    active.addEventListener("click", () => {
      write_tasks.style.display = "none";
      active.style="border-bottom : 6px solid #2F80ED";
      all.style = "border-bottom: none";
      if (onlyTask.checked) {
        onlyTask.style.display = "flex";
        label.style.display = "flex";
      }
    });

    all.addEventListener("click", () => {
      write_tasks.style.display = "flex";
        all.style="border-bottom : 6px solid #2F80ED";
      active.style = "border-bottom: none";
      completed.style = "border-bottom: none";

      if (onlyTask.value = true) {
        onlyTask.style.display = "flex";
        label.style.display = "flex";
      } else {
        onlyTask.style.display = "none";
        label.style.display = "none";
      }
    });

    completed.addEventListener("click", () => {
      write_tasks.style.display = "none";
      completed.style="border-bottom : 6px solid #2F80ED";
      active.style = "border-bottom: none";
      all.style = "border-bottom: none";

      if (onlyTask.checked) {
        onlyTask.style.display = "flex";
        label.style.display = "flex";
        const remove = createElement();
      } else {
        onlyTask.style.display = "none";
        label.style.display = "none";
      }
    });
  } else {
    alert("Fill the form below!");
  }
});

