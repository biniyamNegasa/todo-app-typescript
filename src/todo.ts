import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


interface TodoItemInterface {
    todoList: string[];
    size: number;
    add(text: string): void;
    remove(index: number): void;
    display(): void;
};

class TodoItem implements TodoItemInterface {
    todoList: string[] = [];
    size: number = 0;

    constructor(){};

    add(text: string): void {
        text = text.trim();

        if (text){
            this.todoList.push(text);
            this.size += 1;
        }
    }

    remove(index: number): void {

        if (typeof index == 'number' && index < this.size && index >= 0) {
            this.todoList.splice(index, 1);
            this.size -= 1
        }
    }

    display(): void {
        if (this.size > 0){
            console.log(`Here are your todo lists.\n`);
            for (let i = 0; i < this.size; i++){
                console.log(i+1, this.todoList[i]);
            }
        }
        else {
            console.log(`You don't have any todo lists.\n`);
        }
    }
};

const todo: TodoItem = new TodoItem();


function conversation(): void {
    
    console.log(`\n\nWelcome to your todo app!\n`);
    console.log(`Choose what you want to do: `);
    console.log(`1 to display your todo lists`);
    console.log(`2 to add new todo`);
    console.log(`3 to remove a todo`);
    console.log(`4 to end this conversation`);
    
    
    rl.question("Insert your choice here: ", (userInput) => {
        if ( userInput == null || Number.isNaN(+userInput) || +userInput < 1 || +userInput > 4){
            console.log("You have to choose one of the numbers from the given alternatives.");
            conversation();
        }
        else{
            switch(+userInput){
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