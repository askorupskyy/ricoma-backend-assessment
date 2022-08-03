import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Store } from '../store.entity';
import { UserUpdateInput } from '../../users/inputs/user-update.input';

@InputType()
export class StoreCreateInput extends OmitType(
  Store,
  ['id', 'createdAt', 'updatedAt', 'owner', 'products'] as const,
  InputType,
) {
  @Field(() => UserUpdateInput, { nullable: true })
  owner?: UserUpdateInput;
}
