import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  await app.listen(8081);

  const appService = app.get(AppService); // AppService 인스턴스를 얻습니다.
  await appService.testDatabaseConnection(); // 데이터베이스 연결을 테스트합니다.
}
bootstrap();
