import {toDOM, editToDOM} from "./domindex.js";
import {randomKey} from './keygenerator.js'

function instantiateTodo(name, desc) {
    return {
        name,
        desc,
        key: randomKey(),
        giveDesc() {
        return desc
        }
    }
}

const todos = [];

function exampleTodo(name, desc) {
    let todo = instantiateTodo(name, desc);
    todos.push(todo);
    toDOM(todo);
};

let findTodo  = (dataKey) => {
    return todos.filter(todo => todo.key == dataKey)
}


export {todos, instantiateTodo, exampleTodo, findTodo}
