import { Type, Expose } from 'class-transformer';

export class ReservoirItemDto {
  @Expose()
  county: string;
  @Expose()
  fac_code: string;
  @Expose()
  fac_name: string;
  @Expose()
  check_date: string;
  @Expose()
  rate: string;
  @Expose()
  water_level: string;
}

export class BodyItemDto {
  @Expose()
  item: ReservoirItemDto[];
  @Expose()
  numOfRows: string;
  @Expose()
  pageNo: string;
  @Expose()
  totalCount: string;
}

export class HeaderItemDto {
  @Expose()
  returnAuthMsg: string;
  @Expose()
  returnReasonCode: string;
}
export class responseBodyDto {
  @Expose()
  @Type(() => BodyItemDto)
  body: BodyItemDto;

  @Expose()
  @Type(() => HeaderItemDto)
  header: HeaderItemDto;
}

export class ReservoirResponseDto {
  @Expose()
  @Type(() => responseBodyDto)
  response: responseBodyDto;
}
