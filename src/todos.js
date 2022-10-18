import {toDOM} from "./domstuff.js";
import {formDOM} from './domelements.js'

function instantiateTodo(name, desc) {
    return {
        name,
        desc,
        giveDesc() {
        return desc
        }
    }
}

const todos = [];

function exampleTodo(name, desc) {
    let item = instantiateTodo(name, desc);
    todos.push(item);
    toDOM(item);
};

let renderTodos = () => {
    todos.forEach(element => {toDOM(element)})
}; 

let renderTodo = (todo) => {
    toDOM(todo);
};


function editTodo(item){
    item.classList.add('being-edited');      
};

function createTodo (item) {
    item.classList.add('being-edited');
    item.textContent = "";
    formDOM(item);
};

function submitForm() {
    let name = document.getElementById('name-input').value
    let description = document.getElementById('description-input').value
    exampleTodo(name, description)
};

export {todos, instantiateTodo, editTodo, renderTodos, renderTodo, createTodo, exampleTodo, submitForm}
