const ProjectView = () => {
  const projectComponents = {};
  let currentProjectID;

  const getCurrentProjectComponent = () => projectComponents[currentProjectID];

  const changeToProjectComponent = (identifier) => {
    currentProjectID = identifier;
  };

  const addProjectComponent = (identifier, projectComponent) => {
    if ({}.prototype.hasOwnProperty.call(projectComponent, identifier)) {
      projectComponents[identifier] = projectComponent;
    } else {
      throw Error(`Unable to find ${identifier} project component in list.`);
    }
  };

  return {
    getCurrentProjectComponent,
    addProjectComponent,
    changeToProjectComponent,
  };
};

export default ProjectView;
