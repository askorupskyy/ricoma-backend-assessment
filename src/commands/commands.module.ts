import { Module } from '@nestjs/common';
import { SeedCommandRunnerModule } from './seed/seed.module';

@Module({
  imports: [SeedCommandRunnerModule],
})
export class CommandsModule {}
