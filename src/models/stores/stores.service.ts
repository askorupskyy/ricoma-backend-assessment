import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { StoreCreateInput } from './inputs/store-create.input';
import { StoreUpdateInput } from './inputs/store-update.input';
import { Store } from './store.entity';

/* 
  ----------------------------------------------------------------------------------------------------
 | TODO: Implement authorization levels:                                                             |
 | • A good lib for this is `CASL`: https://docs.nestjs.com/security/authorization#integrating-casl  |
 | • Everyone should be allow to `read` and `readOne` and only the store owner should be             |
 | allow to run mutations `create`, `update` and `delete`                                            |
  ---------------------------------------------------------------------------------------------------
*/
export class StoresService {
  constructor(
    @InjectRepository(Store) private storeRespository: Repository<Store>,
  ) {}

  // added the posibility to view products of a store as well
  read() {
    return this.storeRespository.find({
      relations: { owner: true, products: true },
    });
  }

  readOne(where: FindOptionsWhere<Store>) {
    return this.storeRespository.findOne({
      where,
      relations: { owner: true, products: true },
    });
  }

  create(StoreCreateInput: StoreCreateInput) {
    return this.storeRespository.save(
      this.storeRespository.create(StoreCreateInput),
    );
  }

  async update({ id, ...update }: StoreUpdateInput) {
    const existingEntity = await this.storeRespository.findOneBy({ id });

    if (!existingEntity) throw new Error('Unable to update a not found entity');

    const entity = this.storeRespository.merge(existingEntity, update);

    return this.storeRespository.save(entity);
  }

  async delete(id: number) {
    const entity = await this.storeRespository.findOneBy({ id });

    if (!entity) return false;

    return await this.storeRespository.remove(entity), true;
  }
}
