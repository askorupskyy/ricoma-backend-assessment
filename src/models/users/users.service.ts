import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UserCreateInput } from './inputs/user-create.input';
import { UserUpdateInput } from './inputs/user-update.input';
import { User } from './user.entity';

export class UsersService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
  ) {}

  read() {
    return this.userRespository.find({ relations: { stores: true } });
  }

  readOne(where: FindOptionsWhere<User>) {
    return this.userRespository.findOne({ where, relations: { stores: true } });
  }

  create(userCreateInput: UserCreateInput) {
    return this.userRespository.save(
      this.userRespository.create(userCreateInput),
    );
  }

  async update({ id, ...update }: UserUpdateInput) {
    const existingEntity = await this.userRespository.findOneBy({ id });

    if (!existingEntity) throw new Error('Unable to update a not found entity');

    const entity = this.userRespository.merge(existingEntity, update);

    return this.userRespository.save(entity);
  }

  async delete(id: number) {
    const entity = await this.userRespository.findOneBy({ id });

    if (!entity) return false;

    return await this.userRespository.remove(entity), true;
  }
}
