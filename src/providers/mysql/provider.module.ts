import { Global, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { MysqlConfigModule } from '../../config/mysql/config.module';
import { MysqlConfigService } from '../../config/mysql/config.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      inject: [MysqlConfigService],
      useFactory: async (
        mysqlConfigService: MysqlConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        return {
          type: 'mysql',
          host: mysqlConfigService.host,
          port: mysqlConfigService.port,
          username: mysqlConfigService.username,
          password: mysqlConfigService.password,
          database: mysqlConfigService.database,
          logging: mysqlConfigService.logging,
          autoLoadEntities: true,
          synchronize: false,
          namingStrategy: new SnakeNamingStrategy(),
        } as TypeOrmModuleOptions;
      },
    }),
  ],
})
export class MySQLDatabaseProviderModule {}
