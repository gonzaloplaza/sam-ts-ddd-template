import { MessageSender } from '../domain/MessageSender';

type CreateItemInput = {
  id: string;
  name: string;
  createdAt: string;
};

export class CreateItem {
  constructor(private sender: MessageSender) {}

  public async execute(input: CreateItemInput): Promise<void> {
    await this.sender.send({ id: input.id, name: input.name, createdAt: input.createdAt });
  }
}
