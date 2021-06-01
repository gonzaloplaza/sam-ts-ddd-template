import { Item } from './Item';

export interface MessageSender {
  send(item: Item): Promise<any>;
}
