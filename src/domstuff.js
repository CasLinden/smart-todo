import {todos, instantiateTodo, editTodo} from './todos.js'
import {makeHeader, toDoContainer, newButton, deleteIcon, editIcon, itemContainer, itemTitle, itemDescription, nameInput, descriptionInput} from './domelements.js'

function toDOM(todo){
let toDoContainer = document.querySelector('.to-do-container');
let itmContainer = itemContainer();
itmContainer.setAttribute('data-key', `${todo.key}`)
itmContainer.appendChild(itemTitle(todo));
itmContainer.appendChild(itemDescription(todo));
itmContainer.appendChild(editIcon());
itmContainer.appendChild(deleteIcon());
toDoContainer.appendChild(itmContainer);
}

function processEditForm (item, name, description) {
    while (item.firstChild) {
        item.removeChild(item.lastChild);
    }
    item.appendChild()
}


export {toDOM, processEditForm}









