export default class Item {
  private id: string;
  private name: string;
  private createdAt: string;

  constructor(id: string, name: string, createdAt: string) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }
}
