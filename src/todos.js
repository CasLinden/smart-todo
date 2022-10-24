import {newToDOM, editToDOM} from "./domindex.js";
import {randomKey} from './keygenerator.js'
import {projects, misc} from "./projects.js";

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

const renderAllTodos = () => {
    clearTodos()
    let array = [];
    console.log(projects);
    projects.forEach(project => array.concat(project.todos));
    array.forEach(element => {newToDOM(element)})
    console.log(array)
}



function newTodo(name, desc, project) {
    let todo = instantiateTodo(name, desc, project);
    if(project){project.todos.push(todo)}
    if(!project){var project = misc}
    // else {misc.todos.push(todo);}
    newToDOM(todo, project);
};


function findTodoObj(element, project){
    let key = element.getAttribute('data-key');
    if (project) { var me = project.todos.find(element => element.key == key)
    } else {var me = misc.todos.find(element => element.key == key)};
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

function renderTodos(project){
    clearTodos()
    if(project){
    project.todos.forEach(element => {newToDOM(element, project)});
    } else{
    let array = allTodos()
    array.forEach(element => {newToDOM(element)});
    } 
}

export { instantiateTodo, newTodo, editTodo, findTodoObj, renderTodos, renderAllTodos}
