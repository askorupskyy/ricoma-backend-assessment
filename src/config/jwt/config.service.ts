import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService {
  constructor(private config: ConfigService) {}

  get secret(): string {
    return this.config.get<string>('jwt.secret');
  }
}
