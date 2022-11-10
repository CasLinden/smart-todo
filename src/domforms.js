import {newTodo, findTodoObj, editTodo} from './todos.js'
import {editToDOM} from './domindex.js'
import {createProject, findProjectObj} from './projects.js'
import {newTab, newTabButton, tabTitle} from './domelements.js'
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
    btn.textContent = "ADD";
    btn.classList.add('submit-button')
    let icon = btn.appendChild(document.createElement('div'))
    icon.classList.add('check-icon', 'icon')
    btn.addEventListener('click', () => submitTodoForm(element, project))
    return btn
  }

  function submitProjectButton(){
    let btn = document.createElement('button');
    btn.classList.add('submit-button');
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('check-icon', 'icon');
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
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('check-icon', 'icon');
    btn.classList.add('submit-button')
        btn.addEventListener('click', () => {
            let element = btn.parentElement
            let obj = findProjectObj(element.getAttribute('data-key'))
            obj.name = element.firstChild.value;
            while (element.firstChild) {
                element.removeChild(element.lastChild);
            }
            let title = element.appendChild(tabTitle(obj.name, obj.key));
            if(document.querySelector('.projects-wrapper').classList.contains('projects-being-edited')){
                addIcons(element)
            }
            title.click()
        })
    return btn
  }

  function cancelButton (){
    let btn = document.createElement('button');
    btn.textContent = "REMOVE"
    btn.classList.add('cancel-button')
    let icon = btn.appendChild(document.createElement('div'))
    icon.classList.add('remove-icon', 'icon')
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
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon')
    btn.addEventListener('click', () => {
        editToDOM(element, project)
    });
    return btn
  }

  function undoProjectEditButton(element, obj){
    let btn = document.createElement('button');
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon');
    let index = Array.from(document.querySelector('.tabs-bar').childNodes).indexOf(element);
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        newTab(obj.name, obj.key, index)
        let tab = document.querySelector(`[data-key='${obj.key}']`)
        tab.classList.add('active-tab');
        if(document.querySelector('.projects-wrapper').classList.contains('projects-being-edited')){addIcons(tab)}
        
    })
    return btn
  }

  function cancelAddButton(small) {
    let btn = document.createElement('button');
    if(small !== 'small'){btn.textContent = 'UNDO'}
    else{btn.style.border = '.15rem solid white'}
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon')
    btn.addEventListener('click', () => {
        if(small !== 'small'){
            btn.parentElement.parentElement.remove();
        } else{
            btn.parentElement.remove()
            newTabButton();};      
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
    label.setAttribute('for', idString)
    let titleString = idString.slice(0, idString.indexOf('-input'));
    label.classList.add(`${titleString}-label`, 'label')
    let capString = titleString.charAt(0).toUpperCase() + titleString.slice(1)+ ':';
    label.textContent = capString;
    let container = input.parentNode;
    container.insertBefore(label, input);

  }

  // ----------------ABOVE: form elements ---------------- BELOW: form logic ----------------//


function editTodoForm(todo, project){
    let obj = findTodoObj(todo, project);
    const name = obj.name;
    const description = obj.desc;
    const due = obj.due;
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
    element.appendChild(titleInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(dueDateInput(due));
    let btnContainer = element.appendChild(buttonsContainer())
    btnContainer.appendChild(submitTodoButton(element, project));
    if(name){
        btnContainer.appendChild(cancelEditButton(element, project))
        btnContainer.appendChild(cancelButton())};
    if(name == null) {
        btnContainer.appendChild(cancelAddButton());}
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
    element.appendChild(cancelAddButton('small'));
    document.getElementById('title-input').focus();
    submitWithEnter(element);
}

function editProjectName (element, obj){
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    };
    let nameField = element.appendChild(titleInput(obj.name));
    element.appendChild(projectEditButton());
    element.appendChild(undoProjectEditButton(element, obj));
    submitWithEnter(nameField);
};

function submitProjectForm (){
    let name = document.querySelector('.project-name-input').value;
    createProject(name);
};

function submitWithEnter(element){
    
    var keysPressed = {};
    element.addEventListener('keydown', e => {
        keysPressed[e.key] = true;
    })
    element.addEventListener('keyup', e => {
        delete keysPressed[e.key]
    })

    element.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !keysPressed.Shift){
        console.log(keysPressed)
        console.log(!keysPressed.Shift)
        element.parentElement.querySelector('.submit-button').click();
        }
    });
};


export {titleInput, descriptionInput, submitTodoButton, renderForm, editTodoForm, createTodoForm, submitTodoForm, editProjectName, newProjectName, submitWithEnter}