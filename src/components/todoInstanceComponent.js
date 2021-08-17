/* eslint-disable indent */

function createToDoInstanceComponent(
  title,
  description,
  dueDate,
  priorityColor,
  deleteFunction,
) {
  const container = document.createElement('div');
  container.classList.add('todo-instance');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', deleteFunction);

  return container;
}

export default createToDoInstanceComponent;
