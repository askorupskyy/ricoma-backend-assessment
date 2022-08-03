import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../config/app/config.module';
import { MysqlConfigModule } from '../../config/mysql/config.module';
import { UsersModule } from '../../models/users/users.module';
import { StoresModule } from '../../models/stores/stores.module';
import { MySQLDatabaseProviderModule } from '../../providers/mysql/provider.module';
import { SeedCommandRunner } from './seed.command';
import { SeedCommandRunnerService } from './seed.service';
import { ProductsModule } from '../../models/products/products.module';
import { SizesModule } from '../../models/sizes/sizes.module';
import { ColorsModule } from '../../models/colors/colors.module';

@Module({
  imports: [
    AppConfigModule,
    MysqlConfigModule,
    MySQLDatabaseProviderModule,
    ColorsModule,
    SizesModule,
    UsersModule,
    ProductsModule,
    StoresModule,
  ],
  providers: [SeedCommandRunnerService, SeedCommandRunner],
  exports: [SeedCommandRunnerService, SeedCommandRunner],
})
export class SeedCommandRunnerModule {}
