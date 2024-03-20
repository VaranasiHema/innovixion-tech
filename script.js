document.addEventListener("DOMContentLoaded", function() {
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var li = document.createElement("li");
            li.textContent = taskText;
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", function() {
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });
});
