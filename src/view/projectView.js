const ProjectView = () => {
  const projectComponents = {};
  let currentProjectID;

  const getCurrentProjectComponent = () => projectComponents[currentProjectID];

  /**
   * @param getContainer the function for a project component that retrieves
   * a reference to its containing div node.
   * @returns container (node) of the current project component.
   */
  const getCurrentProjectContainer = (getContainer) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getContainer.call(projectComponents[currentProjectID]);

  const changeToProjectComponent = (identifier) => {
    currentProjectID = identifier;
  };

  const addProjectComponent = (identifier, projectComponent) => {
    if (!currentProjectID) {
      currentProjectID = identifier;
    }

    if (!Object.prototype.hasOwnProperty.call(projectComponents, identifier)) {
      projectComponents[identifier] = projectComponent;
    } else {
      throw Error(`Tried adding project component ${identifier},
                  but component with similar identifier already exists.`);
    }
  };

  return {
    getCurrentProjectComponent,
    addProjectComponent,
    changeToProjectComponent,
    getCurrentProjectContainer,
  };
};

export default ProjectView;
