import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Size } from '../size.entity';
import { ProductUpdateInput } from '../../products/inputs/product-update.input';

@InputType()
export class SizeCreateInput extends OmitType(
  Size,
  ['id', 'createdAt', 'updatedAt', 'products'] as const,
  InputType,
) {}
