import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class JobDto {
  @ApiProperty({ description: '직업 ID', example: 'AD_VP' })
  @Expose()
  jobId: string;

  @ApiProperty({
    description: '직업명',
    example: 'Administration Vice President',
  })
  @Expose()
  jobTitle: string;
}

class DepartmentDto {
  @ApiProperty({ description: '부서 ID', example: 90 })
  @Expose()
  departmentId: number;

  @ApiProperty({ description: '부서명', example: 'Executive' })
  @Expose()
  departmentName: string;
}

class ManagerDto {
  @ApiProperty({ description: '관리자 사원 ID', example: 100 })
  @Expose()
  employeeId: number;

  @ApiProperty({ description: '관리자 이름', example: 'Steven' })
  @Expose()
  firstName: string;

  @ApiProperty({ description: '관리자 성', example: 'King' })
  @Expose()
  lastName: string;
}

export class GetEmployeeDto {
  @ApiProperty({ description: '사원 ID', example: 101 })
  @Expose()
  employeeId: number;

  @ApiProperty({ description: '이름', example: 'Neena' })
  @Expose()
  firstName: string;

  @ApiProperty({ description: '성', example: 'Kochhar' })
  @Expose()
  lastName: string;

  @ApiProperty({ description: '이메일', example: 'NKOCHHAR' })
  @Expose()
  email: string;

  @ApiProperty({ description: '전화번호', example: '515.123.4568' })
  @Expose()
  phoneNumber: string;

  @ApiProperty({
    description: '입사일',
    example: '1989-09-20T15:00:00.000Z',
  })
  @Expose()
  hireDate: Date;

  @ApiProperty({ description: '급여', example: 17000.0 })
  @Expose()
  salary: number;

  @ApiProperty({ description: '커미션 비율', example: null })
  @Expose()
  commissionPct: number | null;

  @ApiProperty({ description: '직업 상세 정보' })
  @Expose()
  @Type(() => JobDto)
  job: JobDto;

  @ApiProperty({ description: '부서 상세 정보' })
  @Expose()
  @Type(() => DepartmentDto)
  department: DepartmentDto;

  @ApiProperty({ description: '관리자 상세 정보' })
  @Expose()
  @Type(() => ManagerDto)
  manager: ManagerDto | null;
}
