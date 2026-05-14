type Status = "pending" | "completed";

type FilterType = "all" | "active" | "completed";

interface Task{
    id:number;
    title:string;
    status: Status;
}

let tasks: Task[] = [];

function addTask(title: string): void{
    const newTask: Task = {
        id:Date.now(),
        title: title,
        status: "pending"
    };
    tasks.push(newTask);
    console.log("Task Added: ", newTask);
}

function completeTask(id: number): void {

    tasks.forEach((task) => {

        if(task.id === id){

            task.status = "completed";
        }
    });
}

// Generic Function for Filtering
function filterTasks<T extends Task>(
    taskList: T[],
    filter: FilterType
): T[] {

    switch(filter){

        case "active":

            return taskList.filter(
                task => task.status === "pending"
            );

        case "completed":

            return taskList.filter(
                task => task.status === "completed"
            );

        default:

            return taskList;
    }
}

// Type Narrowing Example
function printTask(task: Task | string): void {

    if(typeof task === "string"){

        console.log("Task Name:", task);

    } else {

        console.log(
            `${task.title} - ${task.status}`
        );
    }
}

// Function Calls
addTask("Learn TypeScript");

addTask("Build Todo App");

completeTask(tasks[0].id);

console.log(filterTasks(tasks, "completed"));

printTask(tasks[0]);

printTask("Simple Task");