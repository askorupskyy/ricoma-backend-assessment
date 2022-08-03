import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigService } from './config.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('App'),
        APP_HOST: Joi.string().default('127.0.0.1'),
        APP_PORT: Joi.number().default(4000),
        APP_ENV: Joi.string()
          .valid('development', 'staging', 'production')
          .default('development'),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
