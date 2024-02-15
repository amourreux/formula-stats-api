import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips away any properties that do not have decorators
      forbidNonWhitelisted: true, // Throws an error when unexpected properties are present in the DTO
      transform: true, // Automatically transforms incoming values to match the expected DTO types
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Formula Case Study')
    .setDescription('Formula Case Study API for reviewing formula 1 stats.')
    .setVersion('1.0')
    .addTag('f1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
