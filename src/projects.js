import {instantiateTodo, renderAllTodos} from './todos.js'
import {newTab} from './domelements.js'
import {randomKey} from './keygenerator.js'
import {parse, stringify, toJSON, fromJSON} from 'flatted';

let projects = [];

function instantiateProject(name) {
    return {
        name,
        key: randomKey(),
        todos: [],
        color: tabColor()
    };
};

function tabColor () {
    let colors = ['#FFFFFF', '#97C1A9', '#F6EAC2', '#FFB8B1', '#FFDAC1','#9AB7D3' ,'#A3E1DC', '#DFCCF1'];
    let assigned = projects.map(function(proj){
        return proj.color
    });
    for (let i = 0; i < colors.length; i++) {
        if(!assigned.includes(colors[i])){
            var newColor = colors[i]
            if(newColor) {
                return newColor
            } else return '#FFFFFF'
        };
    };
};

  function createProject(name){
    let project = instantiateProject(name);
    projects.push(project);
    newTab(name, project.key);
    storeLocally()
}

function findProjectObj(dataKey){
    let me = projects.find(element => element.key == dataKey);
    return me
}

function renderProjects () {
    projects.forEach(element => {
        if(element.name !== "All"){
            newTab(element.name, element.key, document.querySelector('.tabs-bar').childNodes.length-1)
        }
    });
}
 
projects.push(instantiateProject('All'));

function storeLocally() {
    localStorage.setItem("myProjects", stringify(projects));
    console.log(parse(localStorage.myProjects))
    console.log(projects)
}


function loadLocalProjects () {
    if(localStorage.myProjects){
    projects = parse(localStorage.myProjects)
    }
}





export {projects, instantiateProject, createProject, findProjectObj, storeLocally, loadLocalProjects, renderProjects}