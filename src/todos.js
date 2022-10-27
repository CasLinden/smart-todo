import {newToDOM, editToDOM} from "./domindex.js";
import {randomKey} from './keygenerator.js'
import {projects} from "./projects.js";

function instantiateTodo(name, desc, proj) {
    if(proj){var project = proj};
    
    return {
        name,
        desc,
        key: randomKey(),
        project,
        giveDesc() {
        return desc
        }
    }
}

function newTodo(name, desc, project) {
    let todo = instantiateTodo(name, desc, project);
    project.todos.push(todo);
    newToDOM(todo, project);
};


function findTodoObj(element, project){
    let key = element.getAttribute('data-key');
    var me = project.todos.find(element => element.key == key)
    return me
}

function editTodo(element, name, description, project){
    let me = findTodoObj(element, project)
    me.name = name;
    me.desc = description; 
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
}

function renderTodos(project){
    clearTodos()
    project.todos.forEach(todo => {newToDOM(todo, project)});
}

export { instantiateTodo, newTodo, editTodo, findTodoObj, renderTodos, renderAllTodos}
