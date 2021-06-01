import { Item } from '../../../src/domain/Item';
import { MessageSender } from '../../../src/domain/MessageSender';

export class MessageSenderMock implements MessageSender {
  private mockSend = jest.fn();

  async send(item: Item): Promise<any> {
    this.mockSend(item);
  }

  assertSendHasBeenCalledWith(item: Item) {
    expect(this.mockSend).toHaveBeenCalledWith(item);
  }
}
