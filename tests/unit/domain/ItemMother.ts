import { Item } from '../../../src/domain/Item';
import { Uuidv4Generator } from '../../../src/infrastructure/Uuidv4Generator';
import faker from 'faker';

export class ItemMother {
  static random(): Item {
    return new Item(
      new Uuidv4Generator().random(),
      faker.name.findName(),
      new Date().toISOString()
    );
  }
}
