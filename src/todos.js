import {newToDOM, editToDOM} from "./domindex.js";
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

function newTodo(name, desc) {
    let todo = instantiateTodo(name, desc);
    todos.push(todo);
    newToDOM(todo);
};

function findTodoObj(todo){
    let key = todo.getAttribute('data-key');
    let me = todos.find(element => element.key == key);
    return me
}

function editTodo(todo, name, description){
    let me = findTodoObj(todo)
    me.name = name;
    me.desc = description; 
    console.log(todos);
}

export {todos, instantiateTodo, newTodo, editTodo, findTodoObj}
