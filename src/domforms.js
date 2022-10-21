import {newTodo, todos, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject} from './projects.js'
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

  function submitTodoButton (todo) {
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => submitTodoForm(todo))
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


  function editTodoForm(todo){
    const name = todo.childNodes[0].textContent
    const description = todo.childNodes[1].textContent
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    renderForm(todo, name, description);
};

function createTodoForm (todo) {
    todo.textContent = "";
    renderForm(todo);
};

function renderForm (element, name, description) {
    element.classList.add('being-edited');
    element.appendChild(nameInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(submitTodoButton(element));
}

function submitTodoForm(todo) {
    const name = todo.childNodes[0].value
    const description = todo.childNodes[1].value
    if(todo.classList.contains('editable')){
        editTodo(todo, name, description);
        editToDOM(todo);
    } else{
    newTodo(name, description);
    todo.remove()
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