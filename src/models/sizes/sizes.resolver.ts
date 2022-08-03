import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SizeCreateInput } from './inputs/sizes-create.input';
import { SizeUpdateInput } from './inputs/sizes-update.input';
import { Size } from './size.entity';
import { SizesService } from './sizes.service';

@Resolver()
export class SizesResolver {
  constructor(private sizeService: SizesService) {}

  @Query(() => [Size])
  sizes() {
    return this.sizeService.read();
  }

  @Mutation(() => Size)
  sizeCreate(@Args('sizeCreateInput') sizeCreateInput: SizeCreateInput) {
    return this.sizeService.create(sizeCreateInput);
  }

  @Mutation(() => Size)
  sizeUpdate(@Args('sizeUpdateInput') sizeUpdateInput: SizeUpdateInput) {
    return this.sizeService.update(sizeUpdateInput);
  }

  @Mutation(() => Boolean)
  sizeDelete(@Args('id', { type: () => Int }) id: number) {
    return this.sizeService.delete(id);
  }
}
