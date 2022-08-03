import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { AppConfigModule } from './config/app/config.module';
import { JwtConfigModule } from './config/jwt/config.module';
import { MysqlConfigModule } from './config/mysql/config.module';
import { AuthModule } from './models/auth/auth.module';
import { StoresModule } from './models/stores/stores.module';
import { UsersModule } from './models/users/users.module';
import { SizesModule } from './models/sizes/sizes.module';
import { ProductsModule } from './models/products/products.module';
import { GraphQLProviderModule } from './providers/graphql/provider.module';
import { MySQLDatabaseProviderModule } from './providers/mysql/provider.module';
import { ColorsModule } from './models/colors/colors.module';
import { CaslModule } from 'nest-casl';
import { UserRole } from './common/enums/roles.enum';

@Module({
  imports: [
    AppConfigModule,
    MysqlConfigModule,
    JwtConfigModule,
    MySQLDatabaseProviderModule,
    GraphQLProviderModule,
    AuthModule,
    UsersModule,
    ColorsModule,
    SizesModule,
    ProductsModule,
    StoresModule,
    //CaslModule.forRoot<UserRole>({}),
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
