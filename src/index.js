import './style.css';
import {newTodo} from './todos';
import {projects, instantiateProject} from './projects.js'

newTodo("fold laundry", "fold the laundry that's out from 2 days ago");
newTodo("do dishes", "do yesterday's dishes and scrub the sink");
newTodo('make tea', 'make sure to pour on the bag lest Lloyd gets upset');

console.log(projects[0].todos)
