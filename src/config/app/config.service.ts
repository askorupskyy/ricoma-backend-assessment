import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private config: ConfigService) {}

  get name(): string {
    return this.config.get<string>('app.name');
  }

  get host(): string {
    return this.config.get<string>('app.host');
  }

  get port(): number {
    return +this.config.get<number>('app.port');
  }

  get env(): string {
    return this.config.get<string>('app.env');
  }
}
