import {createForm, editForm} from './domforms'
import {findTodoObj, todos} from './todos'

function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To-Do';
    header.appendChild(title);
    document.body.appendChild(header);
  }

  function makeTabsBar(){
    const header = document.querySelector('.header');
    const tabsBar = document.createElement('div');
    tabsBar.classList.add('tabs-bar');
    
      function mainTab() {
        const today = document.createElement('div');
        today.classList.add('tab', 'maintab')
        today.textContent = 'Today'
        tabsBar.appendChild(today);
      }

      function newTabButton() {
        const btn = document.createElement('div');
        btn.classList.add('create-button');
        btn.textContent = '+ project'
        tabsBar.appendChild(btn)
      }
    
    
    mainTab()
    newTabButton()
    header.appendChild(tabsBar);
  }


  
  function makeTodosContainer(){
    let container = document.createElement('div');
    container.classList.add('todos-container');
    document.body.appendChild(container);
  }
        
  function newTodoButton () {
    let container = document.querySelector('.todos-container');
    let createButton = document.createElement('div')
    createButton.classList.add('create-button');
    createButton.textContent = '+ To-Do';
    createButton.addEventListener('click', () => {
      createForm(createButton)
      createButton.classList.remove('create-button')
      newTodoButton()
    }, {once : true});
    container.insertBefore(createButton, container.firstChild);
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
    icon.addEventListener('click', () => {
      icon.parentElement.remove();
      let me = findTodoObj(icon.parentElement);
      let myIndex = todos.indexOf(me);
      todos.splice(myIndex, 1);
      });
    return icon
  }
  
  export{makeHeader, makeTabsBar, makeTodosContainer, newTodoButton, deleteIcon, editIcon, todoContainer, todoTitle, todoDescription}