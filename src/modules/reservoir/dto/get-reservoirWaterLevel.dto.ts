import { IsNotEmpty, IsString, Matches, IsNumberString } from 'class-validator';

export class GetReservoirWaterLevelDto {
  @IsNotEmpty()
  @IsString()
  facCode: string;

  @IsNotEmpty()
  @IsNumberString({}, { message: 'Validation failed' })
  pageNo: number;

  @IsNotEmpty()
  @IsNumberString()
  @Matches(/^\d{8}$/, {
    message: 'Validation failed',
  })
  dateS: number;

  @IsNotEmpty()
  @IsNumberString()
  @Matches(/^\d{8}$/, {
    message: 'Validation failed',
  })
  dateE: number;
}
