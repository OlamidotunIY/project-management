import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,               // strip properties that are not in the DTO
    forbidNonWhitelisted: true,    // throw error if extra properties are present
    transform: true,               // transform payloads to DTO instances
    transformOptions: { enableImplicitConversion: true }, // allow simple type conversions
  }));


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
