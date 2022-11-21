import './style.css';
import {newTodo} from './todos';

import {projects, loadLocalProjects, renderProjects} from './projects.js'
import {pencilDraw, addSvg} from './pencil'
import {renderAllTodos} from './todos'

loadLocalProjects();
renderProjects();
renderAllTodos();




