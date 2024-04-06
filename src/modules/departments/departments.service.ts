import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { plainToInstance } from 'class-transformer';
import { GetDepartmentDto } from './dto/get-department.dto';
import { Employee } from '../employees/entities/employee.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>, // Repository 주입

    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>, // Repository 주입
  ) {}
  async findAll(): Promise<GetDepartmentDto[] | null> {
    // Employee의 부서 정보를 반환하는 findOneDepartment 메서드를 구현합니다. 찾는 기준은 employee_id입니다.
    const departmentList = await this.departmentRepository.find({
      relations: [
        'manager',
        'location',
        'location.country',
        'location.country.region',
      ],
    });

    if (!departmentList) return null;

    const departmentDtoList = plainToInstance(
      GetDepartmentDto,
      departmentList,
      {
        excludeExtraneousValues: true, // 이 옵션은 DTO에서 정의하지 않은 엔티티의 속성을 제외
      },
    );

    return departmentDtoList;
  }

  async increaseSalary(
    departmentId: number,
    rate: number,
  ): Promise<{ updatedCount: number }> {
    // 먼저 해당 부서 ID가 존재하는지 확인
    const departmentExists = await this.departmentRepository.findOneBy({
      departmentId: departmentId,
    });
    if (!departmentExists) {
      throw new BadRequestException(
        `Department with ID ${departmentId} does not exist.`,
      );
    }

    // 업데이트 실행
    const result = await this.employeesRepository
      .createQueryBuilder()
      .update(Employee)
      .set({
        salary: () => `salary * ${1 + rate / 100}`,
      })
      .where('department_id = :departmentId', { departmentId })
      .execute();

    // 업데이트된 레코드의 수를 반환
    return { updatedCount: result.affected };
  }
}
