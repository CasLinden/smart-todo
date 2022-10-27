import {makeHeader, makeTabsBar, mainTab, newTabButton, makeTodosContainer, newTodoButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription, nameInput, descriptionInput} from './domelements.js'
import {findTodoObj} from './todos.js'
import {projects} from './projects.js'

makeHeader()
makeTabsBar()

mainTab()
newTabButton()

makeTodosContainer() 
newTodoButton(projects[0])


function newToDOM (todo, project){
    let toDosContainer = document.querySelector('.todos-container');
    let newTodoElement = todoContainer();
    toDOM(newTodoElement, todo, project)
    toDosContainer.appendChild(newTodoElement);
}

function editToDOM (element, project) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    element.classList.add('todo-container');
    element.classList.remove('being-edited');
    let me = findTodoObj(element, project);
    toDOM(element, me, project);
}

function toDOM(element, todoObj, project){
    element.setAttribute('data-key', `${todoObj.key}`)
    element.appendChild(todoTitle(todoObj));
    element.appendChild(todoDescription(todoObj));
    if (project){
        element.appendChild(editIcon(project));
        element.appendChild(deleteIcon(project)); 
       
    } else {
        element.appendChild(editIcon());
        element.appendChild(deleteIcon());    
    };  
}

export {toDOM, editToDOM, newToDOM}









