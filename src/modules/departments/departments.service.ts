import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { plainToInstance } from 'class-transformer';
import { GetDepartmentDto } from './dto/get-department.dto';
import { Employee } from '../employees/entities/employee.entity';
import { ResIncreaseSalaryDto } from './dto/res-increaseSalary.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>, // Repository 주입

    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>, // Repository 주입
  ) {}
  async findAll(): Promise<GetDepartmentDto[] | null> {
    try {
      const departmentList = await this.departmentRepository.find({
        relations: [
          'manager',
          'location',
          'location.country',
          'location.country.region',
        ],
      });

      const departmentDtoList = plainToInstance(
        GetDepartmentDto,
        departmentList,
        {
          excludeExtraneousValues: true,
        },
      );

      return departmentDtoList;
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while retrieving departments.',
      );
    }
  }

  async increaseSalary(
    departmentId: number,
    rate: number,
  ): Promise<ResIncreaseSalaryDto> {
    let departmentExists;
    try {
      departmentExists = await this.departmentRepository.findOneBy({
        departmentId,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while checking the department existence.',
      );
    }

    if (!departmentExists) {
      throw new NotFoundException(
        `Department with ID ${departmentId} does not exist.`,
      );
    }

    let result;
    try {
      result = await this.employeesRepository
        .createQueryBuilder()
        .update(Employee)
        .set({
          salary: () => `salary * ${1 + rate / 100}`,
        })
        .where('department_id = :departmentId', { departmentId })
        .execute();
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while updating employee salaries.',
      );
    }

    // 업데이트된 레코드의 수를 ResIncreaseSalaryDto로 변환
    const responseDto = plainToInstance(ResIncreaseSalaryDto, {
      updatedCount: result.affected,
    });

    return responseDto;
  }
}
