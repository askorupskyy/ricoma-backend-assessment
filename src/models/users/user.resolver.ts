import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserCreateInput } from './inputs/user-create.input';
import { UserUpdateInput } from './inputs/user-update.input';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UserRole } from '../../common/enums/roles.enum';

/* 
  ---------------------------------------------------------------------------
 | TODO: Implement authorization:                                            |
 | • Only users with `admin` role should be allow to access this resolver    |
  ---------------------------------------------------------------------------
*/
@Resolver()
@Roles(UserRole.ADMIN)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users() {
    return this.usersService.read();
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.readOne({ id });
  }

  @Mutation(() => User)
  userCreate(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.usersService.create(userCreateInput);
  }

  @Mutation(() => User)
  userUpdate(@Args('userUpdateInput') userUpdateInput: UserUpdateInput) {
    return this.usersService.update(userUpdateInput);
  }

  @Mutation(() => Boolean)
  userDelete(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.delete(id);
  }
}
