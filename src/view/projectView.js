const ProjectView = () => {
  const projectComponents = {};
  let currentProjectID;

  const getCurrentProjectComponent = () => projectComponents[currentProjectID];

  const changeToProjectComponent = (identifier) => {
    currentProjectID = identifier;
  };

  const addProjectComponent = (identifier, projectComponent) => {
    projectComponents[identifier] = projectComponent;
  };

  return {
    getCurrentProjectComponent,
    addProjectComponent,
    changeToProjectComponent,
  };
};

export default ProjectView;
