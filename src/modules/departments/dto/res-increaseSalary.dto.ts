import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class ResIncreaseSalaryDto {
  @ApiProperty({ description: '임금 인상 적용된 직원 숫자', example: 10 })
  @Expose()
  updatedCount: number;
}
