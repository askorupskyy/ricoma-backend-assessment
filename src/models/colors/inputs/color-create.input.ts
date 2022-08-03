import { InputType, OmitType } from '@nestjs/graphql';
import { Color } from '../color.entity';

@InputType()
export class ColorCreateInput extends OmitType(
  Color,
  ['id', 'createdAt', 'updatedAt', 'products'] as const,
  InputType,
) {}
