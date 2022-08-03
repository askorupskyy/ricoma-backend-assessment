import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
//import { AccessService, CaslModule } from 'nest-casl';
// import { permissions } from './product.permissions';

@Module({
  imports: [
    //CaslModule.forFeature({ permissions }),
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
