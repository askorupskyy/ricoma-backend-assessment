import { Field, InputType, PartialType } from '@nestjs/graphql';
import { ProductCreateInput } from './product-create.input';

@InputType()
export class ProductUpdateInput extends PartialType(ProductCreateInput) {
  @Field()
  id: number;
}
