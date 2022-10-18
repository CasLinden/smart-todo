import {todos, instantiateTodo, editTodo} from './todos.js'
import {makeHeader, toDoContainer, newButton, deleteIcon, editIcon, itemContainer, itemTitle, itemDescription, nameInput, descriptionInput} from './domelements.js'

function toDOM(item){
let toDoContainer = document.querySelector('.to-do-container');
let itmContainer = itemContainer();
let itmTitle = itemTitle(item);
let itmDescription = itemDescription(item);
let delIcon = deleteIcon();
let edIcon = editIcon();


itmContainer.appendChild(itmTitle);
itmContainer.appendChild(itmDescription);
itmContainer.appendChild(edIcon);
itmContainer.appendChild(delIcon);
toDoContainer.appendChild(itmContainer);
}




export {toDOM}









