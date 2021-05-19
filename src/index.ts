import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { CreateItemHandler } from './infrastructure/CreateItemHandler';

const createItemHandler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  return await new CreateItemHandler().execute(event);
};

export { createItemHandler };
