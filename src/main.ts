import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const options = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: 'Content-Type, Accept',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(options);
  await app.listen(3000);
}

bootstrap();
