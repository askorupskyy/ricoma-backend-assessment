import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';

@ObjectType()
export class Auth {
  // We don't want to expose it in the response payload
  refreshToken?: string;

  @Field()
  accessToken: string;

  @Field(() => User, { nullable: true })
  user: User;
}
