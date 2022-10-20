import {makeHeader, makeTabsBar, makeTodosContainer, newTodoButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription, nameInput, descriptionInput} from './domelements.js'
import {findTodoObj} from './todos.js'

makeHeader()
makeTabsBar()
makeTodosContainer() 
newTodoButton()

function newToDOM (todo){
    let toDosContainer = document.querySelector('.todos-container');
    let newTodoElement = todoContainer();
    toDOM(newTodoElement, todo)
    toDosContainer.appendChild(newTodoElement);
}

function editToDOM (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    element.classList.add('todo-container');
    element.classList.remove('being-edited');
    let me = findTodoObj(element);
    toDOM(element, me);
}

function toDOM(element, todoObj){
    element.setAttribute('data-key', `${todoObj.key}`)
    element.appendChild(todoTitle(todoObj));
    element.appendChild(todoDescription(todoObj));
    element.appendChild(editIcon());
    element.appendChild(deleteIcon()); 
}

export {toDOM, editToDOM, newToDOM}









