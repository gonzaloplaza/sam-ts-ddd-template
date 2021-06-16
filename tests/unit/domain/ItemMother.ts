import { Item } from '../../../src/domain/Item';
import { Uuidv4Generator } from '../../../src/infrastructure/Uuidv4Generator';
import faker from 'faker';

export class ItemMother {
  static random(): Item {
    return {
      id: new Uuidv4Generator().random(),
      name: faker.name.findName(),
      createdAt: new Date().toISOString()
    };
  }
}
