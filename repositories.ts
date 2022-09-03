import { Category, Entity, Product } from "./model";

export class BaseRepository<Model extends Entity, TypeiD> {
  findAll(): Model[] {
    return [];
  }

  findOne(id: TypeiD): null | Model {
    return null;
  }

  create(obj: Model) {
    obj.toArray();
  }
}

class CategoryRepository extends BaseRepository<
  Category,
  typeof Category.prototype.id
> {}

class ProductRepository extends BaseRepository<
  Product,
  typeof Product.prototype.id
> {}

const repo = new CategoryRepository();

const repo2 = new ProductRepository();

repo.findAll()[0].id;
