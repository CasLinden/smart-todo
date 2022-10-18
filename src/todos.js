import {toDOM, processEditForm} from "./domstuff.js";
import {newFormDOM, createButton} from './domelements.js'
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

let findTodo  = (dataKey) => {
    return todos.filter(todo => todo.key == dataKey)
}


function editForm(item){
    item.classList.add('being-edited');
    const name = item.childNodes[0].textContent
    const description = item.childNodes[1].textContent
    while (item.firstChild) {
        item.removeChild(item.lastChild);
    }
    newFormDOM(item, name, description);

};

function createForm (item) {
    item.classList.add('being-edited');
    item.textContent = "";
    newFormDOM(item);
};

function submitForm(item) {
    const name = item.childNodes[0].value
    const description = item.childNodes[1].value
    if(item.classList.contains('editable')){
        let key = item.getAttribute('data-key');
        findTodo(key).name = name;
        findTodo(key).description = description;
        console.log(findTodo(key))
    
    } else{
    exampleTodo(name, description);
    item.remove()
    }
    console.log(todos)
};

export {todos, instantiateTodo, editForm, renderTodos, renderTodo, createForm, exampleTodo, submitForm}
