import {editForm, createForm, submitForm} from './todos.js'

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
    addBtn.textContent = '+';
    addBtn.addEventListener('click', () => {
      createForm(addBtn)
      addBtn.classList.remove('create-button')
      createButton()
    }, {once : true});
    container.insertBefore(addBtn, container.firstChild);
  }
  createButton()

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

  function editIcon() {
    let icon = document.createElement('div');
    icon.classList.add('edit-icon');
    icon.addEventListener('click', () => {
      icon.parentElement.classList.remove('item-container');
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
  
  function itemContainer () {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container', 'editable')
    return itemContainer
  }
 

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

  function submitButton (item) {
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => submitForm(item))
    return btn
  }

  function newFormDOM (item, name, description) {
    item.appendChild(nameInput(name));
    item.appendChild(descriptionInput(description));
    item.appendChild(submitButton(item));
}



  export{makeHeader, toDoContainer, createButton, deleteIcon, editIcon, itemContainer, itemTitle, itemDescription, nameInput, descriptionInput, newFormDOM}