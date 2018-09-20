/* TO-DO APP Prototype */
const inputDiv = document.getElementById('input');
const addBtn = document.getElementById('add');
let taskInput = document.getElementById('task');
const taskList = document.getElementById('tasklist');
const clearBtn = document.getElementById('clear');
let errorMsg = document.getElementById('error');

// add new item to task list
addBtn.addEventListener('click', function () {
    task = taskInput.value;
    // Forbid empty string
    if (task.trim()) {
        // add task list item
        let newItem = document.createElement("LI");
        let taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = "";
        // add the "Done" button
        let removeBtn = document.createElement("button");
        let doneBtn = document.createElement("button");
        doneBtn.innerHTML = "DONE"
        doneBtn.className = "remove";
        removeBtn.innerHTML = "REMOVE";
        removeBtn.className = "remove";
        doneBtn.addEventListener('click', completeTask);
        removeBtn.addEventListener('click', removeTask);
        taskList.appendChild(newItem);
        newItem.appendChild(doneBtn);
        newItem.appendChild(removeBtn);
    } else {
        alert("Task cannot be empty");
    }
});

clearBtn.addEventListener('click', function () {
    let warning = prompt("Are you sure? You will lose all your to-do's.\nYES(Y)\nNO(N)");
    if (warning.toUpperCase() == "YES" || warning.toUpperCase() == "Y") {
        taskList.innerHTML = "";
    }
});

// complete a task from the list
function completeTask (e) {
    let taskItem = e.target.parentElement;
    taskItem.style.color = "gray";
    taskItem.style.textDecoration = "line-through";
}

// remove a task from the list
function removeTask(e){
    // get the parent list item to remove
    let taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
};