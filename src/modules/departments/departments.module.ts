import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Employee])], // 리포지토리 등록
  controllers: [DepartmentController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
