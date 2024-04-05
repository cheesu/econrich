import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity'; // 엔티티의 정확한 경로를 확인하세요.
import { GetEmployeeDto } from './dto/get-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>, // Repository 주입
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll() {
    return `This action returns all employees`;
  }

  //Employee의 현재 상태를 반환하는 findOne 메서드를 구현합니다. 찾는 기준은 employee_id입니다.
  async findOne(id: number): Promise<GetEmployeeDto | null> {
    const employee = await this.employeesRepository.findOne({
      where: { employeeId: id },
      relations: ['job', 'department', 'manager'],
    });

    if (!employee) return null;

    // Job, Department, Manager 정보가 포함된 EmployeeDto를 자동으로 생성
    const employeeDto = plainToClass(GetEmployeeDto, employee, {
      excludeExtraneousValues: true, // 이 옵션은 DTO에서 정의하지 않은 엔티티의 속성을 제외
    });

    return employeeDto;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
