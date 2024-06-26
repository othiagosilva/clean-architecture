import Entity from "../../@shared/entity/entity.abstract";
import ProductInterface from "./product.interface";

export default class ProductB extends Entity implements ProductInterface {
  private _name: string;
  private _price: number;
  private _type: string;

  constructor(id: string, name: string, price: number, type: string) {
    super();
    this._id = id;
    this._name = name;
    this._price = price;
    this._type = type;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price * 2;
  }

  get type(): string {
    return "b";
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._price < 0) {
      throw new Error("Price must be greater than zero");
    }
    return true;
  }
}
