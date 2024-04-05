import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])], // Employee 리포지토리 등록
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
