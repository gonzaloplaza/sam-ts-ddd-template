import { APIGatewayEvent, APIGatewayProxyHandler, SQSEvent, SQSHandler } from 'aws-lambda';
import { CreatedItemEventHandler } from './infrastructure/handler/CreatedItemEventHandler';
import { CreateItemHandler } from './infrastructure/handler/CreateItemHandler';

export const createItemHandler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  return await new CreateItemHandler().execute(event);
};

export const createdItemEventHandler: SQSHandler = async (event: SQSEvent) => {
  return await new CreatedItemEventHandler().execute(event);
};
