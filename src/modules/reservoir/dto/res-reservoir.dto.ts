import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';

class ReservoirItemDto {
  @ApiProperty({ description: '지역명', example: '충청남도 예산군' })
  @Expose()
  county: string;

  @ApiProperty({ description: '시설 코드', example: '4481010021' })
  @Expose()
  fac_code: string;

  @ApiProperty({ description: '시설명', example: '예당(대흥)' })
  @Expose()
  fac_name: string;

  @ApiProperty({ description: '조사 날짜', example: '20230101' })
  @Expose()
  check_date: string;

  @ApiProperty({ description: '저수율', example: '78.6' })
  @Expose()
  rate: string;

  @ApiProperty({ description: '수위', example: '98.3' })
  @Expose()
  water_level: string;
}

class BodyItemDto {
  @ApiProperty({
    description: '항목 목록',
    type: ReservoirItemDto,
    isArray: true,
  })
  @Expose()
  @Type(() => ReservoirItemDto)
  item: ReservoirItemDto[];

  @ApiProperty({ description: '한 페이지당 항목 수', example: '10' })
  @Expose()
  numOfRows: string;

  @ApiProperty({ description: '페이지 번호', example: '1' })
  @Expose()
  pageNo: string;

  @ApiProperty({ description: '전체 항목 수', example: '232' })
  @Expose()
  totalCount: string;
}

class HeaderItemDto {
  @ApiProperty({ description: '응답 메시지', example: 'NORMAL SERVICE' })
  @Expose()
  returnAuthMsg: string;

  @ApiProperty({ description: '응답 코드', example: '00' })
  @Expose()
  returnReasonCode: string;
}

class responseBodyDto {
  @ApiProperty({ description: '응답 본문' })
  @Expose()
  @Type(() => BodyItemDto)
  body: BodyItemDto;

  @ApiProperty({ description: '응답 헤더' })
  @Expose()
  @Type(() => HeaderItemDto)
  header: HeaderItemDto;
}

export class ReservoirResponseDto {
  @ApiProperty({ description: '전체 응답' })
  @Expose()
  @Type(() => responseBodyDto)
  response: responseBodyDto;
}
