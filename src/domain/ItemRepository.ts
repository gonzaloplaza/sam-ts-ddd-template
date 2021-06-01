import { Item } from './Item';

export interface ItemRepository {
  save(item: Item): Promise<void>;
}
