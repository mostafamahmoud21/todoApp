const prompt = require('prompt-sync')();
const list = require('./data.js');

let addTask = () => {
    let newTask = {
        task: prompt("Enter Task: "),
        date: new Date().toLocaleString(),
        completed: false
    };
    list.push(newTask);
    console.log(list);
}

let updateTask = () => {
    let index = Number(prompt('Enter Task Number: ')) - 1;
    if (index >= 0 && index < list.length) {
        console.log('1. Task | 2. Date');
        let field = Number(prompt("Enter the number of the field you need to edit: "));
        let value = prompt("Enter new value: ");
        if (field === 1) {
            list[index].task = value;
        } else if (field === 2) {
            list[index].date = new Date(value).toLocaleString();
        }
        console.log('Task Updated:', list[index]);
    } else {
        console.log('Task Not Found');
    }
}

let deleteTask = () => {
    let index = Number(prompt("Enter Task Number: ")) - 1;
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
        console.log("Task Deleted Successfully");
    } else {
        console.log("Task Not Found");
    }
}

let viewTasks = () => {
    if (list.length === 0) {
        console.log('Task List Is Empty!');
    } else {
        console.log('Task List:');
        list.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.date} - Completed: ${task.completed}`);
        });
    }
}

let markTask = () => {
    let index = Number(prompt('Enter Task Number: ')) - 1;
    if (index >= 0 && index < list.length) {
        list[index].completed = true;
        console.log('Task Marked as Completed:', list[index]);
    } else {
        console.log('Task Not Found');
    }
}

module.exports = { addTask, updateTask, deleteTask, viewTasks, markTask };
