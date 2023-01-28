// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for Add Button

addTask.addEventListener("click", function () {
    // Create a task div and add it a class

    let task = document.createElement("div");
    task.classList.add("task");

    // transition adding for the task div

    task.style.transition = "opacity .5s ease-out";
    task.style.opacity = 0;

    // Create a list item, add it a class and append it to the task div

    let li = document.createElement("li");
    li.innerText = inputTask.value;
    task.appendChild(li);

    // Create a check button, add it a class and append it to the task div

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    // Create a delete task button, add it a class and append it to the task div

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    // if nothing is typed inside the task input show an alert message
    if (inputTask.value === "") {
        alert("Please Enter a Task!");

        // else append the task div to the task container div
    } else {
        taskContainer.appendChild(task);

        // adding a settimeout function with 0ms so that the transition for task div opacity takes effect
        setTimeout(function () {
            task.style.opacity = 1;
        }, 0);
    }

    // remove the text from the task input after assigning it to the new task div

    inputTask.value = "";

    // add a line through the task content text when clicking on the check button

    checkButton.addEventListener("click", function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";

            task.querySelector(".checkTask").style.backgroundColor =
                "#ffffffa1";
            task.querySelector(".checkTask").style.color = "green";
        } else {
            li.style.textDecoration = "line-through";

            task.querySelector(".checkTask").style.backgroundColor =
                "#008000b8";
            task.querySelector(".checkTask").style.color = "#fff";
        }
    });

    // Delete and remove the task when clicking on the delete button

    deleteButton.addEventListener("click", function () {
        task.style.transition = "opacity .3s ease-out";
        task.style.opacity = 0;
        setTimeout(function () {
            task.remove();
        }, 300);
    });
});
