import {newTodo, findTodoObj, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject} from './projects.js'
import {newTabButton} from './domelements.js'
import {format} from 'date-fns'


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

  function dueDateInput (date){
    let input = document.createElement('input');
    input.setAttribute('id', 'due-date-input');
    input.setAttribute('type', 'date');
    if(date){input.setAttribute('value', date);
    } else{
        let now = format(new Date(), 'yyyy-MM-dd');
        input.setAttribute('value', now);
     }
     return input
  }

  function submitTodoButton (element, project) {
    let btn = document.createElement('button');
    btn.textContent = "OK";
    btn.classList.add('submit-button')
    btn.addEventListener('click', () => submitTodoForm(element, project))
    return btn
  }

  function submitProjectButton(){
    let btn = document.createElement('button');
    btn.textContent = "OK";
    btn.classList.add('submit-button')
    btn.addEventListener('click', () => {
        if(document.querySelector('.project-name-input').value !== ""){
            submitProjectForm();
            btn.parentElement.remove()
            newTabButton()
            } else {document.querySelector('.project-name-input').placeholder = 'NAME NEEDED!'}
        } );
    return btn
  }

  function cancelButton (){
    let btn = document.createElement('button');
    btn.textContent = "X";
    btn.classList.add('cancel-button')
    btn.addEventListener('click', () => {
    if(btn.parentElement.getAttribute('class') == "create-project-form"){ newTabButton()}
    btn.parentElement.remove()
    });
    return btn
  }

  function cancelEditButton(element, project){
    let btn = document.createElement('button');
    btn.textContent = 'cancel edit';
    btn.addEventListener('click', () => {
        editToDOM(element, project)
    });
    return btn
  }

  // ----------------ABOVE: form elements ---------------- BELOW: form logic ----------------//


  function editTodoForm(todo, project){
    const name = todo.childNodes[0].textContent
    const description = todo.childNodes[1].textContent
    let due = findTodoObj(todo, project).due
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    renderForm(todo, name, description, due, project);
};

function createTodoForm (element, project) {
    element.textContent = "";
    renderForm(element, null, null, null, project)
};

function renderForm (element, name, description, due, project) {
    element.classList.add('being-edited');
    element.appendChild(nameInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(dueDateInput(due));
    element.appendChild(submitTodoButton(element, project));
    if(name == null){element.appendChild(cancelButton())
    }else(element.appendChild(cancelEditButton(element, project)));
    document.getElementById('name-input').focus();
    element.querySelectorAll('input').forEach(element => {
        submitWithEnter(element)
    });;
}

function submitTodoForm(element, project) {
    const name = element.childNodes[0].value
    const description = element.childNodes[1].value
    let due = element.childNodes[2].value
    if(element.classList.contains('editable')){
        editTodo(element, name, description, due, project);
        editToDOM(element, project);
    } else{
        newTodo(name, description, due, project);
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
    element.appendChild(cancelButton())
    document.getElementById('name-input').focus()
    submitWithEnter(element);
}

function submitProjectForm (){
    let name = document.querySelector('.project-name-input').value;
    createProject(name);
};

function submitWithEnter(element){
    element.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        element.parentElement.querySelector('.submit-button').click();
        }
    });
}


export {nameInput, descriptionInput, submitTodoButton, renderForm, editTodoForm, createTodoForm, submitTodoForm, editProjectName}