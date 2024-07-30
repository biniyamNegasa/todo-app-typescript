"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
function conversation() {
    console.log(`\n\nWelcome to your todo app!\n`);
    console.log(`Choose what you want to do: `);
    console.log(`1 to display your todo lists`);
    console.log(`2 to add new todo`);
    console.log(`3 to remove a todo`);
    console.log(`4 to end this conversation`);
    rl.question("Insert your choice here: ", (userInput) => {
        if (userInput == null || Number.isNaN(+userInput) || +userInput < 1 || +userInput > 4) {
            console.log("You have to choose one of the numbers from the given alternatives.");
            conversation();
        }
        else {
            switch (+userInput) {
                case 1:
                    todo.display();
                    conversation();
                    break;
                case 2:
                    rl.question("Please provide your todo: ", (text) => {
                        if (text != null)
                            todo.add(text);
                        conversation();
                    });
                    break;
                case 3:
                    rl.question("Please provide the index of the todo you want to remove: ", (index) => {
                        if (index != null)
                            todo.remove(+index - 1);
                        conversation();
                    });
                    break;
                case 4:
                    rl.close();
                    break;
            }
        }
    });
}
conversation();
