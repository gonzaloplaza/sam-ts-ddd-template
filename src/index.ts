import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { CreateItemHandler } from './infrastructure/CreateItemHandler';

export const createItemHandler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  return await new CreateItemHandler().execute(event);
};
