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

    #ID;

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
        this.#ID = Date.now();
    }

    /**
     * @returns parameters that were passed through the constructor
     * in their original order.
     */
    getParams() {
        return [this.#title,
                this.#description,
                this.#dueDate,
                this.#priorityLevel];
    }

    getTitle() {
        return this.#title;
    }

    getID() {
        return this.#ID;
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
