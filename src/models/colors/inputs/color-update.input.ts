import { Field, InputType, PartialType } from '@nestjs/graphql';
import { ColorCreateInput } from './color-create.input';

@InputType()
export class ColorUpdateInput extends PartialType(ColorCreateInput) {
  @Field()
  id: number;
}
