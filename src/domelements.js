import {editTodo, createTodo, submitForm} from './todos.js'

function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To-Do';
    header.appendChild(title);
    document.body.appendChild(header);
  }
  makeHeader()
  
  function toDoContainer(){
    let container = document.createElement('div');
    container.classList.add('to-do-container');
    document.body.appendChild(container);
  }
  toDoContainer()       
  
  function createButton () {
    let container = document.querySelector('.to-do-container');
    let addBtn = document.createElement('div')
    addBtn.classList.add('create-button');
    addBtn.textContent = 'CREATE A NEW TODO';
    addBtn.addEventListener('click', () => {
    createTodo(addBtn)
    addBtn.classList.remove('create-button')
    }, {once : true});
    container.appendChild(addBtn)
  }
  createButton()
  
  function deleteIcon () {
    let icon = document.createElement('div')
    icon.classList.add('delete-icon');
    icon.addEventListener('click', () => icon.parentElement.remove())
    return icon
  }
  
  function editIcon() {
    let icon = document.createElement('div');
    icon.classList.add('edit-icon');
    icon.addEventListener('click', () => editTodo(icon.parentElement));
    return icon
  }
  
  function itemContainer () {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container')
    return itemContainer
  }
  
  function itemTitle (item) {
    let title = document.createElement('span');
    title.classList.add('item-title');
    if(item){title.textContent = item.name;}
    return title
  }
  
  function itemDescription (item) {
    let description = document.createElement('span');
    description.classList.add('item-description');
    if(item){description.textContent = item.desc;}
    return description
  }

  function nameInput (placeholder) {
    let input = document.createElement('input');
    input.setAttribute('id', 'name-input');
    if(placeholder) {input.setAttribute('placeholder', placeholder)}; 
    return input
  }

  function descriptionInput (placeholder){
    let input = document.createElement('input');
    input.setAttribute('id', 'description-input');
    if(placeholder) {input.setAttribute('placeholder', placeholder)}; 
    return input
  }

  function submitButton () {
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => submitForm())
    return btn
  }

  function formDOM (item) {
    let name = nameInput('Task');
    let description = descriptionInput('Description');
    let sbmButton = submitButton();
    
    item.appendChild(name);
    item.appendChild(description);
    item.appendChild(sbmButton);
}


  export{makeHeader, toDoContainer, createButton, deleteIcon, editIcon, itemContainer, itemTitle, itemDescription, nameInput, descriptionInput, formDOM}