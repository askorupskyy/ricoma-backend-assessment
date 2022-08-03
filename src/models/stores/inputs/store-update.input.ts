import { Field, InputType, PartialType } from '@nestjs/graphql';
import { StoreCreateInput } from './store-create.input';

@InputType()
export class StoreUpdateInput extends PartialType(StoreCreateInput) {
  @Field()
  id: number;
}
