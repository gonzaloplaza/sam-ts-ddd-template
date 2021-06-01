import { Item } from '../domain/Item';
import { ItemRepository } from '../domain/ItemRepository';

export class OnCreatedItem {
  constructor(private repository: ItemRepository) {}

  async execute(item: Item): Promise<void> {
    await this.repository.save(item);
  }
}
