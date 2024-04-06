import {
  BadRequestException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { JobHistory } from './entities/jobHistory.entity';
import { GetEmployeeDto } from './dto/get-employee.dto';
import { GetHistoryDto } from './dto/get-history.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>, // Repository 주입

    @InjectRepository(JobHistory)
    private jobHistoryRepository: Repository<JobHistory>, // Repository 주입
  ) {}

  //Employee의 현재 상태를 반환하는 findOne 메서드를 구현합니다. 찾는 기준은 employee_id입니다.
  async findOne(id: number): Promise<GetEmployeeDto | null> {
    try {
      const employee = await this.employeesRepository.findOne({
        where: { employeeId: id },
        relations: ['job', 'department', 'manager'],
      });

      if (!employee)
        throw new NotFoundException(`Employee with ID ${id} not found`);

      const employeeDto = plainToClass(GetEmployeeDto, employee, {
        excludeExtraneousValues: true,
      });

      return employeeDto;
    } catch (error) {
      // 에러가 TypeORM 또는 다른 내부 라이브러리에서 발생한 경우, InternalServerErrorException으로 처리
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async findOneHistory(id: number): Promise<GetHistoryDto[]> {
    try {
      // Employee의 jobHistory를 반환하는 findOneHistory 메서드를 구현합니다. 찾는 기준은 employee_id입니다.
      const jobHistoryList = await this.jobHistoryRepository.find({
        where: { employee: { employeeId: id } },
        relations: ['job', 'department'],
      });

      if (!jobHistoryList.length)
        throw new NotFoundException(
          `Job history for Employee ID ${id} not found`,
        );

      // Job, Department 정보가 포함된 JobHistoryDto를 자동으로 생성
      const jobHistoryDtoList = plainToInstance(GetHistoryDto, jobHistoryList, {
        excludeExtraneousValues: true,
      });

      return jobHistoryDtoList;
    } catch (error) {
      // 에러가 TypeORM 또는 다른 내부 라이브러리에서 발생한 경우, InternalServerErrorException으로 처리
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
