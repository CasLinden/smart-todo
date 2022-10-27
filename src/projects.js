import {instantiateTodo} from './todos.js'
import {newTab} from './domelements.js'
import {randomKey} from './keygenerator.js'

let projects = [];

function instantiateProject(name) {
    return {
        name,
        key: randomKey(),
        todos: []
    }
}

function createProject(name){
    let project = instantiateProject(name);
    projects.push(project);
    newTab(name, project.key); 
}

function findProjectObj(dataKey){
    let me = projects.find(element => element.key == dataKey);
    return me
}

projects.push(instantiateProject('misc'));


export {projects, instantiateProject, createProject, findProjectObj}
