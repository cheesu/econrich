import { Expose } from 'class-transformer';

export class ResIncreaseSalaryDto {
  @Expose()
  updatedCount: number;
}
