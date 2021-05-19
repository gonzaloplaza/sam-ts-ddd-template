import { Item } from '../domain/Item';
import { ItemRepository } from '../domain/ItemRepository';
import { UuidGenerator } from '../domain/UuidGenerator';

type CreateItemInput = {
  name: string;
};

export class CreateItem {
  constructor(private itemRepository: ItemRepository, private uuidGenerator: UuidGenerator) {}

  public async execute(input: CreateItemInput): Promise<void> {
    const item = new Item(this.uuidGenerator.random(), input.name, new Date().toISOString());
    await this.itemRepository.save(item);
  }
}
