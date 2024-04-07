import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumberString,
} from 'class-validator';
export class GetReservoirDto {
  @IsString()
  @IsOptional()
  facName: string;

  @IsString()
  @IsOptional()
  county: string;

  @IsNumberString()
  @IsNotEmpty()
  pageNo: number;
}
