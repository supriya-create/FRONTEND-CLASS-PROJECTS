"use strict";
let tasks = [];
function addTask(title) {
    const newTask = {
        id: Date.now(),
        title: title,
        status: "pending"
    };
    tasks.push(newTask);
    console.log("Task Added: ", newTask);
}
function completeTask(id) {
    tasks.forEach((task) => {
        if (task.id === id) {
            task.status = "completed";
        }
    });
}
// Generic Function for Filtering
function filterTasks(taskList, filter) {
    switch (filter) {
        case "active":
            return taskList.filter(task => task.status === "pending");
        case "completed":
            return taskList.filter(task => task.status === "completed");
        default:
            return taskList;
    }
}
// Type Narrowing Example
function printTask(task) {
    if (typeof task === "string") {
        console.log("Task Name:", task);
    }
    else {
        console.log(`${task.title} - ${task.status}`);
    }
}
// Function Calls
addTask("Learn TypeScript");
addTask("Build Todo App");
completeTask(tasks[0].id);
console.log(filterTasks(tasks, "completed"));
printTask(tasks[0]);
printTask("Simple Task");
