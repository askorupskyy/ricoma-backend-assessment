import { Logger } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import { SeedCommandRunnerService } from './seed.service';

interface CommandOptions {
  once?: boolean;
  users?: boolean;
  stores?: boolean;
  colors?: boolean;
  products?: boolean;
  sizes?: boolean;
}

@Command({
  name: 'seed',
  description: "Let's put something in the db we can work with.",
})
export class SeedCommandRunner implements CommandRunner {
  constructor(private seedCommandRunnerService: SeedCommandRunnerService) {}

  private readonly logger = new Logger(SeedCommandRunner.name);

  async run(_: string[], options?: CommandOptions): Promise<void> {
    try {
      if (options?.once !== undefined) {
        await this.seedCommandRunnerService.seedAll();
      } else if (options.users) {
        await this.seedCommandRunnerService.seedUsers();
      } else if (options.stores) {
        await this.seedCommandRunnerService.seedStores();
      } else if (options.colors) {
        await this.seedCommandRunnerService.seedColors();
      } else if (options.sizes) {
        await this.seedCommandRunnerService.seedSizes();
      } else if (options.products) {
        await this.seedCommandRunnerService.seedProducts();
      } else {
        this.logger.warn(
          'Nothing to do. Check `--help` for available options.',
        );
      }
    } catch (error) {
      this.logger.error('Error > ', error?.message ?? 'Something went wrong!');
    }
  }

  @Option({
    flags: '-o, --once [once]',
    description: 'Seed initial data `once`',
  })
  parseOnce(val: string): string {
    return JSON.parse(val);
  }

  @Option({
    flags: '-u, --users [users]',
    description: 'Seed users.',
  })
  parseUsers(val: string): string {
    return JSON.parse(val);
  }

  @Option({
    flags: '-s, --stores [stores]',
    description: 'Seed stores.',
  })
  parseStores(val: string): string {
    return JSON.parse(val);
  }

  @Option({
    flags: '-p, --products [products]',
    description: 'Seed products.',
  })
  parseProducts(val: string): string {
    return JSON.parse(val);
  }

  @Option({
    flags: '-sz, --sizes [sizes]',
    description: 'Seed sizes.',
  })
  parseSizes(val: string): string {
    return JSON.parse(val);
  }

  @Option({
    flags: '-c, --colors [colors]',
    description: 'Seed colors.',
  })
  parseColors(val: string): string {
    return JSON.parse(val);
  }
}
