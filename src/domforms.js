import {newTodo, findTodoObj, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject, findProjectObj} from './projects.js'
import {newTabButton, tabTitle} from './domelements.js'
import {addIcons} from './projectsoptions.js'



function titleInput (value) {
    let input = document.createElement('input');
    input.setAttribute('id', 'title-input');
    if(value) 
    {input.setAttribute('value', value)
    }
    return input
  }


  function descriptionInput (val){
    let input = document.createElement('textarea');
    input.setAttribute('id', 'description-input');
    if(val) 
    {input.value = val
    } 
    return input
  }

  function dueDateInput (date){
    let input = document.createElement('input');
    input.setAttribute('id', 'deadline-input');
    input.setAttribute('type', 'datetime-local');
    if(date){input.setAttribute('value', date);
    } 
     return input
  }

  function submitTodoButton (element, project) {
    let btn = document.createElement('button');
    btn.textContent = "DONE";
    btn.classList.add('submit-button')
    btn.appendChild(document.createElement('i'))
    btn.addEventListener('click', () => submitTodoForm(element, project))
    return btn
  }

  function submitProjectButton(){
    let btn = document.createElement('button');
    btn.textContent = "DONE";
    btn.classList.add('submit-button')
    btn.appendChild(document.createElement('i'))
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
    btn.textContent = "BIN";
    btn.classList.add('cancel-button')
    btn.appendChild(document.createElement('i'))
    btn.addEventListener('click', () => {
    if(btn.parentElement.getAttribute('class') == "create-project-form"){
        newTabButton()
        btn.parentElement.remove()
    } else {btn.parentElement.parentElement.remove()}
    });
    return btn
  }

  function cancelEditButton(element, project){
    let btn = document.createElement('button');
    btn.textContent = 'UNDO';
    btn.appendChild(document.createElement('i'))
    btn.addEventListener('click', () => {
        editToDOM(element, project)
    });
    return btn
  }

  function buttonsContainer(){
    let container = document.createElement('div');
    container.classList.add('buttons-container')
    return container
  }

  function label (input) {
    let label = document.createElement('label');
    let idString = input.getAttribute('id');
    let titleString = idString.slice(0, idString.indexOf('-input'));
    label.classList.add(`${titleString}-label`, 'label')
    // don't shuffle order
    titleString = titleString.charAt(0).toUpperCase() + titleString.slice(1)+ ':';
    label.textContent = titleString;
    let container = input.parentNode;
    container.insertBefore(label, input);

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
    console.log(description)
    element.classList.add('being-edited');
    element.appendChild(titleInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(dueDateInput(due));
    let btnContainer = element.appendChild(buttonsContainer())
    btnContainer.appendChild(submitTodoButton(element, project));
    if(name !== null){btnContainer.appendChild(cancelEditButton(element, project))};
    btnContainer.appendChild(cancelButton());
    document.getElementById('title-input').focus();
    element.querySelectorAll('input, textarea').forEach(element => {
        submitWithEnter(element);
        label(element);
    });
};

function submitTodoForm(element, project) {
    const name = element.querySelector('#title-input').value
    const description = element.querySelector('#description-input').value
    let due = element.querySelector('#deadline-input').value
    console.log(typeof due);
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
    let input = titleInput();
    input.setAttribute('placeholder', 'Name your Project');
    input.classList.add('project-name-input');
    element.appendChild(input);
    element.appendChild(submitProjectButton());
    element.appendChild(cancelButton());
    document.getElementById('title-input').focus();
    submitWithEnter(element);
}

function editProjectName (element, obj){
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    };
    let nameField = element.appendChild(titleInput(obj.name));
    element.appendChild(projectEditButton());
    submitWithEnter(nameField);
};

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
};


export {titleInput, descriptionInput, submitTodoButton, renderForm, editTodoForm, createTodoForm, submitTodoForm, editProjectName, newProjectName, submitWithEnter}