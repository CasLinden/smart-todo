import {newToDOM, editToDOM} from "./domindex.js";
import {randomKey} from './keygenerator.js'
import {projects, storeLocally} from "./projects.js";
import {newTodoButton, highlightTab, removeHighlight} from './domelements.js'


function instantiateTodo(name, desc, due, proj) {
    if(proj){var project = proj};
    
    return {
        name,
        desc,
        key: randomKey(),
        due,
        project,
    }
}

function newTodo(name, desc, due, project) {
    let todo = instantiateTodo(name, desc, due, project);
    project.todos.push(todo);
    newToDOM(todo, project);
    storeLocally()
};


function findTodoObj(element, project){
    let key = element.getAttribute('data-key');
    var me = project.todos.find(element => element.key == key)
    return me
}

function editTodo(element, name, description, due, project){
    let me = findTodoObj(element, project)
    me.name = name;
    me.desc = description; 
    me.due = due;
    storeLocally()
}

function clearTodos() {
    let todosContainer = document.querySelector('.todos-container')
    while (todosContainer.firstChild) {
        todosContainer.removeChild(todosContainer.lastChild);
      }
}

const renderAllTodos = () => {
    clearTodos()
    projects.forEach(project => project.todos.forEach(todo => {newToDOM(todo, project)}));
    newTodoButton(projects[0]);
    removeHighlight()
    highlightTab(document.querySelector('.tabs-bar').childNodes[0]);
}

function renderTodos(project){
    clearTodos()
    project.todos.forEach(todo => {newToDOM(todo, project)});
    newTodoButton(project)
}

export {instantiateTodo, newTodo, editTodo, findTodoObj, renderTodos, renderAllTodos}