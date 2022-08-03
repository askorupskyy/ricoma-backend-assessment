import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config({});

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT as string),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, '..', '..', 'models', '**', '*.entity.ts')],
  migrations: [path.join(__dirname, '..', 'migrations', '*.ts')],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  logging: true,
});
