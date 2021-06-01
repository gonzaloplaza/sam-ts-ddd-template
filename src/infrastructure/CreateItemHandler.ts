import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CreateItem } from '../application/CreateItem';
import { DynamodbItemRepository } from './DynamodbItemRepository';
import { Uuidv4Generator } from './Uuidv4Generator';

export class CreateItemHandler {
  private createItem: CreateItem;
  private uuidGenerator: Uuidv4Generator;

  constructor() {
    this.createItem = new CreateItem(new DynamodbItemRepository());
    this.uuidGenerator = new Uuidv4Generator();
  }

  public async execute(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    if (!event.body) {
      return this.makeResponse(400, { success: false });
    }

    let body = JSON.parse(event.body);

    if (!body.name) {
      return this.makeResponse(400, { success: false });
    } else {
      await this.createItem.execute({
        id: this.uuidGenerator.random(),
        name: body.name,
        createdAt: new Date().toString()
      });
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
