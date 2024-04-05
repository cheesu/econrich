import { Expose, Type } from 'class-transformer';

class JobDto {
  @Expose()
  jobId: string;

  @Expose()
  jobTitle: string;
}

class DepartmentDto {
  @Expose()
  departmentId: number;

  @Expose()
  departmentName: string;
}

class ManagerDto {
  @Expose()
  employeeId: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}

export class GetEmployeeDto {
  @Expose()
  employeeId: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  hireDate: Date;

  @Expose()
  salary: number;

  @Expose()
  commissionPct: number | null;

  @Expose()
  @Type(() => JobDto)
  job: JobDto;

  @Expose()
  @Type(() => DepartmentDto)
  department: DepartmentDto;

  @Expose()
  @Type(() => ManagerDto)
  manager: ManagerDto | null;
}
