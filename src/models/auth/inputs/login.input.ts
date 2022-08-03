import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from '../../users/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['email'] as const, InputType) {
  @Field()
  password: string;
}
