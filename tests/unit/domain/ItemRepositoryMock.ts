import { Item } from '../../../src/domain/Item';
import { ItemRepository } from '../../../src/domain/ItemRepository';

export class ItemRepositoryMock implements ItemRepository {
  private mockSave = jest.fn();

  async save(item: Item): Promise<void> {
    this.mockSave(item);
  }

  assertSaveHasBeenCalledWith(item: Item) {
    expect(this.mockSave).toHaveBeenCalledWith(item);
  }
}
