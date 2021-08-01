
/**
 * For now, it will only display a project component. (a project view)
 *
 * Later on, this will show both the projectView and a side bar to
 * create and view projectd.
 * @param {Node} projectView a container that holds information about
 * all the project components
 * @returns {Node} returns a container of all possible components
 */
const viewController = (projectView) => {
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';

  container.appendChild(projectView);

  return container;
};

export default viewController;
