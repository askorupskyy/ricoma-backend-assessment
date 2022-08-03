import { Field, InputType, PartialType } from '@nestjs/graphql';
import { SizeCreateInput } from './sizes-create.input';

@InputType()
export class SizeUpdateInput extends PartialType(SizeCreateInput) {
  @Field()
  id: number;
}
