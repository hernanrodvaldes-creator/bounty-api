import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe global con las opciones requeridas
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Elimina propiedades no definidas en DTOs
    forbidNonWhitelisted: true,  // Rechaza propiedades no definidas
    transform: true,  // Transforma los datos automáticamente
  }));

  app.enableCors(); // Para probar desde Postman sin problemas

  await app.listen(3000);
  console.log('🚀 API corriendo en http://localhost:3000');
}
bootstrap();

console.log('ENV:', process.env.MONGODB_URI);
