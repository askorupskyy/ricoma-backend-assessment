import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());

    const appConfig = app.get(AppConfigService);

    const port = appConfig.port;

    await app.listen(port, () => {
      Logger.log('API listening at http://localhost:' + port);
    });
  } catch (error) {
    Logger.error('Failed to create API ... ', error);
  }
}

bootstrap();
