import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class IncreaseSalaryDto {
  @ApiProperty({
    description: '인상률',
    example: 13.1,
    required: true,
  })
  @IsNumber({}, { message: 'Validation failed Number' })
  @IsNotEmpty({ message: 'Validation failed required' })
  @Expose()
  rate: number;
}
