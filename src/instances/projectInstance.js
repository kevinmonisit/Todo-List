/* eslint-disable indent */

/**
 *
 */
class Project {
    #projectName;

    #todoList = {};

    /**
     * @param {string} projectName
     */
    constructor(projectName) {
        this.#projectName = projectName;
    }

    /**
     *
     * @param {string} todoID can be any identifier, such as title or description.
     * @param {object} todoObj
     */
    addToList(todoID, todoObj) {
        this.#todoList[todoID] = todoObj;
    }

    /**
     *
     * @param {string} todoID can be any identifier, such as title or description.
     */
    deleteFromList(todoID) {
        delete this.#todoList[todoID];
    }

    getName() {
        return this.#projectName;
    }
}

export default Project;
