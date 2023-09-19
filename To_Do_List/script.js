
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function addTask(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);

        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    }
});
