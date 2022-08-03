import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCreateInput } from './inputs/product-create.input';
import { ProductUpdateInput } from './inputs/product-update.input';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productService.read();
  }

  @Mutation(() => Product)
  productCreate(
    @Args('productCreateInput') productCreateInput: ProductCreateInput,
  ) {
    return this.productService.create(productCreateInput);
  }

  @Mutation(() => Product)
  productUpdate(
    @Args('productUpdateInput') productUpdateInput: ProductUpdateInput,
  ) {
    return this.productService.update(productUpdateInput);
  }

  @Mutation(() => Boolean)
  productDelete(@Args('id', { type: () => Int }) id: number) {
    return this.productService.delete(id);
  }
}
