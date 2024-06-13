const prompt = require('prompt-sync')();
const methods = require('./Methods.js');

let main = () => {
    while (true) {
        console.log('1. Add Task | 2. Update Task | 3. Delete Task | 4. View Tasks | 5. Mark Task as Completed | 6. Exit');
        let command = parseInt(prompt('Enter Command: '));
        switch (command) {
            case 1:
                methods.addTask();
                break;
            case 2:
                methods.updateTask();
                break;
            case 3:
                methods.deleteTask();
                break;
            case 4:
                methods.viewTasks();
                break;
            case 5:
                methods.markTask();
                break;
            case 6:
                console.log('Exiting...');
                return;
            default:
                console.log("Invalid Command");
        }
    }
}

main();
