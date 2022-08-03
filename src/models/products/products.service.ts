import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ProductCreateInput } from './inputs/product-create.input';
import { ProductUpdateInput } from './inputs/product-update.input';
import { Product } from './product.entity';

export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  read() {
    return this.productRepository.find({
      relations: { store: true, sizes: true, colors: true },
    });
  }

  readOne(where: FindOptionsWhere<Product>) {
    return this.productRepository.findOne({
      where,
      relations: { store: true, sizes: true, colors: true },
    });
  }

  create(productCreateInput: ProductCreateInput) {
    return this.productRepository.save(
      this.productRepository.create(productCreateInput),
    );
  }

  async update({ id, ...update }: ProductUpdateInput) {
    const existingEntity = await this.productRepository.findOneBy({ id });

    if (!existingEntity) throw new Error('Unable to update a not found entity');

    const entity = this.productRepository.merge(existingEntity, update);

    return this.productRepository.save(entity);
  }

  async delete(id: number) {
    const entity = await this.productRepository.findOneBy({ id });

    if (!entity) return false;

    return await this.productRepository.remove(entity), true;
  }
}
