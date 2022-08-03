import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigModule } from '../app/config.module';
import { MysqlConfigService } from './config.service';
import configuration from './configuration';

@Module({
  imports: [
    AppConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: Joi.object({
        DB_NAME: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().default('127.0.0.1'),
        DB_PORT: Joi.number().default(3306),
        DB_LOGGING: Joi.boolean().default(true),
      }),
    }),
  ],
  providers: [ConfigService, MysqlConfigService],
  exports: [MysqlConfigService],
})
export class MysqlConfigModule {}
