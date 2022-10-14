import {todos} from './index.js'
console.log(todos)


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

export default function add(item){
let container = document.querySelector('.to-do-container');

let itemContainer = document.createElement('div');
itemContainer.classList.add('item-container', `${item.num}`)


let itemTitle = document.createElement('span');
itemTitle.textContent = item.name;
itemContainer.appendChild(itemTitle);
 
let deleteIcon = document.createElement('div')
deleteIcon.classList.add('delete-icon');
deleteIcon.addEventListener('click', del);
        function del () {
          deleteIcon.parentElement.remove()
      }
itemContainer.appendChild(deleteIcon);

let editIcon = document.createElement('div');
editIcon.classList.add('edit-icon');
editIcon.addEventListener('click', edit);
        function edit(){
          editIcon.parentElement.classList.add('being-edited');  
      }

itemContainer.appendChild(editIcon);



itemContainer.appendChild(deleteIcon);
container.appendChild(itemContainer);
}

