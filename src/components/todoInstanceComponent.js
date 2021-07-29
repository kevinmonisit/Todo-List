/* eslint-disable indent */

function createToDoInstanceComponent(
  title,
  description,
  dueDate,
  priorityColor,
  deleteFunction,
) {
  const container = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteFunction);

}

export default createToDoInstanceComponent;
