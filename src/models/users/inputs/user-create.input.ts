import { Field, InputType, OmitType } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType()
export class UserCreateInput extends OmitType(
  User,
  ['id', 'createdAt', 'updatedAt', 'stores'] as const,
  InputType,
) {
  @Field()
  password: string;
}
