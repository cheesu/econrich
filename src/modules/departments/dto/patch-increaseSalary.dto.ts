import { Expose } from 'class-transformer';

export class IncreaseSalaryDto {
  @Expose()
  rate: number;
}
