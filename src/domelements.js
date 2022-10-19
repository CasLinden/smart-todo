import {createForm, editForm} from './domforms'

function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To-Do';
    header.appendChild(title);
    document.body.appendChild(header);
  }
  
  function makeTodosContainer(){
    let container = document.createElement('div');
    container.classList.add('todos-container');
    document.body.appendChild(container);
  }
        
  function makeCreateButton () {
    let container = document.querySelector('.todos-container');
    let addBtn = document.createElement('div')
    addBtn.classList.add('create-button');
    addBtn.textContent = '+';
    addBtn.addEventListener('click', () => {
      createForm(addBtn)
      addBtn.classList.remove('create-button')
      makeCreateButton()
    }, {once : true});
    container.insertBefore(addBtn, container.firstChild);
  }

// ----------------ABOVE: site elements ---------------- BELOW: todos elements ----------------//

  function todoContainer () {
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container', 'editable')
    return todoContainer
  }
  
  function todoTitle (todo) {
    let title = document.createElement('span');
    title.classList.add('todo-title');
    if(todo){title.textContent = todo.name;}
    return title
  }
  
  function todoDescription (todo) {
    let description = document.createElement('span');
    description.classList.add('todo-description');
    if(todo){description.textContent = todo.desc;}
    return description
  }

  function editIcon() {
    let icon = document.createElement('div');
    icon.classList.add('edit-icon');
    icon.addEventListener('click', () => {
      icon.parentElement.classList.remove('todo-container');
      editForm(icon.parentElement)
    });
      return icon
  }
  
  function deleteIcon () {
    let icon = document.createElement('div')
    icon.classList.add('delete-icon');
    icon.addEventListener('click', () => icon.parentElement.remove())
    return icon
  }
  
  export{makeHeader, makeTodosContainer, makeCreateButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription}