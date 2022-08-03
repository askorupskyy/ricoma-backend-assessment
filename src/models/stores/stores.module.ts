import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AccessService } from 'nest-casl';
import { Store } from './store.entity';
import { StoresResolver } from './stores.resolver';
import { StoresService } from './stores.service';
// import { CaslModule } from 'nest-casl';
// import { permissions } from './stores.permissions';

@Module({
  imports: [
    //CaslModule.forFeature({ permissions }),
    TypeOrmModule.forFeature([Store]),
  ],
  providers: [StoresService, StoresResolver],
  exports: [StoresService],
})
export class StoresModule {}
