import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import CreateItem from '../application/CreateItem';
import DynamodbItemRepository from './DynamodbItemRepository';

export default class CreateItemHandler {
  private createItem: CreateItem;

  constructor() {
    this.createItem = new CreateItem(new DynamodbItemRepository());
  }

  public async execute(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    if (!event.body) {
      return this.makeResponse(400, { success: false });
    }

    let body = JSON.parse(event.body);

    if (!body.name) {
      return this.makeResponse(400, { success: false });
    } else {
      await this.createItem.execute({ name: body.name });
      return this.makeResponse(200, { success: true });
    }
  }

  makeResponse(statusCode: number, bodyResponse: object): APIGatewayProxyResult {
    return {
      statusCode: statusCode,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyResponse)
    };
  }
}
