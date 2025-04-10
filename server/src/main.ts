import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors) => {
      const formattedErrors = errors.map((error) => ({
        field: error.property,
        message: Object.values(error.constraints),
      }));
      return new Error(JSON.stringify(formattedErrors));
    },
  }));

  const config = new DocumentBuilder()
      .setTitle('API de Réservation de Films')
      .setDescription('API avec Authentification et Gestion de Films 🍿') // Description de l\'API
      .setVersion('1.0')
      .addBearerAuth()
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

//https://docs.nestjs.com/openapi/introduction
