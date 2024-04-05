import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity'; // 엔티티의 정확한 경로를 확인하세요.

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
  async findOne(id: number): Promise<Employee | null> {
    return await this.employeesRepository.findOne({
      where: { employeeId: id },
      relations: ['job', 'department', 'manager'],
    });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
