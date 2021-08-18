/* eslint-disable indent */

/**
 *
 */
class Project {
    #projectName;

    #todoList;

    /**
     * @param {string} projectName
     */
    constructor(projectName) {
        this.#projectName = projectName;
        this.#todoList = [];
    }

    /**
     *
     * @param {string} todoID can be any identifier, such as title or description.
     * @param {object} todoObj
     */
    addToList(todoObj) {
        this.#todoList.push(todoObj);
    }

    /**
     *
     * @param {*} todoInstance
     * @return {todoInstance} the removed todoInstance object
     */
    deleteFromList(todoInstance) {
        const index = this.#todoList.findIndex((e) => todoInstance === e);

        if (index === -1) {
            throw Error(`${todoInstance.getTitle()} was not found in
            the todo list of project ${this.getName}`);
        }

        return this.#todoList.splice(index, 1);
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

    getTodoListElement(index) {
        return this.#todoList[index];
    }

    getTodoListLength() {
        return this.#todoList.length;
}

    getName() {
        return this.#projectName;
    }
}

export default Project;
