import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: configService.get('CORS_ORIGIN') ?? 'http://localhost:3000',
    credentials: true,
  });
  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
