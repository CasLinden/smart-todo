import {createTodoForm, editTodoForm, newProjectName, editProjectName} from './domforms.js'
import {findTodoObj, renderTodos, renderAllTodos} from './todos.js'
import {findProjectObj, projects} from './projects.js'
import {openProjectOptions, addIcons} from './projectsoptions'
import {intervalToDuration, parseISO} from 'date-fns'

function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To Do';
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
    const editProjectsIcon = document.createElement('div');
    editProjectsIcon.classList.add('edit-projects-icon');
    editProjectsIcon.addEventListener('click', openProjectOptions, {once: true});
    container.appendChild(h2);
    container.appendChild(editProjectsIcon);
    wrapper.appendChild(container);
  }

  function mainTab() {
    let tabsBar = document.querySelector('.tabs-bar');
    const main = document.createElement('div');
    main.classList.add('tab', 'maintab');
    main.setAttribute('data-key', `${projects[0].key}`)
    main.textContent = `${projects[0].name}`;
    main.addEventListener('click', () => {
    renderAllTodos();
    removeHighlight();
    highlightTab(main)
    });
    highlightTab(main)
    tabsBar.appendChild(main);
  }

  function newTabButton() {
    let tabsBar = document.querySelector('.tabs-bar');
    const btn = document.createElement('div');
    btn.classList.add('create-project-button');
    btn.textContent = '+ project'
    btn.style.width = '80px'
    btn.addEventListener('click', () => {
     newProjectName(btn);
    }, {once : true});
    tabsBar.appendChild(btn)
  }

  function newTab(name, key, index){
    let tabsBar = document.querySelector('.tabs-bar');
    let projectTab = document.createElement('div');
    projectTab.classList.add('tab');
    projectTab.setAttribute('data-key', key);

    let title = projectTab.appendChild(tabTitle(name, key))

    let obj = findProjectObj(key);
    projectTab.style.backgroundColor = obj.color
    if(index){
      tabsBar.insertBefore(projectTab, tabsBar.childNodes[index])
    } else {tabsBar.appendChild(projectTab)};
    
    if(document.querySelector('.projects-wrapper').classList.contains('being-edited')){
      addIcons(projectTab)
    }
    title.click()
  }

  function tabTitle (name, key){
    let title = document.createElement('div');
    title.classList.add('project-title')
    title.textContent = name
    title.addEventListener('click', () => {
      let objectus = findProjectObj(key)
      renderTodos(objectus)
      removeHighlight()
      highlightTab(title.parentElement)
      });
    return title
  }

  function highlightTab (tab){
    tab.classList.add('active-tab')
  }

  function removeHighlight () {
    let tabs = document.querySelectorAll('.tab');
    let highlighted = [...tabs].find((tab) => tab.classList.contains('active-tab'))
    highlighted.classList.remove('active-tab')
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
      {createButton.textContent = `+ To Do for ${project.name}`}
      else {createButton.textContent = '+ To Do';}

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
    let title = document.createElement('div');
    title.classList.add('todo-title');
    if(todo){title.textContent = todo.name}
    return title
  }
  
  function todoDescription (todo) {
    let description = document.createElement('div');
    description.classList.add('todo-description');
    if(todo){description.textContent = todo.desc}
    return description
  }

  function dueDate(todo){
    let dura = document.createElement('div');
    dura.classList.add('due-duration');
    if(todo.due != "") {dura.textContent = formatTodoDate(todo)}
    return dura
    
    function formatTodoDate(todo){
      const now = new Date();
      let duration = intervalToDuration({
        start: now,
        end: parseISO(`${todo.due}`)
      });
      let dateString = ""
      
      if(duration.years !== 0){
        dateString = dateString.concat(`${duration.years} year`)
      }
      if(duration.months !== 0 && duration.years === 0){
        dateString = dateString.concat(`${duration.months} month`)
      }  
      if(duration.days !== 0 && duration.years === 0 && duration.months === 0){
        dateString = dateString.concat(`${duration.days} day`)
      }
      if(duration.hours !== 0 && duration.years === 0 && duration.months === 0 && duration.days === 0){
        dateString = dateString.concat(`${duration.hours} hour`)
      }

        function pluralize (){
        if(parseInt(dateString) > 1){
          dateString = dateString.concat('s')
          }
        }

      pluralize(dateString)

      return dateString
    }
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

  function checkBox (object) {
    let box = document.createElement('div');
    box.classList.add('checkbox');
    box.setAttribute('data-key', `${object.key}`)
    box.style.borderColor = `${object.color}`

    box.addEventListener('click', () => {
      console.log(`I'm done!`)
    })
    return box
  }

  
  export{makeHeader, makeTabsBar, makeTabsHeader, mainTab, newTabButton, newTab, tabTitle, makeTodosContainer, newTodoButton, editIcon, todoContainer, todoTitle, todoDescription, dueDate, checkBox}