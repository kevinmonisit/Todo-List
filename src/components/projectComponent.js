/**
 *
 * Creates HTML/CSS component that will display
 * information about a todo instance.
 *
 * @param {string} title
 * @param {string} description
 * @param {Date} dueDate
 * @param {priorityLevel} priorityLevel
 */
const component = (title, description, dueDate, priorityLevel) => {
  const container = document.createElement('div');
  const titleWrapper = document.createElement('div');
  const todoListWrapper = document.createElement('div');

  container.style.display = 'flex';
  container.style['flex-direction'] = 'column';

  return container;
};

export default component;
