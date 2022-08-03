import { Logger } from '@nestjs/common';
import { CommandFactory } from 'nest-commander';
import { CommandsModule } from './commands.module';

async function bootstrap() {
  await CommandFactory.run(CommandsModule, new Logger());
}

bootstrap();
