import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ColorCreateInput } from './inputs/color-create.input';
import { ColorUpdateInput } from './inputs/color-update.input';
import { Color } from './color.entity';

export class ColorsService {
  constructor(
    @InjectRepository(Color) private colorRepository: Repository<Color>,
  ) {}

  read() {
    return this.colorRepository.find({ relations: { products: true } });
  }

  readOne(where: FindOptionsWhere<Color>) {
    return this.colorRepository.findOne({
      where,
      relations: { products: true },
    });
  }

  create(colorCreateInput: ColorCreateInput) {
    return this.colorRepository.save(
      this.colorRepository.create(colorCreateInput),
    );
  }

  async update({ id, ...update }: ColorUpdateInput) {
    const existingEntity = await this.colorRepository.findOneBy({ id });

    if (!existingEntity) throw new Error('Unable to update a not found entity');

    const entity = this.colorRepository.merge(existingEntity, update);

    return this.colorRepository.save(entity);
  }

  async delete(id: number) {
    const entity = await this.colorRepository.findOneBy({ id });

    if (!entity) return false;

    return await this.colorRepository.remove(entity), true;
  }
}
