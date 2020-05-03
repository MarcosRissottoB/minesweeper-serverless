'use strict';

class Game {
    constructor(repository) {
        this.repository = repository;
    }

    get(id) {
        return this.repository.get(id);
    }
}

module.exports = Game;