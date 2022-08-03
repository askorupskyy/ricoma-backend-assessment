import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';

import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Injectable()
export class StoreHook implements SubjectBeforeFilterHook<Product, Request> {
  constructor(readonly productService: ProductsService) {}

  async run({ params }: Request) {
    return this.productService.readOne(params.productUpdateInput.id);
  }
}
