import Item from '../domain/Item';
import { ItemRepository } from '../domain/ItemRepository';
import { v4 as uuidv4 } from 'uuid';

type CreateItemInput = {
  name: string;
};

export default class CreateItem {
  constructor(private itemRepository: ItemRepository) {}

  public async execute(input: CreateItemInput): Promise<void> {
    let item = new Item(uuidv4(), input.name, new Date().toISOString());
    await this.itemRepository.save(item);
  }
}
