import 'normalize.css';
import TodoInstance, {priorityIDs} from './instances/todoInstance';
import Project from './instances/projectInstance';

// controller

let testProject = new Project('test-project');
console.log(testProject.getName());

let first = new TodoInstance('first', 'oh my god', new Date(), priorityIDs.LOW);


testProject.addToList(first.getTitle, first);
console.log(testProject.getTodoList());