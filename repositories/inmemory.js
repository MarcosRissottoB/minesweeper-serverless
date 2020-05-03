'use strict';

class InMemoryRepository {
    constructor(data) {
        this.data = data;
    }

    async get(id) {
        return this.data.find(item => item.id === id);
    }
}

module.exports = InMemoryRepository;