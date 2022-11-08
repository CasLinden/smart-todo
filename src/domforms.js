import {newTodo, findTodoObj, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject, findProjectObj} from './projects.js'
import {newTabButton, tabTitle} from './domelements.js'
import {format} from 'date-fns'
import {addIcons} from './projectsoptions.js'
import {addDays, intervalToDuration, parseISO} from 'date-fns'


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
    input.setAttribute('type', 'datetime-local');
    if(date){input.setAttribute('value', date);
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

  function projectEditButton () {
    let btn = document.createElement('button');
    btn.textContent = "OK";
    btn.classList.add('submit-button')
        btn.addEventListener('click', () => {
            let element = btn.parentElement
            let obj = findProjectObj(element.getAttribute('data-key'))
            obj.name = element.firstChild.value;
            while (element.firstChild) {
                element.removeChild(element.lastChild);
            }
            let title = element.appendChild(tabTitle(obj.name, obj.key));
            if(document.querySelector('.projects-wrapper').classList.contains('being-edited')){
                addIcons(element)
            }
            title.click()
        })
    return btn
  }

  function cancelButton (){
    let btn = document.createElement('button');
    btn.textContent = "X";
    btn.classList.add('cancel-button')
    btn.addEventListener('click', () => {
    if(btn.parentElement.getAttribute('class') == "create-project-form"){newTabButton()}
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
    let obj = findTodoObj(todo, project);
    const name = obj.name;
    const description = obj.desc;
    const due = obj.due
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
    console.log(typeof due)
    if(element.classList.contains('editable')){
        editTodo(element, name, description, due, project);
        editToDOM(element, project);
    } else{

        newTodo(name, description, due, project);
        element.remove();
    }
};

function newProjectName(element){
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

function editProjectName (element, obj){
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    let nameField = element.appendChild(nameInput(obj.name))
    element.appendChild(projectEditButton())
    submitWithEnter(nameField)
    
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


export {nameInput, descriptionInput, submitTodoButton, renderForm, editTodoForm, createTodoForm, submitTodoForm, editProjectName, newProjectName, submitWithEnter}