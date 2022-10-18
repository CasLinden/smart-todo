import './style.css';
import toDOM from './domstuff.js';
import { todos, renderTodos, renderTodo, instantiateTodo, exampleTodo} from './todos';

exampleTodo("fold laundry", "fold the laundry that's out from 2 days ago");
exampleTodo("do dishes", "do yesterday's dishes and scrub the sink");
exampleTodo('make tea', 'make sure to pour on the bag lest Lloyd gets upset');



// let laundry = instantiateTodo("fold laundry", "fold the laundry that's out from 2 days ago");
// let dishes = instantiateTodo("do dishes", "do yesterday's dishes and scrub the sink");
// let tea = instantiateTodo('make tea', 'make sure to pour on the bag or LLoyd gets upset');
// todos.push(laundry, dishes, tea);
// renderTodo(laundry);


// export {todos} 