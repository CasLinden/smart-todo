import {createTodoForm, editTodoForm, editProjectName} from './domforms.js'
import {findTodoObj, renderTodos, renderAllTodos} from './todos.js'
import {findProjectObj, projects} from './projects.js'

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
    header.appendChild(tabsBar);
    
  }

  function mainTab() {
    let tabsBar = document.querySelector('.tabs-bar');
    const today = document.createElement('div');
    today.classList.add('tab', 'maintab');
    today.textContent = 'All';
    today.addEventListener('click', () => {
    renderAllTodos();
    newTodoButton();
    });
    tabsBar.appendChild(today);
  }

  function newTabButton() {
    let tabsBar = document.querySelector('.tabs-bar');
    const btn = document.createElement('div');
    btn.classList.add('create-project-button');
    btn.textContent = '+ project'
    btn.addEventListener('click', () => {
     editProjectName(btn);
    }, {once : true});
    tabsBar.appendChild(btn)
  }

  function newTab(name, key){
    let tabsBar = document.querySelector('.tabs-bar');
    let projectTab = document.createElement('div');
    projectTab.classList.add('tab');
    projectTab.setAttribute('data-key', key)
    projectTab.textContent = name
    projectTab.addEventListener('click', () => {
      let objectus = findProjectObj(key)
      renderTodos(objectus)
      newTodoButton(objectus)
      });
    tabsBar.appendChild(projectTab)
  }
  
  function makeTodosContainer(){
    let container = document.createElement('div');
    container.classList.add('todos-container');
    document.body.appendChild(container);
  }
        
  function newTodoButton (project) {
    let container = document.querySelector('.todos-container');
    let createButton = document.createElement('div')
    createButton.classList.add('create-button');
    
    if(project)
      {createButton.textContent = `+ To-Do for ${project.name}`}
      else {createButton.textContent = '+ To-Do';}

    createButton.addEventListener('click', () => {
      createTodoForm(createButton, project)
      createButton.classList.remove('create-button')
      newTodoButton(project)
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

  function editIcon(project) {
    let icon = document.createElement('div');
    icon.classList.add('edit-icon');
    icon.addEventListener('click', () => {
      icon.parentElement.classList.remove('todo-container');
      editTodoForm(icon.parentElement, project)
    });
      return icon
  }
  
  function deleteIcon (project) {
    let icon = document.createElement('div')
    icon.classList.add('delete-icon');
    icon.addEventListener('click', () => {
      icon.parentElement.remove();
      let me = findTodoObj(icon.parentElement, project);
      if (project){
        let myIndex = project.todos.indexOf(me);
        project.todos.splice(myIndex, 1);
      } else {
        let myIndex = todos.indexOf(me);
        todos.splice(myIndex, 1)
      };
    });
    return icon
  }
  
  export{makeHeader, makeTabsBar, mainTab, newTabButton, newTab, makeTodosContainer, newTodoButton,  deleteIcon, editIcon, todoContainer, todoTitle, todoDescription}