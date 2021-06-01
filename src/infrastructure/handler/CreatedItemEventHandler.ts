import { SQSEvent, SQSRecord } from 'aws-lambda';
import { OnCreatedItem } from '../../application/OnCreatedItem';
import { Item } from '../../domain/Item';
import { DynamodbItemRepository } from '../DynamodbItemRepository';

export class CreatedItemEventHandler {
  private service: OnCreatedItem;

  constructor() {
    this.service = new OnCreatedItem(new DynamodbItemRepository());
  }

  async execute(event: SQSEvent): Promise<any> {
    await Promise.all(
      event.Records.map(async (record) => {
        let body = JSON.parse(record.body);
        await this.service.execute({ id: body.id, name: body.name, createdAt: body.createdAt });
        console.log('Item persisted with id: ' + body.id);
      })
    );

    return {};
  }
}
