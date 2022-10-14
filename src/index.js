import './style.css';
import add from './domstuff.js';

function instantiateItem(name, desc) {
    return {
        name,
        desc,
        giveDesc() {
        return desc
        }
    }
}

let todos = [];

let laundry = todos.push(instantiateItem("fold laundry", "fold the laundry that's out from 2 days ago"));
let dishes = todos.push( instantiateItem("do dishes", "do yesterday's dishes and scrub the sink"));

let renderTodos = () => todos.forEach(element => { add(element)}); 
renderTodos()

console.log(todos)


export {todos} 