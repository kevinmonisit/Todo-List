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

    /**
     *
     * @param {string} todoID can be any identifier, such as title or description.
     */
    getTodoObj(todoID) {
        if ({}.prototype.hasOwnProperty.call(this.#todoList, todoID)) {
            return this.#todoList[todoID];
        }

        throw Error(`Unable to find ${todoID} instance in the todo list of project
                    ${this.#projectName}`);
    }

    getTodoList() {
        return Object.create(this.#todoList);
    }

    getName() {
        return this.#projectName;
    }
}

export default Project;
