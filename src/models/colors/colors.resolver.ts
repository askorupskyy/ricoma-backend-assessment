import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorCreateInput } from './inputs/color-create.input';
import { ColorUpdateInput } from './inputs/color-update.input';
import { Color } from './color.entity';
import { ColorsService } from './colors.service';

@Resolver()
export class ColorsResolver {
  constructor(private colorService: ColorsService) {}

  @Query(() => [Color])
  colors() {
    return this.colorService.read();
  }

  @Mutation(() => Color)
  colorCreate(@Args('colorCreateInput') colorCreateInput: ColorCreateInput) {
    return this.colorService.create(colorCreateInput);
  }

  @Mutation(() => Color)
  colorUpdate(@Args('colorUpdateInput') colorUpdateInput: ColorUpdateInput) {
    return this.colorService.update(colorUpdateInput);
  }

  @Mutation(() => Boolean)
  colorDelete(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.delete(id);
  }
}
