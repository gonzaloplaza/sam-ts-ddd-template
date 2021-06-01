import { Item } from '../domain/Item';
import { ItemRepository } from '../domain/ItemRepository';

type CreateItemInput = {
  id: string;
  name: string;
  createdAt: string;
};

export class CreateItem {
  constructor(private itemRepository: ItemRepository) {}

  public async execute(input: CreateItemInput): Promise<void> {
    await this.itemRepository.save(new Item(input.id, input.name, input.createdAt));
  }
}
