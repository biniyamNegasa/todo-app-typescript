"use strict";
;
class TodoItem {
    constructor() {
        this.todoList = [];
        this.size = 0;
    }
    ;
    add(text) {
        text = text.trim();
        if (text) {
            this.todoList.push(text);
            this.size += 1;
        }
    }
    remove(index) {
        if (typeof index == 'number' && index < this.size && index >= 0) {
            this.todoList.splice(index, 1);
            this.size -= 1;
        }
    }
    display() {
        if (this.size > 0) {
            console.log(`Here are your todo lists.\n`);
            for (let i = 0; i < this.size; i++) {
                console.log(i + 1, this.todoList[i]);
            }
        }
        else {
            console.log(`You don't have any todo lists.\n`);
        }
    }
}
;
const todo = new TodoItem();
let haveConversation = true;
while (haveConversation) {
    console.log(`Welcome to your todo app!\n`);
    console.log(`Choose what you want to do: `);
    console.log(`1 to display your todo lists`);
    console.log(`2 to add new todo`);
    console.log(`3 to remove a todo`);
    console.log(`4 to end this conversation`);
    let userInput = prompt("Insert your choice here");
    if (userInput == null || +userInput < 1 || +userInput > 4) {
        console.log("You have to choose one of the numbers from the given alternatives.");
    }
    else {
        switch (+userInput) {
            case 1:
                todo.display();
                break;
            case 2:
                let text = prompt("Please provide your todo.");
                if (text != null)
                    todo.add(text);
                break;
            case 3:
                let index = prompt("Please provide the index of the todo you want to remove.");
                if (index != null)
                    todo.remove(+index - 1);
                break;
            case 4:
                haveConversation = false;
                break;
        }
    }
}
