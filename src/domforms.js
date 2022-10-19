import {exampleTodo, todos} from './todos.js'

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

  function submitButton (todo) {
    let btn = document.createElement('button');
    btn.textContent = "submit";
    btn.addEventListener('click', () => submitForm(todo))
    return btn
  }

  // ----------------ABOVE: form elements ---------------- BELOW: form logic ----------------//

function editForm(todo){
    const name = todo.childNodes[0].textContent
    const description = todo.childNodes[1].textContent
    while (todo.firstChild) {
        todo.removeChild(todo.lastChild);
    }
    renderForm(todo, name, description);
};

function createForm (todo) {
    todo.textContent = "";
    renderForm(todo);
};

function renderForm (todo, name, description) {
    todo.classList.add('being-edited');
    todo.appendChild(nameInput(name));
    todo.appendChild(descriptionInput(description));
    todo.appendChild(submitButton(todo));
}

function submitForm(todo) {
    const name = todo.childNodes[0].value
    const description = todo.childNodes[1].value
    if(todo.classList.contains('editable')){
        let key = todo.getAttribute('data-key');
        findTodo(key).name = name;
        findTodo(key).description = description;
        console.log(findTodo(key))
    
    } else{
    exampleTodo(name, description);
    todo.remove()
    }
    console.log(todos)
};

export {nameInput, descriptionInput, submitButton, renderForm, editForm, createForm, submitForm}