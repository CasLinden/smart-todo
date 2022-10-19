import {makeHeader, makeTodosContainer, makeCreateButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription, nameInput, descriptionInput} from './domelements.js'

makeHeader()
makeTodosContainer() 
makeCreateButton()

function toDOM(todo){
let toDoContainer = document.querySelector('.todos-container');
let itmContainer = todoContainer();
itmContainer.setAttribute('data-key', `${todo.key}`)
itmContainer.appendChild(todoTitle(todo));
itmContainer.appendChild(todoDescription(todo));
itmContainer.appendChild(editIcon());
itmContainer.appendChild(deleteIcon());
toDoContainer.appendChild(itmContainer);
}

function editToDOM (todo, name, description) {
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    todo.appendChild()
}


export {toDOM, editToDOM}









