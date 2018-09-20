/* TO-DO APP Prototype */
const inputDiv = document.getElementById('input');
const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');
let task = document.getElementById('task').innerText;
let errorMsg = document.getElementById('error');
const taskList = document.getElementById('tasklist');
addBtn.addEventListener('click', function () {
    console.log(task);
});