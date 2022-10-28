import {createTodoForm, editTodoForm, editProjectName} from './domforms.js'
import {findTodoObj, renderTodos, renderAllTodos} from './todos.js'
import {findProjectObj, projects} from './projects.js'

function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To-Do';
    header.appendChild(title);
    let projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projects-wrapper');
    header.appendChild(projectsWrapper);
    document.body.appendChild(header);
    
  }

  function makeTabsBar(){
    const wrapper = document.querySelector('.projects-wrapper');
    const tabsBar = document.createElement('div');
    tabsBar.classList.add('tabs-bar');
    wrapper.appendChild(tabsBar);
  }

  function makeTabsHeader(){
    const wrapper = document.querySelector('.projects-wrapper');
    const container = document.createElement('div');
    container.classList.add('tabs-header');
    const h2 = document.createElement('h2');
    h2.textContent = 'Projects';
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('edit-projects-icon');
    container.appendChild(h2);
    container.appendChild(iconContainer);
    
    container.addEventListener('click', () => {
      const wrapper = document.querySelector('.projects-wrapper');
      wrapper.classList.add('being-edited')
      })
    wrapper.appendChild(container);

  }

  function mainTab() {
    let tabsBar = document.querySelector('.tabs-bar');
    const today = document.createElement('div');
    today.classList.add('tab', 'maintab');
    today.textContent = 'All';
    today.addEventListener('click', () => {
    renderAllTodos();
    newTodoButton(projects[0]);
    });
    tabsBar.appendChild(today);
  }

  function newTabButton() {
    let tabsBar = document.querySelector('.tabs-bar');
    const btn = document.createElement('div');
    btn.classList.add('create-project-button');
    btn.textContent = '+ project'
    btn.style.width = '80px'
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
    let color = tabColor() // maybe I should do this in projects.js?
    projectTab.style.backgroundColor = color  
    let obj = findProjectObj(key);
    obj.color = color;
    tabsBar.appendChild(projectTab)
    projectTab.click()
  }

  function tabColor () {
    let colors = ['#97C1A9', '#F6EAC2', '#FFB8B1', '#FFDAC1','#9AB7D3' ,'#A3E1DC', '#DFCCF1'];
    return colors[`${projects.length-2}`]
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
    
    if(project !== projects[0])
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
    if(todo){title.textContent = todo.name}
    return title
  }
  
  function todoDescription (todo) {
    let description = document.createElement('span');
    description.classList.add('todo-description');
    if(todo){description.textContent = todo.desc}
    return description
  }

  function dueDate(todo){
    let date = document.createElement('div');
    date.classList.add('due-date');
    if(todo) {date.textContent = todo.due}
    return date
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
        let myIndex = project.todos.indexOf(me);
        project.todos.splice(myIndex, 1);
    });
    return icon
  }
  
  export{makeHeader, makeTabsBar, makeTabsHeader, mainTab, newTabButton, newTab, makeTodosContainer, newTodoButton,  deleteIcon, editIcon, todoContainer, todoTitle, todoDescription, dueDate}