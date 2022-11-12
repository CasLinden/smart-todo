import {makeHeader, makeTabsBar, makeTabsHeader, mainTab, newTabButton, makeTodosContainer, newTodoButton, editIcon, todoContainer, todoTitle, todoDescription, dueDate, checkBox} from './domelements.js'
import {findTodoObj} from './todos.js'
import {projects} from './projects.js'

makeHeader()
makeTabsHeader()
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
    element.appendChild(checkBox(todoObj));
    element.appendChild(todoTitle(todoObj));
    element.appendChild(todoDescription(todoObj));
    element.appendChild(dueDate(todoObj));
    element.style.border = ` 2px solid ${project.color}`
    if (project){
        element.appendChild(editIcon(project));
       
    } else {
        element.appendChild(editIcon());  
    };  
}

export {toDOM, editToDOM, newToDOM}