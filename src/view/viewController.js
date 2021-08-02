/**
 * For now, it will only display a project component. (a project view)
 *
 * Later on, this will show both the projectView and a side bar to
 * create and view projects.
 */

const viewController = () => {
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';

  const projectContainer = document.createElement('div');
  container.appendChild(projectContainer);

  /**
   * Appends all project components that have not
   * already been appended to the projectContainer element.
   *
   * All project components except for one will be set
   * to display: none. The getCurrentProject function will
   * make sure that the current project is not set to display: none.
   *
   * O(N) runtime. Inefficient to loop through project components,
   * but it's unlikely to cause any problems.
   *
   * @param projectComponents
   * @param getCurrentProject
   */
  const updateProjectContainer = (projectComponents, getCurrentProject) => {
    // append any new project components
    // that already haven't been added
    projectComponents.keys().forEach((key) => {
      const componentTemp = projectComponents[key];
      if (!projectContainer.contains(componentTemp)) {
        projectContainer.appendChild(componentTemp);
      }

      if (componentTemp === getCurrentProject) {
        componentTemp.style.display = 'block';
      } else {
        componentTemp.style.display = 'none';
      }
    });
  };

  const getContainer = () => container;
  const getProjectContainer = () => getProjectContainer;

  return {
    getContainer,
    getProjectContainer,
    updateProjectContainer,
  };
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
