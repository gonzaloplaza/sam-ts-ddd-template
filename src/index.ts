import CreateItemHandler from './infrastructure/CreateItemHandler';

const createItemHandler = async (event: any, context: any) => {
  return await new CreateItemHandler().execute(event);
};

export { createItemHandler };
