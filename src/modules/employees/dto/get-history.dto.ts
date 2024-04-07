import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class JobDto {
  @ApiProperty({ description: '직업 ID', example: 'AC_ACCOUNT' })
  @Expose()
  jobId: string;

  @ApiProperty({ description: '직업 이름', example: 'Public Accountant' })
  @Expose()
  jobTitle: string;
}

class DepartmentDto {
  @ApiProperty({ description: '부서 ID', example: 110 })
  @Expose()
  departmentId: number;

  @ApiProperty({ description: '부서 이름', example: 'Accounting' })
  @Expose()
  departmentName: string;
}

export class GetHistoryDto {
  @ApiProperty({ description: '사원 ID', example: 101 })
  @Expose()
  employeeId: number;

  @ApiProperty({
    description: '시작 날짜',
    example: '1989-09-20T15:00:00.000Z',
  })
  @Expose()
  startDate: Date;

  @ApiProperty({
    description: '종료 날짜',
    example: '1993-10-26T15:00:00.000Z',
  })
  @Expose()
  endDate: Date;

  @ApiProperty({ description: 'Job 정보' })
  @Expose()
  @Type(() => JobDto)
  job: JobDto;

  @ApiProperty({ description: '부서 정보' })
  @Expose()
  @Type(() => DepartmentDto)
  department: DepartmentDto;
}
