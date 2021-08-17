/**
 *
 * This test file tests simple project API.
 *
 * Creating Projects
 * const project = new Project('test-project');
 * const todoInstance = new TodoInstance('first', 'oh', new Date(), priorityIDs.LOW);
 * const todoInstanceTwo = new TodoInstance('second', 'oh', new Date(), priorityIDs.HIGH);
 *
 * //creates a dictionary
 * project.addTodo(todoInstance);
 * project.addTodo(todoInstanceTwo);
 * project.delete(todoInstanceTwo); //use a dict to find it
 *
 * ----------------------------------
 * Changing which project is being viewed.
 * ----------------------------------
 * //ProjectView is a module that controls which project to show
 * ProjectView.addProject(project, project.getName());
 * ProjectView.addProject(project2, project2.getName());
 *
 * ProjectView.deleteProject(projectReference);
 *
 * ProjectView.setCurrentProjectTo(projectName);
 *
 * ViewControl.setProjectView(ProjectView); // i don't think is necessary?
 *
 * document.body.appendChild(ViewControl.getContainer());
 *
 */

import Project from '../instances/projectInstance';
import TodoInstance, { priorityIDs } from '../instances/todoInstance';
import ProjectView from '../view/projectView';

const STARTING_NUM_TODOS = 10;

/**
 * Creates a new project object that has
 * 10 filler todo instances
 *
 * @return {Project} new project object
 */
function initTempProject(numberOfTodos) {
  const projectTemp = new Project('test-project');
  for (let i = 0; i < numberOfTodos; i += 1) {
    const todoInstance = new TodoInstance(
      i.toString(),
      'description',
      new Date(),
      priorityIDs.LOW,
    );

    projectTemp.addToList(todoInstance);
  }

  return projectTemp;
}

describe('initialized project', () => {
  let testProject = new Project('test-project');
  beforeEach(() => {
    testProject = initTempProject(STARTING_NUM_TODOS);
  });

  test('has correct number of todo instances', () => {
    expect(testProject.getTodoList.length).toBe(STARTING_NUM_TODOS);
  });

  test('successfully deletes todo instance', () => {
    const todoInstance = testProject.getTodoList[1];

    testProject.deleteFromList(todoInstance);
    expect(testProject.getTodoList.length).toBe(STARTING_NUM_TODOS - 1);
  });

  test('throws error with incorrect priority', () => {
    expect(() => {
      testProject.addToList(new TodoInstance(
        'test',
        'test',
        new Date(),
        5,
      ));
    }).toThrow();
  });
});

describe('project view', () => {
  let projectOne;
  let projectTwo;
  let ProjectViewTest;
  beforeEach(() => {
    projectOne = initTempProject(STARTING_NUM_TODOS);
    projectTwo = initTempProject(STARTING_NUM_TODOS);
    ProjectViewTest = Object.create(ProjectView);

    ProjectViewTest.addProject(projectOne);
    ProjectViewTest.addProject(projectTwo);
  });

  test('converts projects into project components', () => {
    expect(ProjectViewTest.getCurrentProjectComponent()).toBeInstanceOf(Node);
  });

  test('can delete projects by title', () => {
    ProjectViewTest.deleteProjectByTitle(projectOne.getTitle());

    expect(ProjectViewTest.getProjectComponent(projectOne)).toThrow();
  });

  test('sets current project successfully', () => {
    ProjectViewTest.setCurrentProject(projectTwo);
    const currentProjectComponent = ProjectViewTest.getCurrentProjectComponent();
    const titleOfComponent = currentProjectComponent.getElementsByClassName()[0].innerHTML;

    expect(titleOfComponent).toBe(projectTwo.getTitle());
  });
});

