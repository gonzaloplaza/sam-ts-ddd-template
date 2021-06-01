import { CreateItem } from '../../src/application/CreateItem';
import { ItemMother } from './domain/ItemMother';
import { ItemRepositoryMock } from './domain/ItemRepositoryMock';

describe('Tests CreateItem Service', function () {
  let repository: ItemRepositoryMock;

  beforeEach(() => {
    repository = new ItemRepositoryMock();
  });
  it('should save an item object', async () => {
    const service = new CreateItem(repository);

    const testItem = ItemMother.random();
    await service.execute(testItem);

    repository.assertSaveHasBeenCalledWith(testItem);
  });
});
