import {findProjectObj, projects} from './projects.js'
import {renderAllTodos} from './todos.js'
import {newTodoButton} from './domelements.js'

function openProjectOptions (){
let tabs = document.querySelectorAll('.tab');
tabs.forEach(element => {addIcons(element)});
let editProjectsIcon = document.querySelector('.edit-projects-icon');
editProjectsIcon.addEventListener('click', () => {
    closeProjectOptions();
    }, {once : true});
}

function closeProjectOptions() {
    let editProjectsIcon = document.querySelector('.edit-projects-icon');
    let iconHolders = document.querySelectorAll('.icon-holder');
    iconHolders.forEach(element => {
        element.remove();
    });
    editProjectsIcon.addEventListener('click', () => {
        openProjectOptions();
        }, {once : true});
}

function addIcons(projectTab){
    const iconHolder = document.createElement('div');
    iconHolder.classList.add('icon-holder');
    iconHolder.appendChild(editIcon());
    if(!projectTab.classList.contains('maintab')){iconHolder.appendChild(deleteIcon())};
    projectTab.appendChild(iconHolder);
}

function deleteIcon() {
    let btn = document.createElement('div');
    btn.classList.add('delete-icon')
    btn.addEventListener('click', () => {
        let element = btn.parentElement.parentElement;
        let obj = findProjectObj(element.getAttribute('data-key'));
        let myIndex = projects.indexOf(obj)
        projects.splice(myIndex, 1)
        console.log(projects)
        element.remove();
        renderAllTodos();

        //the icons trigger both the renderTodos function for the tab, as well as the the delete function, is there a way to separate them?
    });
    return btn
};

function editIcon() {
    let btn = document.createElement('div');
    btn.classList.add('edit-icon')
    btn.addEventListener('click', () => {
        console.log('trying to edit project')
    });
    return btn
};

export {openProjectOptions}