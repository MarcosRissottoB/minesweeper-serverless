'use strict';

const DynamoDBRepository = require('../../repositories/dynamodb');
const gameRepository = new DynamoDBRepository(dynamodb, 'games');
const getGamesUserCase = require('../../usecases/get-games')(
  gameRepository
);

const handler = async ({body}) => {
  const { id } = body;
  return getGamesUserCase(id);
};

module.exports = { 
  handler
};