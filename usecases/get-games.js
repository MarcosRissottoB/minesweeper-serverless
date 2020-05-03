'use strict';

const Game = require('../entities/Game');

const getGames = (gameRepository) => async (gameId) => {
    const gameEntity = new Game(gameRepository);
    try {
        const gamePromise = gameEntity.get(gameId);
        const game = await gamePromise;
        return {
            game
        };
    } catch (e) {
        return {
            error: e.message
        };
    }
};

module.exports = getGames;