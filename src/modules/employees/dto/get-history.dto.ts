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

export class GetHistoryDto {
  @Expose()
  employeeId: number;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  @Type(() => JobDto)
  job: JobDto;

  @Expose()
  @Type(() => DepartmentDto)
  department: DepartmentDto;
}
