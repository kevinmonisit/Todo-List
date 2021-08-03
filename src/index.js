import 'normalize.css';
import index from './css/index.css';
import TodoInstance, { priorityIDs } from './instances/todoInstance';
import Project from './instances/projectInstance';
import ProjectComponent from './components/projectComponent';
import viewController from './view/viewController';
import ProjectView from './view/projectView';

// controller

const testProject = new Project('test-project');
console.log(testProject.getName());

let first = new TodoInstance('first', 'oh my god', new Date(), priorityIDs.LOW);

testProject.addToList(first.getTitle, first);

const testProjectComponent = ProjectComponent(
  testProject.getName(),
  testProject.getTodoList(),
);

const projectView = ProjectView();
projectView.addProjectComponent(
  testProjectComponent.getTitle(),
  testProjectComponent,
);

const viewControl = viewController(projectView.getCurrentProjectContainer);

viewControl.updateProjectContainer(
  projectView.getDOMReferences((tempProject) => tempProject.getContainer()),
  projectView.getCurrentProjectContainer,
);

document.body.appendChild(viewControl.getContainer());
