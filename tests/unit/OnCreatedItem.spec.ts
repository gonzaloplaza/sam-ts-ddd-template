import { OnCreatedItem } from '../../src/application/OnCreatedItem';
import { ItemMother } from './domain/ItemMother';
import { ItemRepositoryMock } from './domain/ItemRepositoryMock';

describe('Test OnCreatedItem service', function () {
  let repository: ItemRepositoryMock;

  beforeEach(() => {
    repository = new ItemRepositoryMock();
  });
  it('should save an item object', async () => {
    const service = new OnCreatedItem(repository);

    const testItem = ItemMother.random();
    await service.execute(testItem);

    repository.assertSaveHasBeenCalledWith(testItem);
  });
});
