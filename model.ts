export class Entity {
  toArray() {}
}

export class Category extends Entity {
  id: number;
  name: string;
}

export class Product extends Entity {
  id: string;
  name: string;
  price: number;
}
