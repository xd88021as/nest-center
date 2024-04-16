import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
      'locale',
    ],
    exposedHeaders: 'Authorization',
    credentials: true,
  });

  const port = process.env.PORT || 3333;
  const address = process.env.ADDRESS || '0.0.0.0';
  await app.listen(port, address);
}
bootstrap();
