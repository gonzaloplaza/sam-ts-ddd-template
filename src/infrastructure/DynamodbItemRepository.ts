import { ItemRepository } from '../domain/ItemRepository';
import dynamodb from 'aws-sdk/clients/dynamodb';
import { Item } from '../domain/Item';
const docClient = new dynamodb.DocumentClient();
const DEFAULT_TABLENAME = 'items';

export class DynamodbItemRepository implements ItemRepository {
  public async save(item: Item): Promise<void> {
    await docClient
      .put({
        TableName: process.env.TABLE_NAME || DEFAULT_TABLENAME,
        Item: item
      })
      .promise();
  }
}
