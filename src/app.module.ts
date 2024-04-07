import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './modules/employees/employees.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { ReservoirModule } from './modules/reservoir/reservoir.module';

import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      // .forRoot()를 추가하여 전역 모듈로 설정
      isGlobal: true, // 이 옵션을 통해 전역적으로 사용 가능
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 필요한 경우 ConfigModule을 명시적으로 임포트
      useFactory: async (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false, // 주의: 프로덕션 환경에서는 false로 설정해야 합니다.
      }),
      inject: [ConfigService], // ConfigService를 주입
    }),
    EmployeesModule,
    DepartmentsModule,
    ReservoirModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
