import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { SizeCreateInput } from './inputs/sizes-create.input';
import { SizeUpdateInput } from './inputs/sizes-update.input';
import { Size } from './size.entity';

export class SizesService {
  constructor(
    @InjectRepository(Size) private sizeRepository: Repository<Size>,
  ) {}

  read() {
    return this.sizeRepository.find({ relations: { products: true } });
  }

  readOne(where: FindOptionsWhere<Size>) {
    return this.sizeRepository.findOne({
      where,
      relations: { products: true },
    });
  }

  create(sizeCreateInput: SizeCreateInput) {
    return this.sizeRepository.save(
      this.sizeRepository.create(sizeCreateInput),
    );
  }

  async update({ id, ...update }: SizeUpdateInput) {
    const existingEntity = await this.sizeRepository.findOneBy({ id });

    if (!existingEntity) throw new Error('Unable to update a not found entity');

    const entity = this.sizeRepository.merge(existingEntity, update);

    return this.sizeRepository.save(entity);
  }

  async delete(id: number) {
    const entity = await this.sizeRepository.findOneBy({ id });

    if (!entity) return false;

    return await this.sizeRepository.remove(entity), true;
  }
}
