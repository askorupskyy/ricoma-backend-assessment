import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    name: process.env.APP_NAME,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    env: process.env.APP_ENV,
  };
});
