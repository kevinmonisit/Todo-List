
/**
 * For now, it will only display a project component. (a project view)
 *
 * Later on, this will show both the projectView and a side bar to
 * create and view projects.
 * @param {Function} getCurrentProject gets reference to current project node
 * all the project components
 * @returns {Node} returns a container of all possible components
 */

const viewController = (getCurrentProject) => {
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';

  const projectContainer = document.createElement('div');

  /**
   * Appends all project components that have not
   * already been appended to the projectContainer element.
   *
   * All project components except for one will be set
   * to display: none. The getCurrentProject function will
   * make sure that the current project is not set to display: none.
   */
  const updateProjectContainer = (projectComponents, getCurrentProject) => {};

  // container.appendChild(getCurrentProject());





  return container;
};

export default viewController;

/**
 * The goal of viewController.
 * ProjectView is not a node itself. ProjectView controls
 * the information of what projects are to be displayed.
 * View controller will retrieve the currentProject that is being
 * displayed and change whether it is displayed or not (display: none).
 *
 * Therefore, it will be useful to pass a function as a param
 * that retrieves the currentProject from ProjectView.
 */
