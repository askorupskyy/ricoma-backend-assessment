import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizesResolver } from './sizes.resolver';
import { SizesService } from './sizes.service';
import { Size } from './size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  providers: [SizesService, SizesResolver],
  exports: [SizesService],
})
export class SizesModule {}
