'use strict';

class DynamoDBRepository {
    constructor(client, table) {
        this.client = client;
        this.table = table;
    }

    async get(id) {
        const { Item } = await client.get({
            TableName: this.table,
            Key: { id },
        }).promise();
        return Item;
    }
}

module.exports = DynamoDBRepository;