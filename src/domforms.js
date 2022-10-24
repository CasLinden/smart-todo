import {newTodo, todos, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject, projects} from './projects.js'
import {newTabButton} from './domelements.js'

function nameInput (value) {
    let input = document.createElement('input');
    input.setAttribute('id', 'name-input');
    if(value) 
    {input.setAttribute('value', value)
    } else 
    {input.setAttribute('placeholder', 'Task')}
    return input
  }

  function descriptionInput (value){
    let input = document.createElement('input');
    input.setAttribute('id', 'description-input');
    if(value) 
    {input.setAttribute('value', value)
    } else {input.setAttribute('placeholder', 'Description')} 
    return input
  }

  function submitTodoButton (element, project) {
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => submitTodoForm(element, project))
    return btn
  }

  function submitProjectButton(){
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => {
        submitProjectForm();
        btn.parentElement.remove()
        newTabButton()
        } );
    return btn
  }


  // ----------------ABOVE: form elements ---------------- BELOW: form logic ----------------//


  function editTodoForm(todo, project){
    const name = todo.childNodes[0].textContent
    const description = todo.childNodes[1].textContent
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    renderForm(todo, name, description, project);
};

function createTodoForm (element, project) {
    element.textContent = "";
    renderForm(element, null, null, project)
};

function renderForm (element, name, description, project) {
    element.classList.add('being-edited');
    element.appendChild(nameInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(submitTodoButton(element, project));
}

function submitTodoForm(element, project) {
    const name = element.childNodes[0].value
    const description = element.childNodes[1].value
    if(element.classList.contains('editable')){
        editTodo(element, name, description, project);
        editToDOM(element, project);
    } else{
        if (project){
            newTodo(name, description, project);
        }  else {newTodo(name, description)};   
        element.remove();
    }
};

function editProjectName(element){
    element.firstChild.remove();
    element.classList.remove('create-project-button');
    element.classList.add('create-project-form');
    let input = nameInput();
    input.setAttribute('placeholder', 'Name your Project')
    input.classList.add('project-name-input')
    element.appendChild(input)
    element.appendChild(submitProjectButton())
}

function submitProjectForm (){
    let name = document.querySelector('.project-name-input').value;
    createProject(name);
};

export {nameInput, descriptionInput, submitTodoButton, renderForm, editTodoForm, createTodoForm, submitTodoForm, editProjectName}