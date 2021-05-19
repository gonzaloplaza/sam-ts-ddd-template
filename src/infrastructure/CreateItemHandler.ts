import CreateItem from '../application/CreateItem';
import DynamodbItemRepository from './DynamodbItemRepository';

export default class CreateItemHandler {
  private createItem: CreateItem;

  constructor() {
    this.createItem = new CreateItem(new DynamodbItemRepository());
  }

  public async execute(event: any) {
    let bodyResponse: object;
    let statusCode = 200;

    let body = JSON.parse(event.body);

    if (!body || !body.name) {
      statusCode = 400;
      bodyResponse = { success: false };
    } else {
      await this.createItem.execute(body.name);
      bodyResponse = { success: true };
    }

    return {
      statusCode: statusCode,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyResponse)
    };
  }
}
