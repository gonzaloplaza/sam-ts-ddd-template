import { UuidGenerator } from '../domain/UuidGenerator';
import { v4 as uuidv4 } from 'uuid';

export class Uuidv4Generator implements UuidGenerator {
  random(): string {
    return uuidv4();
  }
}
