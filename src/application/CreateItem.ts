import Item from '../domain/Item';
import { ItemRepository } from '../domain/ItemRepository';
import { v4 as uuidv4 } from 'uuid';

export default class CreateItem {
  constructor(private itemRepository: ItemRepository) {}

  public async execute(name: string): Promise<void> {
    let item = new Item(uuidv4(), name, new Date().toISOString());
    await this.itemRepository.save(item);
  }
}
