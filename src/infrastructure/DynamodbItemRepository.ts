import { ItemRepository } from '../domain/ItemRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Item } from '../domain/Item';

export class DynamodbItemRepository implements ItemRepository {
  private docClient: DocumentClient;

  constructor() {
    this.docClient = new DocumentClient();
  }

  public async save(item: Item): Promise<void> {
    await this.docClient
      .put({
        TableName: process.env.TABLE_NAME || '',
        Item: item
      })
      .promise();
  }
}
