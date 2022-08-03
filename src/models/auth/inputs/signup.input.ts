import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from '../../users/user.entity';

@InputType()
export class SignupInput extends PickType(
  User,
  ['email', 'firstName', 'lastName'] as const,
  InputType,
) {
  @Field()
  password: string;
}
