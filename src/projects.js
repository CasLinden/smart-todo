import {todos, instantiateTodo} from './todos.js'
import {newTab} from './domelements.js'
import {randomKey} from './keygenerator.js'

let projects = []

function instantiateProject(projectName) {
    return {
        projectName,
        key: randomKey(),
        todos: []
    }
}

function createProject(name){
    let project = instantiateProject(name);
    newTab(name, project.key); 
}

function findProjectObj(dataKey){
    let me = projects.find(element => element.key == dataKey);
    console.log(me)
    return me
}




export {projects, instantiateProject, createProject, findProjectObj}
