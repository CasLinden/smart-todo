import './style.css';
import add from './domstuff.js';
import { todos } from './todos';

let renderTodos = () => todos.forEach(element => { add(element)}); 
renderTodos()

export {todos} 