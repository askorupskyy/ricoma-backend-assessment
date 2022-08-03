import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from '../app/config.service';

@Injectable()
export class MysqlConfigService {
  constructor(
    private config: ConfigService,
    private appConfig: AppConfigService,
  ) {}

  get database(): string {
    return this.config.get<string>('mysql.database');
  }

  get host(): string {
    return this.config.get<string>('mysql.host');
  }

  get port(): number {
    return +this.config.get<number>('mysql.port');
  }

  get username(): string {
    return this.config.get<string>('mysql.username');
  }

  get password(): string {
    return this.config.get<string>('mysql.password');
  }

  get logging(): boolean {
    const logging = this.config.get<string>('mysql.logging');
    return logging !== undefined
      ? logging === 'true'
      : this.appConfig.env === 'development';
  }
}
