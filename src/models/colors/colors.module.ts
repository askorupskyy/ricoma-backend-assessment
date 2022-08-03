import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorsResolver } from './colors.resolver';
import { ColorsService } from './colors.service';
import { Color } from './color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  providers: [ColorsService, ColorsResolver],
  exports: [ColorsService],
})
export class ColorsModule {}
