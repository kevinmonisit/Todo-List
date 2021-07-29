/* eslint-disable indent */

const priorityIDs = {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
};

/**
 *
 */
class TodoInstance {
    #title;

    #description;

    #dueDate;

    #priorityLevel;

    /**
     *
     * @param {string} title
     * @param {string} description
     * @param {Date} dueDate
     * @param {number} priorityLevel
     */
    constructor(title, description, dueDate, priorityLevel) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priorityLevel = priorityLevel;
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
    }

    getDueDate() {
        return this.#dueDate;
    }

    getPriorityLevel() {
        return this.#priorityLevel;
    }
}

export default TodoInstance;

export {
    priorityIDs,
};
