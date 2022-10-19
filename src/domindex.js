import {makeHeader, makeTodosContainer, makeCreateButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription, nameInput, descriptionInput} from './domelements.js'
import {findTodoObj} from './todos.js'

makeHeader()
makeTodosContainer() 
makeCreateButton()

function newToDOM (todo){
    let toDosContainer = document.querySelector('.todos-container');
    let newTodoElement = todoContainer();
    toDOM(newTodoElement, todo)
    toDosContainer.appendChild(newTodoElement);
}

function editToDOM (todo, name, description) {
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    todo.classList.add('todo-container');
    todo.classList.remove('being-edited');
    let me = findTodoObj(todo);
    toDOM(todo, me);
}

function toDOM(todoElement, todoObj){
    todoElement.setAttribute('data-key', `${todoObj.key}`)
    todoElement.appendChild(todoTitle(todoObj));
    todoElement.appendChild(todoDescription(todoObj));
    todoElement.appendChild(editIcon());
    todoElement.appendChild(deleteIcon()); 
}

export {toDOM, editToDOM, newToDOM}









