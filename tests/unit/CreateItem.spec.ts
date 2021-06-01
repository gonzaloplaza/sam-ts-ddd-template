import { CreateItem } from '../../src/application/CreateItem';
import { ItemMother } from './domain/ItemMother';
import { MessageSenderMock } from './domain/MessageSenderMock';

describe('Test CreateItem Service', function () {
  let sender: MessageSenderMock;

  beforeEach(() => {
    sender = new MessageSenderMock();
  });
  it('should send an item object', async () => {
    const service = new CreateItem(sender);

    const testItem = ItemMother.random();
    await service.execute(testItem);

    sender.assertSendHasBeenCalledWith(testItem);
  });
});
