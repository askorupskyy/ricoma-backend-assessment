import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Product } from '../product.entity';
import { StoreUpdateInput } from '../../stores/inputs/store-update.input';
import { SizeUpdateInput } from '../../sizes/inputs/sizes-update.input';
import { ColorUpdateInput } from '../../colors/inputs/color-update.input';

@InputType()
export class ProductCreateInput extends OmitType(
  Product,
  ['id', 'createdAt', 'updatedAt', 'store', 'sizes', 'colors'] as const,
  InputType,
) {
  @Field(() => StoreUpdateInput, { nullable: true })
  store?: StoreUpdateInput;

  @Field(() => [SizeUpdateInput], { nullable: true })
  sizes?: SizeUpdateInput[];

  @Field(() => [ColorUpdateInput], { nullable: true })
  colors?: ColorUpdateInput[];
}
