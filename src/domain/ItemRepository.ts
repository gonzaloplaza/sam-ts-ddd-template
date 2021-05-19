import Item from './Item';

export interface ItemRepository {
  save(item: Item): void;
}
